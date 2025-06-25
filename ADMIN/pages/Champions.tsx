import React, { useState } from 'react';
import { Search, Filter, Plus, Eye, MessageCircle, Award, ChevronDown } from 'lucide-react';

interface Champion {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  totalContributions: number;
  impactStories: number;
  status: 'active' | 'inactive' | 'pending';
  causes: string[];
  avatar?: string;
}

export const Champions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const champions: Champion[] = [
    {
      id: '1',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      joinDate: '2024-01-15',
      totalContributions: 25000,
      impactStories: 12,
      status: 'active',
      causes: ['Education', 'Healthcare']
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      email: 'rajesh.k@email.com',
      phone: '+91 87654 32109',
      joinDate: '2024-02-03',
      totalContributions: 18500,
      impactStories: 8,
      status: 'active',
      causes: ['Water', 'Environment']
    },
    {
      id: '3',
      name: 'Anita Verma',
      email: 'anita.verma@email.com',
      phone: '+91 76543 21098',
      joinDate: '2024-01-28',
      totalContributions: 32000,
      impactStories: 15,
      status: 'active',
      causes: ['Women Empowerment', 'Education']
    },
    {
      id: '4',
      name: 'Suresh Patel',
      email: 'suresh.patel@email.com',
      phone: '+91 65432 10987',
      joinDate: '2024-03-10',
      totalContributions: 12000,
      impactStories: 5,
      status: 'pending',
      causes: ['Healthcare']
    },
    // Add more champions as needed
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCauseColor = (index: number) => {
    const colors = [
      'bg-easternBlue-100 text-easternBlue-800',
      'bg-saffron-100 text-saffron-800',
      'bg-neptune-100 text-neptune-800',
      'bg-amaranth-100 text-amaranth-800',
      'bg-royalHeath-100 text-royalHeath-800'
    ];
    return colors[index % colors.length];
  };

  const filteredChampions = champions.filter(champion => {
    const matchesSearch = champion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         champion.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || champion.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredChampions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedChampions = filteredChampions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Cause Champions</h1>
          <p className="text-gray-600">Manage and track champion activities</p>
        </div>
        <button className="bg-saffron-600 text-white px-4 py-2 rounded-lg hover:bg-saffron-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Champion
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center">
            <div className="bg-saffron-100 p-3 rounded-lg">
              <Award className="w-6 h-6 text-saffron-600" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">{champions.length}</p>
              <p className="text-gray-600">Total Champions</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">{champions.filter(c => c.status === 'active').length}</p>
              <p className="text-gray-600">Active Champions</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">{champions.filter(c => c.status === 'pending').length}</p>
              <p className="text-gray-600">Pending Approval</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center">
            <div className="bg-easternBlue-100 p-3 rounded-lg">
              <Award className="w-6 h-6 text-easternBlue-600" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">₹{champions.reduce((sum, c) => sum + c.totalContributions, 0).toLocaleString()}</p>
              <p className="text-gray-600">Total Contributions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search champions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Showing {paginatedChampions.length} of {filteredChampions.length} champions
          </div>
        </div>
      </div>

      {/* Champions Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Champion</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contributions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact Stories</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Causes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedChampions.map((champion) => (
                <tr key={champion.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-saffron-500 to-buttercup-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">{champion.name.charAt(0)}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{champion.name}</div>
                        <div className="text-sm text-gray-500">{champion.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{champion.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">₹{champion.totalContributions.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">{champion.impactStories} stories</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {champion.causes.slice(0, 2).map((cause, index) => (
                        <span key={index} className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getCauseColor(index)}`}>
                          {cause}
                        </span>
                      ))}
                      {champion.causes.length > 2 && (
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                          +{champion.causes.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(champion.status)}`}>
                      {champion.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-easternBlue-600 hover:text-easternBlue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-neptune-600 hover:text-neptune-900">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredChampions.length)}</span> of{' '}
                <span className="font-medium">{filteredChampions.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === index + 1
                        ? 'z-10 bg-saffron-50 border-saffron-500 text-saffron-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 