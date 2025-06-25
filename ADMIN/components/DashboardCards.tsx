import React from 'react';
import { Users, Building2, Video, Award, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

interface DashboardCard {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
}

export const DashboardCards: React.FC = () => {
  const cards: DashboardCard[] = [
    {
      title: 'Total Champions',
      value: '4,21,908',
      change: '+12.5%',
      changeType: 'increase',
      icon: <Users className="w-6 h-6" />,
      color: 'text-saffron-600',
      bgColor: 'bg-gradient-to-r from-saffron-500 to-saffron-600',
      description: 'Active cause champions this month'
    },
    {
      title: 'NGO Partners',
      value: '847',
      change: '+8.2%',
      changeType: 'increase',
      icon: <Building2 className="w-6 h-6" />,
      color: 'text-neptune-600',
      bgColor: 'bg-gradient-to-r from-neptune-500 to-neptune-600',
      description: 'Verified NGO partners'
    },
    {
      title: 'Impact Stories',
      value: '12,456',
      change: '+15.8%',
      changeType: 'increase',
      icon: <Video className="w-6 h-6" />,
      color: 'text-amaranth-600',
      bgColor: 'bg-gradient-to-r from-amaranth-500 to-amaranth-600',
      description: 'Published impact stories'
    },
    {
      title: 'NFTs Minted',
      value: '8,234',
      change: '+22.1%',
      changeType: 'increase',
      icon: <Award className="w-6 h-6" />,
      color: 'text-royalHeath-600',
      bgColor: 'bg-gradient-to-r from-royalHeath-500 to-royalHeath-600',
      description: 'Verified impact NFTs'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          {/* Icon header */}
          <div className={`${card.bgColor} p-4`}>
            <div className="flex items-center justify-between text-white">
              <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                {card.icon}
              </div>
              <div className="text-right">
                <div className="flex items-center text-sm">
                  {card.changeType === 'increase' ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {card.change}
                </div>
                <div className="text-xs opacity-90">vs last month</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">{card.title}</h3>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{card.value}</div>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>Monthly Growth</span>
                <span>{card.change}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${card.bgColor}`}
                  style={{ width: `${Math.abs(parseFloat(card.change))}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 