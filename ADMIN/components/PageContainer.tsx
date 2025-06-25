import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 ${className}`}>
      <div className="p-4 lg:p-6 xl:p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}; 