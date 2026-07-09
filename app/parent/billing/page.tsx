'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DollarSign,
  CreditCard,
  Download,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';

export default function ParentBillingPage() {
  const invoices = [
    {
      id: 1,
      month: 'June 2024',
      dueDate: '2024-06-30',
      amount: 500,
      status: 'Paid',
      date: '2024-06-15',
    },
    {
      id: 2,
      month: 'July 2024',
      dueDate: '2024-07-30',
      amount: 500,
      status: 'Pending',
      date: '2024-07-01',
    },
    {
      id: 3,
      month: 'August 2024',
      dueDate: '2024-08-30',
      amount: 500,
      status: 'Overdue',
      date: '2024-08-01',
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      last4: '4242',
      expiry: '12/25',
      default: true,
    },
    {
      id: 2,
      type: 'Bank Transfer',
      account: '****5678',
      default: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Billing & Payments</h1>
        <p className="text-muted-foreground">Manage invoices and payment methods</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Due
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">$500</div>
            <p className="text-xs text-muted-foreground mt-1">1 overdue payment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Year to Date
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$3,000</div>
            <p className="text-xs text-muted-foreground mt-1">6 months enrolled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Next Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$500</div>
            <p className="text-xs text-muted-foreground mt-1">Due Aug 30, 2024</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="w-full">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payments">Payment Methods</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-4">
          {invoices.map((invoice) => (
            <Card key={invoice.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold">{invoice.month}</h4>
                      <Badge
                        variant={
                          invoice.status === 'Paid'
                            ? 'default'
                            : invoice.status === 'Pending'
                            ? 'secondary'
                            : 'destructive'
                        }
                      >
                        {invoice.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Due: {invoice.dueDate}
                    </p>
                  </div>
                  <div className="text-right mr-4">
                    <p className="text-2xl font-bold">${invoice.amount}</p>
                  </div>
                  <Button variant="outline" size="sm" gap-2>
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          {paymentMethods.map((method) => (
            <Card key={method.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{method.type}</p>
                      <p className="text-sm text-muted-foreground">
                        {method.type === 'Credit Card'
                          ? `Ends with ${method.last4}, Expires ${method.expiry}`
                          : `Account ending ${method.account}`}
                      </p>
                    </div>
                  </div>
                  {method.default && <Badge>Default</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}

          <Button className="w-full mt-4">Add Payment Method</Button>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">June 2024 Invoice Paid</p>
                    <p className="text-sm text-muted-foreground">June 15, 2024</p>
                  </div>
                </div>
                <p className="font-semibold">$500.00</p>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">May 2024 Invoice Paid</p>
                    <p className="text-sm text-muted-foreground">May 20, 2024</p>
                  </div>
                </div>
                <p className="font-semibold">$500.00</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
