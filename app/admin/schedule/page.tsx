'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

export default function AdminSchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <PageHeader
        title="Schedule"
        description="View and manage lesson schedules"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              Select a date to view scheduled lessons and events.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
