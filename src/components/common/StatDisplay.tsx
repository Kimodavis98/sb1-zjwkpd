import React from 'react';

interface StatDisplayProps {
  label: string;
  value: string | number;
  change?: number;
  prefix?: string;
  suffix?: string;
}

export const StatDisplay: React.FC<StatDisplayProps> = ({
  label,
  value,
  change,
  prefix = '',
  suffix = ''
}) => {
  return (
    <div className="space-y-1">
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-bold">
          {prefix}{value}{suffix}
        </span>
        {change !== undefined && (
          <span className={`text-sm ${
            change > 0 ? 'text-green-500' : change < 0 ? 'text-red-500' : 'text-gray-500'
          }`}>
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
    </div>
  );
};