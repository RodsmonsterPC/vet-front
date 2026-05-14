'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { cn } from '@/lib/utils';
import { 
  PawPrint, LayoutDashboard, Users, Calendar, 
  Stethoscope, FileText, Image as ImageIcon, 
  UserCircle, LogOut, ChevronLeft, ChevronRight, Menu 
} from 'lucide-react';

export const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { logout, user } = useAuthStore();

  const links = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Appointments', href: '/admin/appointments', icon: Calendar },
    { name: 'Clients & Pets', href: '/admin/clients', icon: Users },
    { name: 'Veterinarians', href: '/admin/veterinarians', icon: Stethoscope },
    { name: 'Services', href: '/admin/services', icon: FileText },
    { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
    { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[var(--color-surface-lowest)] border-r border-[var(--color-outline-variant)] text-[var(--color-on-surface)] transition-all duration-300">
      {/* Header */}
      <div className={cn("flex items-center h-20 px-6 border-b border-[var(--color-outline-variant)]", isCollapsed ? "justify-center px-0" : "justify-between")}>
        <Link href="/admin" className={cn("flex items-center gap-2 group", isCollapsed && "hidden")}>
          <div className="w-8 h-8 rounded-full bg-[var(--color-primary-container)] flex items-center justify-center text-[var(--color-primary)]">
            <PawPrint size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight">Admin</span>
        </Link>
        {isCollapsed && (
          <div className="w-10 h-10 rounded-full bg-[var(--color-primary-container)] flex items-center justify-center text-[var(--color-primary)]">
            <PawPrint size={24} />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20" 
                  : "text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-low)] hover:text-[var(--color-on-surface)]",
                isCollapsed && "justify-center px-0"
              )}
              title={isCollapsed ? link.name : undefined}
            >
              <Icon size={22} className={cn("shrink-0", isActive ? "text-white" : "text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-primary)]")} />
              {!isCollapsed && <span className="font-semibold text-sm">{link.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer Profile */}
      <div className="p-4 border-t border-[var(--color-outline-variant)]">
        <div className={cn("flex items-center gap-3 p-3 rounded-xl bg-[var(--color-surface-low)]", isCollapsed && "justify-center px-0")}>
          <div className="w-10 h-10 rounded-full bg-[var(--color-primary-container)] flex items-center justify-center shrink-0 overflow-hidden relative">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <UserCircle size={24} className="text-[var(--color-primary)]" />
            )}
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">{user?.name || 'Admin User'}</p>
              <p className="text-xs text-[var(--color-on-surface-variant)] truncate">{user?.email}</p>
            </div>
          )}
        </div>
        <button 
          onClick={handleLogout}
          className={cn(
            "w-full flex items-center gap-4 px-4 py-3 mt-2 rounded-xl text-red-600 hover:bg-red-50 transition-colors",
            isCollapsed && "justify-center px-0"
          )}
          title={isCollapsed ? 'Logout' : undefined}
        >
          <LogOut size={22} />
          {!isCollapsed && <span className="font-semibold text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header & Overlay */}
      <div className="md:hidden flex items-center justify-between h-16 px-4 bg-[var(--color-surface-lowest)] border-b border-[var(--color-outline-variant)] sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <PawPrint size={24} className="text-[var(--color-primary)]" />
          <span className="font-bold text-lg">Admin</span>
        </div>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-2 text-[var(--color-on-surface)]">
          <Menu size={24} />
        </button>
      </div>
      
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileOpen(false)}>
          <div className="w-72 h-full" onClick={(e) => e.stopPropagation()}>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden md:block fixed left-0 top-0 h-screen z-30 transition-all duration-300",
        isCollapsed ? "w-20" : "w-72"
      )}>
        <SidebarContent />
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-4 top-24 w-8 h-8 bg-[var(--color-surface-lowest)] border border-[var(--color-outline-variant)] rounded-full flex items-center justify-center text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] shadow-sm transition-all z-40"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </aside>
    </>
  );
};
