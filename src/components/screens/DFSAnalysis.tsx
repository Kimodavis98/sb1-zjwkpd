import React from 'react';
import { DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import type { DFSPlayer } from '../../types';

const mockPlayers: DFSPlayer[] = [
  {
    id: '1',
    name: 'Stephen Curry',
    team: 'GSW',
    position: 'PG',
    salary: 10200,
    projectedPoints: 48.5,
    value: 4.75,
    opponent: 'LAL'
  },
  {
    id: '2',
    name: 'LeBron James',
    team: 'LAL',
    position: 'SF',
    salary: 10800,
    projectedPoints: 52.3,
    value: 4.84,
    opponent: 'GSW'
  }
];

export const DFSAnalysis: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <DollarSign className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold">Top Values</h3>
          </div>
          <div className="space-y-3">
            {mockPlayers.map(player => (
              <div key={player.id} className="flex justify-between items-center">
                <span className="font-medium">{player.name}</span>
                <span className="text-green-500">{player.value.toFixed(2)}x</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold">Projected Ceiling</h3>
          </div>
          <div className="space-y-3">
            {mockPlayers.map(player => (
              <div key={player.id} className="flex justify-between items-center">
                <span className="font-medium">{player.name}</span>
                <span className="text-blue-500">{player.projectedPoints}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-semibold">Injury Impact</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">
                Anthony Davis (LAL) Questionable - Usage +5% to LeBron James
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};