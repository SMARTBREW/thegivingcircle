import React from 'react';
import { Calendar, Clock, Video, Phone, Users, ExternalLink } from 'lucide-react';

interface Meeting {
  id: string;
  title: string;
  type: 'ngo_onboarding' | 'story_review' | 'partnership' | 'training';
  participants: string[];
  datetime: string;
  duration: string;
  platform: 'gmeet' | 'zoom' | 'calendly' | 'phone';
  link?: string;
  status: 'scheduled' | 'in_progress' | 'completed';
}

export const UpcomingMeetings: React.FC = () => {
  const meetings: Meeting[] = [
    {
      id: '1',
      title: 'NGO Onboarding - Green Earth Initiative',
      type: 'ngo_onboarding',
      participants: ['Admin', 'Dr. Sunita Rao', 'Verification Team'],
      datetime: 'Today, 2:00 PM',
      duration: '45 min',
      platform: 'gmeet',
      link: 'https://meet.google.com/abc-defg-hij',
      status: 'scheduled'
    },
    {
      id: '2',
      title: 'Impact Story Review Session',
      type: 'story_review',
      participants: ['Content Team', 'Saheli Foundation', 'NFT Validator'],
      datetime: 'Today, 4:30 PM',
      duration: '30 min',
      platform: 'zoom',
      link: 'https://zoom.us/j/123456789',
      status: 'scheduled'
    },
    {
      id: '3',
      title: 'Monthly Partnership Review',
      type: 'partnership',
      participants: ['Admin', 'Partnership Team', 'Top 5 NGOs'],
      datetime: 'Tomorrow, 10:00 AM',
      duration: '90 min',
      platform: 'gmeet',
      link: 'https://meet.google.com/xyz-uvwx-yzab',
      status: 'scheduled'
    },
    {
      id: '4',
      title: 'Champion Training Webinar',
      type: 'training',
      participants: ['Training Team', '50+ New Champions'],
      datetime: 'Tomorrow, 6:00 PM',
      duration: '60 min',
      platform: 'zoom',
      link: 'https://zoom.us/j/987654321',
      status: 'scheduled'
    },
    {
      id: '5',
      title: 'NGO Partner Call - Water Warriors',
      type: 'partnership',
      participants: ['Admin', 'Dr. Rajesh Kumar'],
      datetime: 'Friday, 11:00 AM',
      duration: '30 min',
      platform: 'phone',
      status: 'scheduled'
    }
  ];

  const getMeetingTypeColor = (type: string) => {
    switch (type) {
      case 'ngo_onboarding':
        return 'bg-easternBlue-50 text-easternBlue-700 border-easternBlue-200';
      case 'story_review':
        return 'bg-neptune-50 text-neptune-700 border-neptune-200';
      case 'partnership':
        return 'bg-saffron-50 text-saffron-700 border-saffron-200';
      case 'training':
        return 'bg-royalHeath-50 text-royalHeath-700 border-royalHeath-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'gmeet':
        return <Video className="w-4 h-4" />;
      case 'zoom':
        return <Video className="w-4 h-4" />;
      case 'phone':
        return <Phone className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'gmeet':
        return 'text-blue-600 bg-blue-50';
      case 'zoom':
        return 'text-indigo-600 bg-indigo-50';
      case 'phone':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Upcoming Meetings</h3>
        <button className="text-easternBlue-600 hover:text-easternBlue-700 text-sm font-medium">
          View Calendar
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{meeting.title}</h4>
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getMeetingTypeColor(meeting.type)}`}>
                  {meeting.type.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              <div className={`p-2 rounded-lg ${getPlatformColor(meeting.platform)}`}>
                {getPlatformIcon(meeting.platform)}
              </div>
            </div>

            {/* Time and duration */}
            <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {meeting.datetime}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {meeting.duration}
              </div>
            </div>

            {/* Participants */}
            <div className="flex items-center mb-3">
              <Users className="w-4 h-4 mr-2 text-gray-400" />
              <div className="flex flex-wrap gap-1">
                {meeting.participants.slice(0, 3).map((participant, index) => (
                  <span key={index} className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                    {participant}
                  </span>
                ))}
                {meeting.participants.length > 3 && (
                  <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                    +{meeting.participants.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {meeting.link && (
                  <a
                    href={meeting.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 text-xs font-medium text-easternBlue-700 bg-easternBlue-50 rounded-lg hover:bg-easternBlue-100 transition-colors"
                  >
                    Join Meeting
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}
                <button className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  Reschedule
                </button>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                meeting.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' :
                meeting.status === 'in_progress' ? 'bg-green-100 text-green-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {meeting.status.replace('_', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex space-x-3">
          <button className="flex-1 bg-easternBlue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-easternBlue-700 transition-colors">
            Schedule NGO Call
          </button>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            View All Meetings
          </button>
        </div>
      </div>
    </div>
  );
}; 