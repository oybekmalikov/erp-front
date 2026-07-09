'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Calendar, 
  FileText,
  ArrowRight,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Total Students', value: '1,245', icon: Users, color: 'bg-blue-500/10 text-blue-600' },
  { label: 'Active Courses', value: '24', icon: BookOpen, color: 'bg-green-500/10 text-green-600' },
  { label: 'Revenue', value: '₦42.5M', icon: TrendingUp, color: 'bg-orange-500/10 text-orange-600' },
  { label: 'Completion Rate', value: '87%', icon: BarChart3, color: 'bg-purple-500/10 text-purple-600' },
];

const recentActivities = [
  { type: 'student', action: '50 new students enrolled', time: '2 hours ago', course: 'Backend Bootcamp' },
  { type: 'payment', action: '3 payments received', time: '4 hours ago', amount: '₦12M' },
  { type: 'course', action: 'Full Stack course completed', time: '1 day ago', students: '18 students' },
  { type: 'staff', action: 'New instructor added', time: '2 days ago', name: 'Sarah Johnson' },
];

const quickStats = [
  { label: 'Classes This Week', value: '32', icon: Calendar },
  { label: 'Pending Assignments', value: '12', icon: FileText },
  { label: 'New Inquiries', value: '8', icon: AlertCircle },
  { label: 'Certificates Issued', value: '45', icon: CheckCircle },
];

export default function MainDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">Main Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's your educational institution overview.</p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">This month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Key Metrics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
                <CardDescription>Today's statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickStats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-lg border hover:border-primary/50 transition-colors">
                      <div className="flex justify-center mb-2">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Admin Panel */}
            <Card>
              <CardHeader>
                <CardTitle>Administration</CardTitle>
                <CardDescription>Manage your institution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/admin/users">
                      <Users className="h-4 w-4 mr-2" />
                      Manage Users
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/admin/students">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Students
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/admin/staff-members">
                      <Users className="h-4 w-4 mr-2" />
                      Staff Management
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="justify-start">
                    <Link href="/admin/branches-mgmt">
                      <MapIcon className="h-4 w-4 mr-2" />
                      Branches
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates in your system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-b-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {activity.course || activity.amount || activity.students || activity.name} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Access */}
          <div className="space-y-6">
            {/* Portal Access */}
            <Card>
              <CardHeader>
                <CardTitle>Portal Access</CardTitle>
                <CardDescription>Quick links to portals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild className="w-full">
                  <Link href="/admin/users">Admin Panel</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/teacher">Teacher Portal</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/student">Student Portal</Link>
                </Button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Database</span>
                  <Badge className="bg-green-500">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">API Server</span>
                  <Badge className="bg-green-500">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Email Service</span>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Payment Gateway</span>
                  <Badge className="bg-green-500">Connected</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card>
              <CardHeader>
                <CardTitle>Help & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start text-xs">
                  <a href="#" target="_blank">📖 Documentation</a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start text-xs">
                  <a href="#" target="_blank">💬 Contact Support</a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start text-xs">
                  <a href="#" target="_blank">🎓 Training Videos</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper icon component
function MapIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
