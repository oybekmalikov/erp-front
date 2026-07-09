'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCreateBranch } from '@/lib/api/hooks';
import { useQueryClient } from '@tanstack/react-query';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const createBranchSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  callNumber: z.string().min(1, 'Call number is required'),
  location: z.object({
    lat: z.number(),
    lon: z.number(),
  }),
});

type CreateBranchFormValues = z.infer<typeof createBranchSchema>;

interface CreateBranchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateBranchDialog({ open, onOpenChange }: CreateBranchDialogProps) {
  const createBranch = useCreateBranch();
  const queryClient = useQueryClient();

  const form = useForm<CreateBranchFormValues>({
    resolver: zodResolver(createBranchSchema),
    defaultValues: {
      name: '',
      callNumber: '',
      location: { lat: 0, lon: 0 },
    },
  });

  const onSubmit = async (values: CreateBranchFormValues) => {
    await createBranch.mutateAsync(values);
    form.reset();
    onOpenChange(false);
    queryClient.invalidateQueries({ queryKey: ['branches'] });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Branch</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Branch Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Main Office" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="callNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Call Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+998..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location.lat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Latitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location.lon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.0001"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                type="submit"
                disabled={createBranch.isPending}
                className="flex-1"
              >
                {createBranch.isPending ? 'Creating...' : 'Create Branch'}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
