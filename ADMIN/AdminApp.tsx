import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { Dashboard } from './pages/Dashboard';
import { Champions } from './pages/Champions';
import { NGOs } from './pages/NGOs';
import { Stories } from './pages/Stories';
import { Settings } from './pages/Settings';

// Placeholder components for remaining routes
const Campaigns: React.FC = () => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Campaigns Management</h2>
    <p className="text-gray-600">Campaign management functionality coming soon...</p>
  </div>
);

const MediaLibrary: React.FC = () => (
  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Library</h2>
    <p className="text-gray-600">Media management functionality coming soon...</p>
  </div>
);

export const AdminApp: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="champions" element={<Champions />} />
            <Route path="ngos" element={<NGOs />} />
            <Route path="stories" element={<Stories />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="media" element={<MediaLibrary />} />
            <Route path="settings" element={<Settings />} />
            {/* Redirect /admin to /admin/dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}; 