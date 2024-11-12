import React, { useState, useCallback, memo } from 'react';
import { ArrowRight, TrendingUp, AlertCircle, Radio } from 'lucide-react';
import { useInterval } from '../hooks/useInterval';

interface TickerItem {
  id: number;
  team: string;
  update: string;
  type: 'handicap' | 'news' | 'weather' | 'betting' | 'injury' | 'sharp';
  timestamp: string;
  priority: 'high' | 'normal';
}

const mockData: TickerItem[] = [
  { id: 1, team: 'Lakers', update: "LeBron James probable for tonight's game", type: 'injury', timestamp: '2m ago', priority: 'high' },
  { id: 2, team: 'Warriors', update: 'Sharp money detected on Under 224.5', type: 'sharp', timestamp: '5m ago', priority: 'high' },
  { id: 3, team: 'Celtics', update: 'Line moved from -6.5 to -7.5', type: 'handicap', timestamp: '8m ago', priority: 'normal' },
  { id: 4, team: 'Heat', update: '75°F Clear skies at tipoff', type: 'weather', timestamp: '10m ago', priority: 'normal' },
];

const TickerContent = memo(({ item }: { item: TickerItem }) => {
  const getTypeStyles = (type: string, priority: string) => {
    const baseStyles = 'font-semibold whitespace-nowrap';
    const priorityColor = priority === 'high' ? 'animate-pulse' : '';
    
    switch (type) {
      case 'handicap': return `${baseStyles} ${priorityColor} text-blue-500`;
      case 'injury': return `${baseStyles} ${priorityColor} text-red-500`;
      case 'sharp': return `${baseStyles} ${priorityColor} text-purple-500`;
      case 'weather': return `${baseStyles} ${priorityColor} text-yellow-500`;
      case 'betting': return `${baseStyles} ${priorityColor} text-green-500`;
      default: return `${baseStyles} ${priorityColor} text-gray-500`;
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'handicap': return <TrendingUp className="w-4 h-4" />;
      case 'injury': return <AlertCircle className="w-4 h-4" />;
      case 'sharp': return <Radio className="w-4 h-4" />;
      default: return <ArrowRight className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex-1 flex items-center space-x-3 overflow-hidden">
      <span className={getTypeStyles(item.type, item.priority)}>
        {item.team}
      </span>
      {getIcon(item.type)}
      <span className="text-gray-600 dark:text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis flex-1">
        {item.update}
      </span>
      <span className="text-sm text-gray-500 whitespace-nowrap">
        {item.timestamp}
      </span>
    </div>
  );
});

TickerContent.displayName = 'TickerContent';

export const LiveTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState(mockData);

  const nextTicker = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  // Simulate new updates every 15 seconds
  useInterval(() => {
    const newUpdate: TickerItem = {
      id: Date.now(),
      team: Math.random() > 0.5 ? 'Warriors' : 'Lakers',
      update: `New line movement detected ${Math.random() > 0.5 ? 'Over' : 'Under'} ${220 + Math.floor(Math.random() * 10)}.5`,
      type: 'sharp',
      timestamp: 'Just now',
      priority: Math.random() > 0.7 ? 'high' : 'normal',
    };
    setItems(prev => [newUpdate, ...prev.slice(0, 4)]);
  }, 15000);

  // Rotate through updates every 5 seconds
  useInterval(nextTicker, 5000);

  const currentItem = items[currentIndex];

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50 transition-colors duration-200">
      <div className="container mx-auto">
        <div className="flex items-center py-3 px-4">
          <TickerContent item={currentItem} />
        </div>
      </div>
    </div>
  );
};