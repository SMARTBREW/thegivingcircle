import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Video, 
  Megaphone, 
  FolderOpen, 
  Settings, 
  Menu,
  X,
  Heart
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
      color: 'text-easternBlue-500',
      bgColor: 'bg-easternBlue-50',
      hoverColor: 'hover:bg-easternBlue-100'
    },
    {
      name: 'Champions',
      href: '/admin/champions',
      icon: Users,
      color: 'text-saffron-500',
      bgColor: 'bg-saffron-50',
      hoverColor: 'hover:bg-saffron-100'
    },
    {
      name: 'NGO Partners',
      href: '/admin/ngos',
      icon: Building2,
      color: 'text-neptune-500',
      bgColor: 'bg-neptune-50',
      hoverColor: 'hover:bg-neptune-100'
    },
    {
      name: 'Impact Stories',
      href: '/admin/stories',
      icon: Video,
      color: 'text-amaranth-500',
      bgColor: 'bg-amaranth-50',
      hoverColor: 'hover:bg-amaranth-100'
    },
    {
      name: 'Campaigns',
      href: '/admin/campaigns',
      icon: Megaphone,
      color: 'text-royalHeath-500',
      bgColor: 'bg-royalHeath-50',
      hoverColor: 'hover:bg-royalHeath-100'
    },
    {
      name: 'Media Library',
      href: '/admin/media',
      icon: FolderOpen,
      color: 'text-buttercup-500',
      bgColor: 'bg-buttercup-50',
      hoverColor: 'hover:bg-buttercup-100'
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
      color: 'text-gothic-500',
      bgColor: 'bg-gothic-50',
      hoverColor: 'hover:bg-gothic-100'
    }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:shadow-lg
        w-72
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-easternBlue-500 to-neptune-500 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-500">The Giving Circle</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => `
                    flex items-center px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive 
                      ? `${item.bgColor} ${item.color} shadow-sm border border-opacity-20` 
                      : `text-gray-600 ${item.hoverColor} hover:text-gray-900`
                    }
                  `}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setIsOpen(false);
                    }
                  }}
                >
                  <Icon className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gradient-to-r from-easternBlue-50 to-neptune-50">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Platform Status</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}; 