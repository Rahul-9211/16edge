'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Trash2, Users, Shield, UserCog } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface User {
  _id: string;
  email: string;
  role: string;
  createdAt: string;
}

interface UserStats {
  total: number;
  admins: number;
  superAdmins: number;
}

export function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const stats: UserStats = {
    total: users.length,
    admins: users.filter(user => user.role === 'admin').length,
    superAdmins: users.filter(user => user.role === 'super_admin').length,
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users', {
        credentials: 'include',
      });
      const data = await response.json();
      
      if (response.ok) {
        setUsers(data.users);
      } else {
        // Handle different error cases
        if (response.status === 401) {
          toast.error('Session expired. Please login again.');
        } else if (response.status === 403) {
          toast.error('You do not have permission to view users.');
        } else {
          toast.error(data.error || 'Failed to fetch users');
        }
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to fetch users. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(newUser),
      });

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        toast.success('User created successfully');
        setNewUser({ email: '', password: '' });
        // Refresh the list immediately after successful creation
        await fetchUsers();
      } else {
        // Handle different error cases
        if (response.status === 401) {
          toast.error('Session expired. Please login again.');
        } else if (response.status === 403) {
          toast.error('You do not have permission to create users.');
        } else {
          toast.error(data.error || 'Failed to create user');
        }
      }
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('Failed to create user. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (userId: string) => {
    const user = users.find(u => u._id === userId);
    if (user) {
      setUserToDelete(user);
    }
  };

  const confirmDelete = async () => {
    if (!userToDelete) return;

    setDeletingUserId(userToDelete._id);
    try {
      const response = await fetch(`/api/admin/users?userId=${userToDelete._id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('User deleted successfully');
        // Refresh the list
        await fetchUsers();
      } else {
        // Handle different error cases
        if (response.status === 401) {
          toast.error('Session expired. Please login again.');
        } else if (response.status === 403) {
          toast.error('You do not have permission to delete users.');
        } else {
          toast.error(data.error || 'Failed to delete user');
        }
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user. Please try again.');
    } finally {
      setDeletingUserId(null);
      setUserToDelete(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Users</p>
              <p className="text-2xl font-semibold">{stats.total}</p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Admin Users</p>
              <p className="text-2xl font-semibold">{stats.admins}</p>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <UserCog className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Super Admins</p>
              <p className="text-2xl font-semibold">{stats.superAdmins}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted p-6 rounded-lg border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Add New Admin User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              required
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create User'}
          </Button>
        </form>
      </div>

      <div className="bg-muted p-6 rounded-lg border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Admin Users</h2>
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-card p-4 rounded-lg border border-border"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-foreground">{user.email}</p>
                  <p className="text-sm text-muted-foreground">
                    Created: {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{user.role}</span>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(user._id)}
                    disabled={deletingUserId === user._id}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {users.length === 0 && (
            <p className="text-muted-foreground text-center py-4">No users found</p>
          )}
        </div>
      </div>

      <AlertDialog open={!!userToDelete} onOpenChange={() => setUserToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the user account for {userToDelete?.email}.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 