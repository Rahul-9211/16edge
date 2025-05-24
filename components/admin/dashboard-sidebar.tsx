'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Code2,
  FileCode,
  History,
} from 'lucide-react';
import { cn } from '@/lib/utils';


import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');

    // Clear cookies
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    toast.success('Logged out successfully');
    router.push('/admin');
  };

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    // {
    //   name: 'Code Editor',
    //   href: '/admin/dashboard/editor',
    //   icon: Code2,
    // },
    // {
    //   name: 'Snippets',
    //   href: '/admin/dashboard/snippets',
    //   icon: FileCode,
    // },
    // {
    //   name: 'History',
    //   href: '/admin/dashboard/history',
    //   icon: History,
    // },
  ];

  const settings = [
    {
      name: 'Users',
      href: '/admin/dashboard/users',
      icon: Users,
    },
    // {
    //   name: 'Settings',
    //   href: '/admin/dashboard/settings',
    //   icon: Settings,
    // },
  ];

  return (
    <div className="flex h-screen w-64 flex-col bg-card border-r border-border">
      {/* Logo */}
      <div className="flex h-16   items-center border-b border-border pl-3">
        <div className="flex items-center gap-2 ">
          <Link href="/" className={cn("flex items-center gap-2 hover:opacity-90")}>
            <div className="relative flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <Code2 className="w-5 h-5 text-primary-foreground absolute" />
              {/* <Code2 className="w-5 h-5 text-primary-foreground/50 absolute rotate-45" /> */}
            </div>
            <span className="font-bold text-xl">
              Hack<span className="text-primary">Rest</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Settings Section */}
      <div className="border-t border-border px-2 py-4">
        <div className="space-y-1">
          {settings.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="mt-4 space-y-2">
          {/* <ThemeToggle /> */}
          <Button
            variant="destructive"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
} 