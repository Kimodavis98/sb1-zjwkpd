import React from 'react';
import { Calendar, Clock, MapPin, TrendingUp } from 'lucide-react';

interface GameSchedule {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  spread: string;
  overUnder: string;
}

const mockSchedule: GameSchedule[] = [
  {
    id: '1',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    date: '2024-03-20',
    time: '10:00 PM ET',
    venue: 'Crypto.com Arena',
    spread: 'LAL -5.5',
    overUnder: '224.5'
  },
  {
    id: '2',
    homeTeam: 'Celtics',
    awayTeam: 'Heat',
    date: '2024-03-20',
    time: '7:30 PM ET',
    venue: 'TD Garden',
    spread: 'BOS -7.5',
    overUnder: '219.5'
  }
];

export const Schedule: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid gap-4">
        {mockSchedule.map((game) => (
          <div 
            key={game.id} 
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">{game.date}</span>
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span>{game.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{game.venue}</span>
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold">{game.awayTeam}</h3>
                  <span className="text-sm text-gray-500">at</span>
                  <h3 className="text-xl font-bold">{game.homeTeam}</h3>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-end space-y-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium">{game.spread}</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  O/U: {game.overUnder}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};