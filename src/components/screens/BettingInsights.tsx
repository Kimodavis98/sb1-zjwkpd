import React from 'react';
import { TrendingUp, AlertTriangle, Clock } from 'lucide-react';
import type { BettingLine } from '../../types';

const mockLines: BettingLine[] = [
  {
    id: '1',
    type: 'spread',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    line: '-5.5',
    odds: -110
  },
  {
    id: '2',
    type: 'total',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    line: 'o224.5',
    odds: -105
  }
];

export const BettingInsights: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-semibold">Line Movements</h3>
          </div>
          <div className="space-y-4">
            {mockLines.map(line => (
              <div key={line.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{line.homeTeam} vs {line.awayTeam}</p>
                  <p className="text-sm text-gray-500">{line.type.toUpperCase()}: {line.line}</p>
                </div>
                <span className={line.odds > 0 ? 'text-green-500' : 'text-red-500'}>
                  {line.odds > 0 ? '+' : ''}{line.odds}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            <h3 className="text-lg font-semibold">Sharp Money Alerts</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  Heavy sharp action on Lakers -5.5 in the last hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};