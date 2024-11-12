import React from 'react';
import { BarChart2, TrendingUp, Activity, Zap } from 'lucide-react';

interface TeamStats {
  team: string;
  offRtg: number;
  defRtg: number;
  netRtg: number;
  pace: number;
  efgPct: number;
}

const mockStats: TeamStats[] = [
  {
    team: 'Lakers',
    offRtg: 114.2,
    defRtg: 112.3,
    netRtg: 1.9,
    pace: 98.7,
    efgPct: 54.8
  },
  {
    team: 'Warriors',
    offRtg: 116.5,
    defRtg: 113.8,
    netRtg: 2.7,
    pace: 102.4,
    efgPct: 56.2
  }
];

const StatBar: React.FC<{ value: number; max: number; label: string }> = ({ value, max, label }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span className="font-medium">{value.toFixed(1)}</span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div 
        className="h-full bg-blue-500 rounded-full transition-all duration-500"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  </div>
);

export const AdvancedStats: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {mockStats.map((team) => (
        <div key={team.team} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <BarChart2 className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold">{team.team}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Activity className="w-4 h-4 text-purple-500" />
                  <h4 className="font-medium">Efficiency Ratings</h4>
                </div>
                <div className="space-y-4">
                  <StatBar value={team.offRtg} max={120} label="Offensive Rating" />
                  <StatBar value={team.defRtg} max={120} label="Defensive Rating" />
                  <StatBar value={team.netRtg + 10} max={20} label="Net Rating" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <h4 className="font-medium">Tempo & Shooting</h4>
                </div>
                <div className="space-y-4">
                  <StatBar value={team.pace} max={110} label="Pace" />
                  <StatBar value={team.efgPct} max={60} label="eFG%" />
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <h4 className="font-medium text-blue-700 dark:text-blue-300">Key Trend</h4>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  {team.team}'s offensive rating has improved by 2.3 points over the last 10 games
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};