import React from 'react';
import { DashboardCards } from '../components/DashboardCards';
import { RecentActivity } from '../components/RecentActivity';
import { UpcomingMeetings } from '../components/UpcomingMeetings';
import { BarChart3, TrendingUp, PieChart, Users, Calendar, Bell } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="bg-gradient-to-r from-easternBlue-600 to-neptune-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
            <p className="text-easternBlue-100 text-lg">
              Here's what's happening with The Giving Circle today
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-20 rounded-xl p-4">
              <TrendingUp className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-3" />
              <div>
                <p className="text-easternBlue-100">New Champions Today</p>
                <p className="text-2xl font-bold">+127</p>
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex items-center">
              <Bell className="w-6 h-6 mr-3" />
              <div>
                <p className="text-easternBlue-100">Pending Reviews</p>
                <p className="text-2xl font-bold">23</p>
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 mr-3" />
              <div>
                <p className="text-easternBlue-100">Meetings Today</p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Cards */}
      <DashboardCards />

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Impact Growth Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Impact Growth</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-easternBlue-100 text-easternBlue-700 rounded-lg">7D</button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">30D</button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">90D</button>
            </div>
          </div>
          
          {/* Placeholder for chart */}
          <div className="h-64 bg-gradient-to-br from-easternBlue-50 to-neptune-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-easternBlue-400 mx-auto mb-4" />
              <p className="text-gray-600">Chart visualization would go here</p>
              <p className="text-sm text-gray-500">Integration with Chart.js or similar</p>
            </div>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Cause Distribution</h3>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          
          {/* Placeholder for pie chart */}
          <div className="h-48 bg-gradient-to-br from-saffron-50 to-buttercup-50 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-saffron-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Pie chart here</p>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-easternBlue-500 rounded-full mr-2"></div>
                <span>Education</span>
              </div>
              <span className="font-medium">35%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amaranth-500 rounded-full mr-2"></div>
                <span>Healthcare</span>
              </div>
              <span className="font-medium">28%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-neptune-500 rounded-full mr-2"></div>
                <span>Water</span>
              </div>
              <span className="font-medium">22%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-saffron-500 rounded-full mr-2"></div>
                <span>Others</span>
              </div>
              <span className="font-medium">15%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity and Meetings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivity />
        <UpcomingMeetings />
      </div>

      {/* System Status */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-green-800">API Services</p>
            <p className="text-xs text-green-600">Operational</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-green-800">Database</p>
            <p className="text-xs text-green-600">Healthy</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-green-800">NFT Minting</p>
            <p className="text-xs text-green-600">Active</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-yellow-800">Payments</p>
            <p className="text-xs text-yellow-600">Minor Delays</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 