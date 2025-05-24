'use client';

import { UserManagement } from '@/components/admin/user-management';

export default function UsersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">User Management</h1>
        <p className="text-muted-foreground">
          Manage admin users and their permissions
        </p>
      </div>
      <UserManagement />
    </div>
  );
} 