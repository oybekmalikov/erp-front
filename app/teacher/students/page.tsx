'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Mail, Phone, Download } from 'lucide-react';

const mockStudents = [
  { id: 1, name: 'John Smith', email: 'john@example.com', phone: '+998 90 123 45 67', group: 'Backend Bootcamp - A', score: 92, attendance: 95, status: 'Active' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+998 90 234 56 78', group: 'Backend Bootcamp - A', score: 88, attendance: 92, status: 'Active' },
  { id: 3, name: 'Mike Chen', email: 'mike@example.com', phone: '+998 90 345 67 89', group: 'Full Stack - B', score: 85, attendance: 88, status: 'Active' },
  { id: 4, name: 'Emma Davis', email: 'emma@example.com', phone: '+998 90 456 78 90', group: 'Full Stack - B', score: 90, attendance: 98, status: 'Active' },
  { id: 5, name: 'Alex Brown', email: 'alex@example.com', phone: '+998 90 567 89 01', group: 'Backend Bootcamp - A', score: 79, attendance: 85, status: 'Active' },
];

export default function TeacherStudentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Students</h1>
          <p className="text-muted-foreground mt-1">Manage and track your students</p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export List
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Students ({filteredStudents.length})</CardTitle>
          <CardDescription>View and manage student information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-3">Name</th>
                  <th className="text-left font-medium p-3">Email</th>
                  <th className="text-left font-medium p-3">Group</th>
                  <th className="text-left font-medium p-3">Score</th>
                  <th className="text-left font-medium p-3">Attendance</th>
                  <th className="text-left font-medium p-3">Status</th>
                  <th className="text-left font-medium p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-secondary/50">
                    <td className="p-3 font-medium">{student.name}</td>
                    <td className="p-3 text-muted-foreground">{student.email}</td>
                    <td className="p-3">{student.group}</td>
                    <td className="p-3">
                      <Badge className={student.score >= 90 ? 'bg-green-500' : student.score >= 80 ? 'bg-blue-500' : 'bg-orange-500'}>
                        {student.score}%
                      </Badge>
                    </td>
                    <td className="p-3">{student.attendance}%</td>
                    <td className="p-3">
                      <Badge variant="outline">{student.status}</Badge>
                    </td>
                    <td className="p-3">
                      <Button size="sm" variant="ghost">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
