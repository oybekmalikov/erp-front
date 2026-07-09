'use client';

import { PageHeader } from '@/components/shared/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, MapPin, Phone } from 'lucide-react';

const mockBranches = [
  {
    id: 1,
    name: 'Main Branch',
    address: 'Tashkent, Chilanzar district, 5th block',
    phone: '+998901234567',
    rooms: 8,
    activeGroups: 12,
    students: 156,
  },
  {
    id: 2,
    name: 'Branch 2',
    address: 'Tashkent, Yunusabad district, 14th block',
    phone: '+998902345678',
    rooms: 5,
    activeGroups: 6,
    students: 89,
  },
  {
    id: 3,
    name: 'Online Campus',
    address: 'Virtual / Online',
    phone: 'N/A',
    rooms: 1,
    activeGroups: 4,
    students: 45,
  },
];

export default function AdminBranchesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Branches"
        description="Manage educational center locations"
        actionLabel="Add Branch"
        onAction={() => console.log('Add branch')}
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockBranches.map((branch) => (
          <Card key={branch.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                {branch.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{branch.phone}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg border p-2">
                  <p className="text-lg font-bold">{branch.rooms}</p>
                  <p className="text-xs text-muted-foreground">Rooms</p>
                </div>
                <div className="rounded-lg border p-2">
                  <p className="text-lg font-bold">{branch.activeGroups}</p>
                  <p className="text-xs text-muted-foreground">Groups</p>
                </div>
                <div className="rounded-lg border p-2">
                  <p className="text-lg font-bold">{branch.students}</p>
                  <p className="text-xs text-muted-foreground">Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
