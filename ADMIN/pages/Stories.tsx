import React, { useState } from 'react';
import { Search, Plus, Eye, Award, Video, Clock } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  ngo: string;
  champion: string;
  cause: string;
  status: 'published' | 'pending' | 'draft';
  nftMinted: boolean;
  views: number;
}

export const Stories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stories: Story[] = [
    {
      id: '1',
      title: 'Water Well Project - Rural Maharashtra',
      ngo: 'Water Warriors',
      champion: 'Priya Sharma',
      cause: 'Clean Water',
      status: 'published',
      nftMinted: true,
      views: 1247
    },
    {
      id: '2',
      title: 'Girls Education Initiative - Rajasthan',
      ngo: 'Saheli Foundation',
      champion: 'Rajesh Kumar',
      cause: 'Education',
      status: 'published',
      nftMinted: true,
      views: 892
    },
    {
      id: '3',
      title: 'Healthcare Camp - Remote Villages',
      ngo: 'Care Connect',
      champion: 'Anita Verma',
      cause: 'Healthcare',
      status: 'pending',
      nftMinted: false,
      views: 0
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Impact Stories</h1>
          <p className="text-gray-600">Manage impact stories and NFT verification</p>
        </div>
        <button className="bg-amaranth-600 text-white px-4 py-2 rounded-lg hover:bg-amaranth-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Create Story
        </button>
      </div>

      {/* Stories Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amaranth-500 w-full"
            />
          </div>
        </div>
        
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Story</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partners</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Engagement</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">NFT Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stories.map((story) => (
              <tr key={story.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-amaranth-500 rounded-full flex items-center justify-center">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{story.title}</div>
                      <div className="text-sm text-gray-500">{story.cause}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{story.ngo}</div>
                  <div className="text-sm text-gray-500">Champion: {story.champion}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{story.views} views</div>
                  <div className="text-sm text-gray-500">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      story.status === 'published' ? 'bg-green-100 text-green-800' :
                      story.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {story.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {story.nftMinted ? (
                    <div className="flex items-center text-green-600">
                      <Award className="w-4 h-4 mr-1" />
                      <span className="text-sm">Minted</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">Pending</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-easternBlue-600 hover:text-easternBlue-900">
                      <Eye className="w-4 h-4" />
                    </button>
                    {!story.nftMinted && story.status === 'published' && (
                      <button className="text-royalHeath-600 hover:text-royalHeath-900">
                        <Award className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 