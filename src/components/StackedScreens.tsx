import React, { useState, useCallback, memo } from 'react';
import { 
  TrendingUp, Users, Calendar, CloudSun, 
  DollarSign, BarChart2, Activity, Radio, X 
} from 'lucide-react';
import { Card } from './common/Card';
import { DFSAnalysis } from './screens/DFSAnalysis';
import { BettingInsights } from './screens/BettingInsights';
import { MatchupAnalysis } from './screens/MatchupAnalysis';
import { WeatherImpact } from './screens/WeatherImpact';
import { Schedule } from './screens/Schedule';
import { AdvancedStats } from './screens/AdvancedStats';
import { Trends } from './screens/Trends';
import { LiveUpdates } from './screens/LiveUpdates';

interface ScreenOption {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  component: React.ReactNode;
}

const screens: ScreenOption[] = [
  { 
    id: 'dfs', 
    title: 'DFS Analysis', 
    icon: <Users />, 
    color: 'from-blue-500 to-blue-600',
    component: <DFSAnalysis />
  },
  { 
    id: 'betting', 
    title: 'Sports Betting', 
    icon: <DollarSign />, 
    color: 'from-green-500 to-green-600',
    component: <BettingInsights />
  },
  { 
    id: 'matchups', 
    title: 'Matchups', 
    icon: <Activity />, 
    color: 'from-purple-500 to-purple-600',
    component: <MatchupAnalysis />
  },
  { 
    id: 'trends', 
    title: 'Trends', 
    icon: <TrendingUp />, 
    color: 'from-red-500 to-red-600',
    component: <Trends />
  },
  { 
    id: 'schedule', 
    title: 'Schedule', 
    icon: <Calendar />, 
    color: 'from-yellow-500 to-yellow-600',
    component: <Schedule />
  },
  { 
    id: 'weather', 
    title: 'Weather Impact', 
    icon: <CloudSun />, 
    color: 'from-cyan-500 to-cyan-600',
    component: <WeatherImpact />
  },
  { 
    id: 'stats', 
    title: 'Advanced Stats', 
    icon: <BarChart2 />, 
    color: 'from-pink-500 to-pink-600',
    component: <AdvancedStats />
  },
  { 
    id: 'live', 
    title: 'Live Updates', 
    icon: <Radio />, 
    color: 'from-indigo-500 to-indigo-600',
    component: <LiveUpdates />
  }
];

const ScreenButton = memo(({ 
  screen, 
  isActive, 
  onClick 
}: { 
  screen: ScreenOption; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`
      relative overflow-hidden rounded-xl p-6 
      transition-all duration-300 ease-in-out
      ${isActive ? 'scale-105 shadow-lg' : 'hover:scale-102'}
      bg-gradient-to-br ${screen.color}
    `}
  >
    <div className="flex items-center space-x-4 text-white">
      <div className="p-2 bg-white/20 rounded-lg">
        {screen.icon}
      </div>
      <h3 className="text-lg font-semibold">{screen.title}</h3>
    </div>
  </button>
));

ScreenButton.displayName = 'ScreenButton';

const Modal = memo(({ 
  screen, 
  onClose 
}: { 
  screen: ScreenOption; 
  onClose: (e: React.MouseEvent) => void;
}) => (
  <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm overflow-y-auto">
    <div className="container mx-auto px-4 py-20">
      <Card title={screen.title}>
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {screen.component}
      </Card>
    </div>
  </div>
));

Modal.displayName = 'Modal';

export const StackedScreens: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string | null>(null);

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveScreen(null);
  }, []);

  const handleScreenClick = useCallback((screenId: string) => {
    setActiveScreen(screenId === activeScreen ? null : screenId);
  }, [activeScreen]);

  const activeScreenData = screens.find(s => s.id === activeScreen);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {screens.map((screen) => (
          <ScreenButton
            key={screen.id}
            screen={screen}
            isActive={screen.id === activeScreen}
            onClick={() => handleScreenClick(screen.id)}
          />
        ))}
      </div>

      {activeScreen && activeScreenData && (
        <Modal screen={activeScreenData} onClose={handleClose} />
      )}
    </div>
  );
};