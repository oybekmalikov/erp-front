'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/page-header';
import { StatusBadge } from '@/components/shared/status-badge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  MoreHorizontal,
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Banknote,
  Clock,
  AlertCircle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const mockPayments = [
  {
    id: 1,
    studentName: 'Ali Valiyev',
    group: 'G-1',
    amount: 4000000,
    dueDate: '2025-07-15',
    paidDate: '2025-07-12',
    paymentType: 'card',
    status: 'completed',
    method: 'monthly',
  },
  {
    id: 2,
    studentName: 'Dilnoza Karimova',
    group: 'G-3',
    amount: 5500000,
    dueDate: '2025-07-20',
    paidDate: null,
    paymentType: 'cash',
    status: 'pending',
    method: 'monthly',
  },
  {
    id: 3,
    studentName: 'Bobur Rahimov',
    group: 'G-5',
    amount: 12000000,
    dueDate: '2025-06-01',
    paidDate: null,
    paymentType: 'transfer',
    status: 'overdue',
    method: 'monthly',
  },
  {
    id: 4,
    studentName: 'Nigora Sodiqova',
    group: 'G-7',
    amount: 8000000,
    dueDate: '2025-07-25',
    paidDate: null,
    paymentType: 'card',
    status: 'pending',
    method: 'half',
  },
  {
    id: 5,
    studentName: 'Javohir Toshmatov',
    group: 'G-2',
    amount: 24000000,
    dueDate: '2025-07-01',
    paidDate: '2025-06-28',
    paymentType: 'cash',
    status: 'completed',
    method: 'full',
  },
];

const mockExpenses = [
  {
    id: 1,
    category: 'Salaries',
    description: 'Monthly teacher salaries',
    amount: 45000000,
    date: '2025-07-01',
    type: 'expense',
  },
  {
    id: 2,
    category: 'Rent',
    description: 'Main branch rent',
    amount: 8000000,
    date: '2025-07-01',
    type: 'expense',
  },
  {
    id: 3,
    category: 'Utilities',
    description: 'Electricity, water, internet',
    amount: 2500000,
    date: '2025-07-05',
    type: 'expense',
  },
  {
    id: 4,
    category: 'Marketing',
    description: 'Instagram ads campaign',
    amount: 3500000,
    date: '2025-07-10',
    type: 'expense',
  },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(value) + ' UZS';
}

const summaryStats = {
  totalRevenue: 125000000,
  totalExpenses: 85000000,
  netBalance: 40000000,
  pendingPayments: 15500000,
  overduePayments: 12000000,
  collectedThisMonth: 95000000,
};

export function FinancePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Finance"
        description="Track payments, expenses, and financial reports"
      />

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <Card className="bg-success/5 border-success/20">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Total Revenue</p>
                <p className="text-lg font-bold">
                  {formatCurrency(summaryStats.totalRevenue)}
                </p>
              </div>
              <div className="rounded-full bg-success/20 p-2">
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-destructive/5 border-destructive/20">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Total Expenses</p>
                <p className="text-lg font-bold">
                  {formatCurrency(summaryStats.totalExpenses)}
                </p>
              </div>
              <div className="rounded-full bg-destructive/20 p-2">
                <TrendingDown className="h-4 w-4 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-brand-primary/5 border-brand-primary/20">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Net Balance</p>
                <p className="text-lg font-bold text-brand-primary">
                  {formatCurrency(summaryStats.netBalance)}
                </p>
              </div>
              <div className="rounded-full bg-brand-primary/20 p-2">
                <DollarSign className="h-4 w-4 text-brand-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-warning/5 border-warning/20">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Pending</p>
                <p className="text-lg font-bold text-warning">
                  {formatCurrency(summaryStats.pendingPayments)}
                </p>
              </div>
              <div className="rounded-full bg-warning/20 p-2">
                <Clock className="h-4 w-4 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-destructive/5 border-destructive/20">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Overdue</p>
                <p className="text-lg font-bold text-destructive">
                  {formatCurrency(summaryStats.overduePayments)}
                </p>
              </div>
              <div className="rounded-full bg-destructive/20 p-2">
                <AlertCircle className="h-4 w-4 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-success/5 border-success/20">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Collected</p>
                <p className="text-lg font-bold text-success">
                  {formatCurrency(summaryStats.collectedThisMonth)}
                </p>
              </div>
              <div className="rounded-full bg-success/20 p-2">
                <CheckCircle className="h-4 w-4 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payments">Student Payments</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Collection Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Monthly collected</span>
                  <span className="font-medium">76%</span>
                </div>
                <Progress value={76} className="h-3" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="rounded-lg border p-3">
                  <p className="text-muted-foreground">Expected</p>
                  <p className="font-bold">{formatCurrency(125000000)}</p>
                </div>
                <div className="rounded-lg border p-3 bg-success/5">
                  <p className="text-muted-foreground">Collected</p>
                  <p className="font-bold text-success">
                    {formatCurrency(95000000)}
                  </p>
                </div>
                <div className="rounded-lg border p-3 bg-warning/5">
                  <p className="text-muted-foreground">Outstanding</p>
                  <p className="font-bold text-warning">
                    {formatCurrency(30000000)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowUpRight className="h-5 w-5 text-success" />
                  Recent Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockPayments
                    .filter((p) => p.status === 'completed')
                    .slice(0, 3)
                    .map((payment) => (
                      <div
                        key={payment.id}
                        className="flex items-center justify-between rounded-lg border p-3"
                      >
                        <div>
                          <p className="font-medium">{payment.studentName}</p>
                          <p className="text-xs text-muted-foreground">
                            {payment.group} | {payment.method}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-success">
                            {formatCurrency(payment.amount)}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {payment.paymentType}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowDownRight className="h-5 w-5 text-destructive" />
                  Recent Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockExpenses.slice(0, 3).map((expense) => (
                    <div
                      key={expense.id}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <div>
                        <p className="font-medium">{expense.category}</p>
                        <p className="text-xs text-muted-foreground">
                          {expense.description}
                        </p>
                      </div>
                      <p className="font-medium text-destructive">
                        -{formatCurrency(expense.amount)}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Group</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Paid Date</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">
                        {payment.studentName}
                      </TableCell>
                      <TableCell>{payment.group}</TableCell>
                      <TableCell>{formatCurrency(payment.amount)}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {payment.dueDate}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {payment.paidDate || '-'}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{payment.paymentType}</Badge>
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={payment.status} />
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Record payment</DropdownMenuItem>
                            <DropdownMenuItem>Send reminder</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-end mb-4">
                <Button className="bg-brand-primary hover:bg-brand-primary-dark">
                  Add Expense
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockExpenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">
                        {expense.category}
                      </TableCell>
                      <TableCell>{expense.description}</TableCell>
                      <TableCell className="text-destructive">
                        -{formatCurrency(expense.amount)}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {expense.date}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                Financial reports will be displayed here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
