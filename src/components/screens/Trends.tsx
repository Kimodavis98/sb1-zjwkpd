import React from 'react';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

interface Trend {
  id: string;
  type: 'betting' | 'performance' | 'matchup';
  team: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  value?: string;
}

const mockTrends: Trend[] = [
  {
    id: '1',
    type: 'betting',
    team: 'Lakers',
    description: 'ATS in last 10 home games',
    impact: 'positive',
    value: '7-3'
  },
  {
    id: '2',
    type: 'performance',
    team: 'Warriors',
    description: 'Three-point percentage trend',
    impact: 'negative',
    value: '-2.8%'
  },
  {
    id: '3',
    type: 'matchup',
    team: 'Lakers vs Warriors',
    description: 'Head-to-head over/under',
    impact: 'neutral',
    value: '6-4'
  }
];

const TrendCard: React.FC<{ trend: Trend }> = ({ trend }) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      case 'negative': return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'betting': return <DollarSign className="w-5 h-5" />;
      case 'performance': return <Activity className="w-5 h-5" />;
      case 'matchup': return <TrendingUp className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {getIcon(trend.type)}
          </div>
          <h3 className="font-semibold">{trend.team}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${getImpactColor(trend.impact)}`}>
          {trend.value}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{trend.description}</p>
    </div>
  );
};

export const Trends: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockTrends.map(trend => (
          <TrendCard key={trend.id} trend={trend} />
        ))}
      </div>
    </div>
  );
};