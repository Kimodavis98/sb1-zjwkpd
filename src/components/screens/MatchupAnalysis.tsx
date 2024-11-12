import React from 'react';
import { Users, Percent, TrendingUp } from 'lucide-react';
import type { Team } from '../../types';

const mockMatchups = [
  {
    id: '1',
    homeTeam: {
      name: 'Lakers',
      stats: { ppg: 115.2, defRating: 112.3, pace: 98.7 },
      advantages: ['Paint scoring', 'Fast break points']
    },
    awayTeam: {
      name: 'Warriors',
      stats: { ppg: 118.5, defRating: 110.8, pace: 102.4 },
      advantages: ['Three-point shooting', 'Ball movement']
    }
  }
];

const StatComparison: React.FC<{ label: string; home: number; away: number }> = ({ 
  label, home, away 
}) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
    <div className="flex items-center space-x-4">
      <span className={`font-medium ${home >= away ? 'text-green-500' : 'text-gray-500'}`}>
        {home.toFixed(1)}
      </span>
      <span className="text-gray-400">vs</span>
      <span className={`font-medium ${away > home ? 'text-green-500' : 'text-gray-500'}`}>
        {away.toFixed(1)}
      </span>
    </div>
  </div>
);

export const MatchupAnalysis: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {mockMatchups.map(matchup => (
        <div key={matchup.id} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold">Team Comparison</h3>
            </div>
            <div className="space-y-2">
              <StatComparison 
                label="Points Per Game" 
                home={matchup.homeTeam.stats.ppg} 
                away={matchup.awayTeam.stats.ppg} 
              />
              <StatComparison 
                label="Defensive Rating" 
                home={matchup.homeTeam.stats.defRating} 
                away={matchup.awayTeam.stats.defRating} 
              />
              <StatComparison 
                label="Pace" 
                home={matchup.homeTeam.stats.pace} 
                away={matchup.awayTeam.stats.pace} 
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Percent className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold">Key Advantages</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {matchup.homeTeam.name}
                </h4>
                <div className="space-y-2">
                  {matchup.homeTeam.advantages.map((adv, i) => (
                    <div key={i} className="text-sm bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full inline-block mr-2">
                      {adv}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {matchup.awayTeam.name}
                </h4>
                <div className="space-y-2">
                  {matchup.awayTeam.advantages.map((adv, i) => (
                    <div key={i} className="text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full inline-block mr-2">
                      {adv}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold">Betting Trends</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm">Lakers are 7-3 ATS in last 10 home games</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm">Warriors are 4-6 ATS in last 10 road games</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm">Over is 6-4 in last 10 head-to-head matchups</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};