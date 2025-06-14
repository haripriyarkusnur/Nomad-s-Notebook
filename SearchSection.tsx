
import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SearchSectionProps {
  onDestinationSelect: (destination: any) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ onDestinationSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock data for demonstration
  const mockDestinations = [
    { id: 1, name: 'Mumbai', country: 'India', type: 'city' },
    { id: 2, name: 'Goa', country: 'India', type: 'state' },
    { id: 3, name: 'Kerala', country: 'India', type: 'state' },
    { id: 4, name: 'Rajasthan', country: 'India', type: 'state' },
    { id: 5, name: 'New Delhi', country: 'India', type: 'city' },
    { id: 6, name: 'Bengaluru', country: 'India', type: 'city' },
    { id: 7, name: 'Bangalore', country: 'India', type: 'city' },
    { id: 8, name: 'Chennai', country: 'India', type: 'city' },
    { id: 9, name: 'Kolkata', country: 'India', type: 'city' },
    { id: 10, name: 'Hyderabad', country: 'India', type: 'city' },
    { id: 11, name: 'Paris', country: 'France', type: 'city' },
    { id: 12, name: 'Tokyo', country: 'Japan', type: 'city' },
    { id: 13, name: 'London', country: 'United Kingdom', type: 'city' },
    { id: 14, name: 'New York', country: 'United States', type: 'city' },
    { id: 15, name: 'Dubai', country: 'UAE', type: 'city' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 1) {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const filtered = mockDestinations.filter(dest =>
          dest.name.toLowerCase().includes(term.toLowerCase()) ||
          dest.country.toLowerCase().includes(term.toLowerCase())
        );
        setSuggestions(filtered);
        setShowSuggestions(true);
        setIsLoading(false);
      }, 300);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleDestinationSelect = (destination: any) => {
    setSearchTerm(destination.name);
    setShowSuggestions(false);
    onDestinationSelect(destination);
  };

  return (
    <div ref={searchRef} className="relative max-w-2xl mx-auto">
      <Card className="p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-2 border-blue-200 dark:border-slate-600 shadow-xl">
        <div className="flex items-center space-x-3">
          <Search className="h-6 w-6 text-blue-500 ml-4" />
          <input
            type="text"
            placeholder="Search for any destination worldwide..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 py-4 px-2 bg-transparent text-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
          />
          {isLoading && (
            <div className="mr-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
      </Card>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute top-full mt-2 w-full bg-white dark:bg-slate-800 shadow-xl border border-blue-200 dark:border-slate-600 z-50 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion: any) => (
            <div
              key={suggestion.id}
              onClick={() => handleDestinationSelect(suggestion)}
              className="flex items-center space-x-3 p-4 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer transition-colors border-b border-gray-100 dark:border-slate-600 last:border-b-0"
            >
              <MapPin className="h-4 w-4 text-orange-500" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{suggestion.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{suggestion.country}</p>
              </div>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
};
