import React, { useState } from 'react';
import { Search, Plus, Eye, CheckCircle, XCircle, Building2, MapPin } from 'lucide-react';

interface NGO {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  status: 'verified' | 'pending' | 'rejected';
  partnershipsCount: number;
  impactStories: number;
}

export const NGOs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const ngos: NGO[] = [
    {
      id: '1',
      name: 'Saheli Foundation',
      email: 'contact@saheli.org',
      phone: '+91 98765 43210',
      location: 'Rajasthan',
      status: 'verified',
      partnershipsCount: 125,
      impactStories: 45
    },
    {
      id: '2',
      name: 'Water Warriors',
      email: 'info@waterwarriors.org',
      phone: '+91 87654 32109',
      location: 'Maharashtra',
      status: 'verified',
      partnershipsCount: 89,
      impactStories: 67
    },
    {
      id: '3',
      name: 'Green Earth Initiative',
      email: 'hello@greenearth.org',
      phone: '+91 76543 21098',
      location: 'Karnataka',
      status: 'pending',
      partnershipsCount: 0,
      impactStories: 0
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">NGO Partners</h1>
          <p className="text-gray-600">Manage NGO partnerships and verifications</p>
        </div>
        <button className="bg-neptune-600 text-white px-4 py-2 rounded-lg hover:bg-neptune-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add NGO
        </button>
      </div>

      {/* NGOs Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search NGOs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neptune-500 w-full"
            />
          </div>
        </div>
        
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">NGO</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partnerships</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ngos.map((ngo) => (
              <tr key={ngo.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-neptune-500 rounded-full flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{ngo.name}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {ngo.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{ngo.email}</div>
                  <div className="text-sm text-gray-500">{ngo.phone}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{ngo.partnershipsCount}</div>
                  <div className="text-sm text-gray-500">{ngo.impactStories} stories</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    ngo.status === 'verified' ? 'bg-green-100 text-green-800' :
                    ngo.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {ngo.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-easternBlue-600 hover:text-easternBlue-900">
                      <Eye className="w-4 h-4" />
                    </button>
                    {ngo.status === 'pending' && (
                      <>
                        <button className="text-green-600 hover:text-green-900">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <XCircle className="w-4 h-4" />
                        </button>
                      </>
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