import React from 'react';
import { CloudRain, Wind, Thermometer, TrendingDown } from 'lucide-react';
import type { Weather } from '../../types';

const mockWeatherData = {
  location: 'Crypto.com Arena, Los Angeles',
  forecast: {
    temperature: 72,
    condition: 'Clear',
    windSpeed: 8,
    humidity: 65,
  },
  impact: {
    scoring: 'Neutral',
    threePoint: 'Slightly Positive',
    fatigue: 'Low',
  },
  historicalStats: [
    { condition: 'Clear', avgPoints: 224.5, avgThreePercent: 37.2 },
    { condition: 'Rain', avgPoints: 218.3, avgThreePercent: 35.8 },
  ],
};

export const WeatherImpact: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <CloudRain className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold">Current Conditions</h3>
          </div>
          <div className="space-y-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {mockWeatherData.forecast.temperature}°F
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                {mockWeatherData.forecast.condition}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <Wind className="w-4 h-4 mx-auto text-gray-500" />
                <p className="text-sm mt-1">{mockWeatherData.forecast.windSpeed} mph</p>
              </div>
              <div className="text-center">
                <Thermometer className="w-4 h-4 mx-auto text-gray-500" />
                <p className="text-sm mt-1">{mockWeatherData.forecast.humidity}% humidity</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingDown className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-semibold">Performance Impact</h3>
          </div>
          <div className="space-y-3">
            {Object.entries(mockWeatherData.impact).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <span className="capitalize">{key}</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  value.includes('Positive') ? 'text-green-600 bg-green-100 dark:bg-green-900/20' :
                  value.includes('Negative') ? 'text-red-600 bg-red-100 dark:bg-red-900/20' :
                  'text-gray-600 bg-gray-100 dark:bg-gray-800'
                }`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <CloudRain className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold">Historical Analysis</h3>
          </div>
          <div className="space-y-4">
            {mockWeatherData.historicalStats.map((stat, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="font-medium mb-2">{stat.condition} Conditions</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Avg Total Points:</span>
                    <span className="font-medium">{stat.avgPoints}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg 3PT%:</span>
                    <span className="font-medium">{stat.avgThreePercent}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};