import React from 'react';
import { CheckCircle, UserPlus, Video, Award, AlertCircle, Clock } from 'lucide-react';

interface Activity {
  id: string;
  type: 'verification' | 'registration' | 'story' | 'nft' | 'alert';
  title: string;
  description: string;
  time: string;
  user?: string;
  status: 'completed' | 'pending' | 'failed';
}

export const RecentActivity: React.FC = () => {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'verification',
      title: 'Champion Verified',
      description: 'Priya Sharma completed verification process',
      time: '2 minutes ago',
      user: 'Priya Sharma',
      status: 'completed'
    },
    {
      id: '2',
      type: 'story',
      title: 'New Impact Story',
      description: 'Water well project story submitted by Saheli Foundation',
      time: '15 minutes ago',
      user: 'Saheli Foundation',
      status: 'pending'
    },
    {
      id: '3',
      type: 'nft',
      title: 'NFT Minted',
      description: 'Impact story #2456 successfully minted as NFT',
      time: '1 hour ago',
      status: 'completed'
    },
    {
      id: '4',
      type: 'registration',
      title: 'NGO Application',
      description: 'New NGO partner application received',
      time: '2 hours ago',
      user: 'Green Earth Initiative',
      status: 'pending'
    },
    {
      id: '5',
      type: 'verification',
      title: 'Champion Joined',
      description: 'Rajesh Kumar completed onboarding',
      time: '3 hours ago',
      user: 'Rajesh Kumar',
      status: 'completed'
    },
    {
      id: '6',
      type: 'alert',
      title: 'System Alert',
      description: 'Payment processing delay detected',
      time: '4 hours ago',
      status: 'failed'
    }
  ];

  const getActivityIcon = (type: string, status: string) => {
    switch (type) {
      case 'verification':
        return <CheckCircle className="w-5 h-5" />;
      case 'registration':
        return <UserPlus className="w-5 h-5" />;
      case 'story':
        return <Video className="w-5 h-5" />;
      case 'nft':
        return <Award className="w-5 h-5" />;
      case 'alert':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const getActivityColor = (type: string, status: string) => {
    if (status === 'failed') return 'text-amaranth-500 bg-amaranth-50';
    if (status === 'pending') return 'text-buttercup-500 bg-buttercup-50';
    
    switch (type) {
      case 'verification':
        return 'text-easternBlue-500 bg-easternBlue-50';
      case 'registration':
        return 'text-saffron-500 bg-saffron-50';
      case 'story':
        return 'text-neptune-500 bg-neptune-50';
      case 'nft':
        return 'text-royalHeath-500 bg-royalHeath-50';
      case 'alert':
        return 'text-amaranth-500 bg-amaranth-50';
      default:
        return 'text-gothic-500 bg-gothic-50';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Completed
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending
          </span>
        );
      case 'failed':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
        <button className="text-easternBlue-600 hover:text-easternBlue-700 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`flex-shrink-0 p-2 rounded-lg ${getActivityColor(activity.type, activity.status)}`}>
              {getActivityIcon(activity.type, activity.status)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.title}
                </p>
                {getStatusBadge(activity.status)}
              </div>
              
              <p className="text-sm text-gray-600 mt-1">
                {activity.description}
              </p>
              
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-400">{activity.time}</p>
                {activity.user && (
                  <p className="text-xs text-gray-500 font-medium">{activity.user}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Today's Activity</span>
          <span className="font-medium text-gray-900">{activities.length} events</span>
        </div>
      </div>
    </div>
  );
}; 