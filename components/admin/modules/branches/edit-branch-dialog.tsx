'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Branch } from '@/lib/api/types';
import { useUpdateBranch } from '@/lib/api/hooks';
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

const updateBranchSchema = z.object({
  name: z.string().optional(),
  callNumber: z.string().optional(),
  location: z.object({
    lat: z.number().optional(),
    lon: z.number().optional(),
  }).optional(),
});

type UpdateBranchFormValues = z.infer<typeof updateBranchSchema>;

interface EditBranchDialogProps {
  branch: Branch;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditBranchDialog({ branch, open, onOpenChange }: EditBranchDialogProps) {
  const updateBranch = useUpdateBranch();

  const form = useForm<UpdateBranchFormValues>({
    resolver: zodResolver(updateBranchSchema),
    defaultValues: {
      name: branch.name,
      callNumber: branch.callNumber,
      location: typeof branch.location === 'object' ? branch.location : { lat: 0, lon: 0 },
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({
        name: branch.name,
        callNumber: branch.callNumber,
        location: typeof branch.location === 'object' ? branch.location : { lat: 0, lon: 0 },
      });
    }
  }, [open, branch, form]);

  const onSubmit = async (values: UpdateBranchFormValues) => {
    const dataToSend = {
      ...values,
      location: values.location ? {
        lat: values.location.lat ?? 0,
        lon: values.location.lon ?? 0,
      } : undefined,
    };
    await updateBranch.mutateAsync({ id: String(branch.id), data: dataToSend });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Branch</DialogTitle>
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
                    <Input {...field} />
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
                    <Input {...field} />
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
                disabled={updateBranch.isPending}
                className="flex-1"
              >
                {updateBranch.isPending ? 'Saving...' : 'Save Changes'}
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
