import React, { Suspense } from 'react';
import { Layout } from './components/Layout';
import { LiveTicker } from './components/LiveTicker';
import { StackedScreens } from './components/StackedScreens';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-pulse text-gray-600 dark:text-gray-400">Loading...</div>
          </div>
        }>
          <StackedScreens />
        </Suspense>
        <LiveTicker />
      </Layout>
    </div>
  );
}

export default App;