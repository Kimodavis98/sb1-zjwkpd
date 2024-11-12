import React, { useState } from 'react';
import { Radio, Bell, AlertTriangle, TrendingUp } from 'lucide-react';
import { useInterval } from '../../hooks/useInterval';

interface Update {
  id: string;
  type: 'injury' | 'line-movement' | 'weather' | 'breaking';
  timestamp: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

const mockUpdates: Update[] = [
  {
    id: '1',
    type: 'injury',
    timestamp: '2 mins ago',
    title: 'LeBron James',
    description: "Upgraded to probable for tonight's game",
    priority: 'high'
  },
  {
    id: '2',
    type: 'line-movement',
    timestamp: '5 mins ago',
    title: 'Line Movement Alert',
    description: 'Lakers spread moved from -4.5 to -5.5',
    priority: 'medium'
  }
];

const UpdateCard: React.FC<{ update: Update }> = ({ update }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'injury': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'line-movement': return <TrendingUp className="w-5 h-5 text-blue-500" />;
      case 'breaking': return <Bell className="w-5 h-5 text-purple-500" />;
      default: return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      default: return 'border-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className={`border-l-4 rounded-lg p-4 mb-4 ${getPriorityColor(update.priority)}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          {getTypeIcon(update.type)}
          <div>
            <h4 className="font-semibold">{update.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{update.description}</p>
          </div>
        </div>
        <span className="text-xs text-gray-500">{update.timestamp}</span>
      </div>
    </div>
  );
};

export const LiveUpdates: React.FC = () => {
  const [updates, setUpdates] = useState(mockUpdates);

  useInterval(() => {
    const newUpdate = {
      id: Date.now().toString(),
      type: Math.random() > 0.5 ? 'line-movement' : 'breaking',
      timestamp: 'Just now',
      title: 'New Line Movement',
      description: 'Warriors team total moved Over 115.5 (-110)',
      priority: 'medium' as const
    };
    setUpdates(prev => [newUpdate, ...prev.slice(0, 4)]);
  }, 30000);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-2 mb-6">
        <Radio className="w-5 h-5 text-green-500 animate-pulse" />
        <span className="text-sm text-green-500">Live Updates</span>
      </div>
      <div className="space-y-4">
        {updates.map(update => (
          <UpdateCard key={update.id} update={update} />
        ))}
      </div>
    </div>
  );
};