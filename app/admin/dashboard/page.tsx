'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { UserManagement } from '@/components/admin/user-management';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, FileCode, History, Users } from 'lucide-react';

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Get user info from localStorage
    const userStr = localStorage.getItem('adminUser');
    if (userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    
    // Clear cookies
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    toast.success('Logged out successfully');
    router.push('/admin');
  };

  const stats = [
    {
      title: 'Total Snippets',
      value: '0',
      icon: FileCode,
      description: 'Code snippets created',
    },
    {
      title: 'Active Sessions',
      value: '1',
      icon: Code2,
      description: 'Current active sessions',
    },
    {
      title: 'Recent Activity',
      value: '0',
      icon: History,
      description: 'Actions in last 24 hours',
    },
    {
      title: 'Admin Users',
      value: '1',
      icon: Users,
      description: 'Total admin accounts',
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <Button
                onClick={handleLogout}
                className="bg-destructive hover:bg-destructive/90"
              >
                Logout
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg border border-border">
              <h2 className="text-lg font-semibold text-foreground mb-4">Welcome</h2>
              {user && (
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <span className="font-medium">Email:</span> {user.email}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Role:</span> {user.role}
                  </p>
                </div>
              )}
            </div>

            
            <UserManagement />
          </div>
        </div>
      </div>
    </div>
  );
} 