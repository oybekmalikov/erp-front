'use client';

import { PageHeader } from '@/components/shared/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Manage application settings" />

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="users">User Roles</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>
                Basic information about your education center
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Organization Name</Label>
                  <Input id="name" defaultValue="Studify Academy" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <Input id="email" type="email" defaultValue="info@studify.uz" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input id="phone" defaultValue="+998901234567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select defaultValue="uzs">
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uzs">UZS - Uzbek Som</SelectItem>
                      <SelectItem value="usd">USD - US Dollar</SelectItem>
                      <SelectItem value="eur">EUR - Euro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-brand-primary hover:bg-brand-primary-dark">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Settings</CardTitle>
              <CardDescription>
                Configure academic year and grading options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="passingGrade">Passing Grade (%)</Label>
                  <Input id="passingGrade" type="number" defaultValue="60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attendanceThreshold">
                    Min Attendance Required (%)
                  </Label>
                  <Input
                    id="attendanceThreshold"
                    type="number"
                    defaultValue="80"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure when and how notifications are sent
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Payment Reminders</p>
                  <p className="text-sm text-muted-foreground">
                    Send automatic payment reminders to students
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Attendance Alerts</p>
                  <p className="text-sm text-muted-foreground">
                    Notify parents when students miss class
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Lesson Reminders</p>
                  <p className="text-sm text-muted-foreground">
                    Remind students about upcoming lessons
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-muted-foreground">
                    Send promotional content to leads
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Role Permissions</CardTitle>
              <CardDescription>
                Configure access levels for different user roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Admin', 'Manager', 'Teacher', 'Student', 'Parent'].map((role) => (
                  <div
                    key={role}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <p className="font-medium">{role}</p>
                      <p className="text-sm text-muted-foreground">
                        {role === 'Admin'
                          ? 'Full system access'
                          : role === 'Manager'
                          ? 'Manage students, staff, finance'
                          : role === 'Teacher'
                          ? 'View and manage assigned groups'
                          : role === 'Student'
                          ? 'View own courses and progress'
                          : 'View child progress'}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit Permissions
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Third-party Integrations</CardTitle>
              <CardDescription>
                Connect external services to enhance functionality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-green-100 p-2">
                    <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp Business</p>
                    <p className="text-sm text-muted-foreground">
                      Send automated messages to students and parents
                    </p>
                  </div>
                </div>
                <Button variant="outline">Connect</Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.15 5 4.02 5 7.41 0 2.08-1.07 3.9-2.74 5.06z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Telegram Bot</p>
                    <p className="text-sm text-muted-foreground">
                      Send notifications via Telegram
                    </p>
                  </div>
                </div>
                <Button variant="outline">Connect</Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-success/50 bg-success/5 p-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-success/20 p-2">
                    <svg className="h-6 w-6 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Payment Gateway</p>
                    <p className="text-sm text-muted-foreground">
                      Accept online payments from students
                    </p>
                  </div>
                </div>
                <Button className="bg-brand-primary">Configure</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
