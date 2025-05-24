'use client';

import { useEffect, useState } from 'react';
import { AdminLoginForm } from '@/components/admin/login-form';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');
    setIsLoggedIn(!!token && !!user);
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    
    // Clear cookies by setting an expired date
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    setIsLoggedIn(false);
    toast.success('Logged out successfully');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full space-y-8 p-8 bg-card rounded-lg shadow-lg border border-border">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-foreground">
            {isLoggedIn ? 'Welcome Back!' : 'Admin Login'}
          </h2>
          {isLoggedIn && (
            <p className="mt-2 text-sm text-muted-foreground">
              You are logged in as an administrator
            </p>
          )}
        </div>

        {isLoggedIn ? (
          <div className="mt-8 space-y-6">
            <Button
              onClick={handleLogout}
              className="w-full bg-destructive hover:bg-destructive/90"
            >
              Logout
            </Button>
          </div>
        ) : (
          <AdminLoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </div>
    </div>
  );
} 