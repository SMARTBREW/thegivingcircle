import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { PageContainer } from '../components/PageContainer';

export const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Map routes to page titles
  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/admin/dashboard':
        return 'Dashboard Overview';
      case '/admin/champions':
        return 'Cause Champions';
      case '/admin/ngos':
        return 'NGO Partners';
      case '/admin/stories':
        return 'Impact Stories';
      case '/admin/campaigns':
        return 'Campaigns';
      case '/admin/media':
        return 'Media Library';
      case '/admin/settings':
        return 'Settings';
      default:
        return 'Admin Panel';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main content */}
      <div className="flex-1 lg:ml-0">
        {/* Topbar */}
        <Topbar 
          pageTitle={getPageTitle(location.pathname)} 
          setIsSidebarOpen={setIsSidebarOpen} 
        />
        
        {/* Page content */}
        <main className="flex-1">
          <PageContainer>
            <Outlet />
          </PageContainer>
        </main>
      </div>
    </div>
  );
}; 