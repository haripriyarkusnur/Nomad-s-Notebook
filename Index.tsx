
import React, { useState } from 'react';
import { SearchSection } from '@/components/SearchSection';
import { DestinationInfo } from '@/components/DestinationInfo';
import { BudgetCalculator } from '@/components/BudgetCalculator';
import { TravelTips } from '@/components/TravelTips';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { MapPin, Compass } from 'lucide-react';

const Index = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Header */}
      <header className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm border-b border-blue-100 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Nomad's Notebook
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent">
              Discover Your Next Adventure
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Get comprehensive travel information for any destination worldwide. 
              From tourist attractions to local cuisine, plan your perfect trip with ease.
            </p>
            
            {/* Search Section */}
            <SearchSection onDestinationSelect={setSelectedDestination} />
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-blue-400 opacity-50 animate-bounce">
          <MapPin className="h-8 w-8" />
        </div>
        <div className="absolute bottom-10 right-10 text-orange-400 opacity-50 animate-pulse">
          <Compass className="h-8 w-8" />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        {selectedDestination && (
          <>
            <DestinationInfo destination={selectedDestination} />
            <BudgetCalculator destination={selectedDestination} />
          </>
        )}
        
        <TravelTips />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Index;
