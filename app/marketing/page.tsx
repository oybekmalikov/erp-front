'use client';

import { AppLayout } from '@/components/layout';
import { PageHeader } from '@/components/shared/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, Calendar } from 'lucide-react';

export default function MarketingRoute() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <PageHeader
          title="Marketing"
          description="Campaigns and promotional activities"
        />

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-brand-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Active Campaigns</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-info" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Leads</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-2xl font-bold">23%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-warning" />
                <div>
                  <p className="text-sm text-muted-foreground">Events This Month</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">Summer Bootcamp Promo</p>
                  <p className="text-sm text-muted-foreground">
                    Instagram & Facebook ads
                  </p>
                </div>
                <Badge className="bg-success text-white">Active</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">Referral Program</p>
                  <p className="text-sm text-muted-foreground">
                    Existing student referrals
                  </p>
                </div>
                <Badge className="bg-success text-white">Active</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">Free Trial Week</p>
                  <p className="text-sm text-muted-foreground">
                    First week free for new students
                  </p>
                </div>
                <Badge className="bg-success text-white">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
