
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { CheckSquare, Calendar, MapPin, Compass } from 'lucide-react';

export const TravelTips = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const travelTips = [
    {
      category: 'General Tips',
      icon: <Compass className="h-5 w-5" />,
      color: 'text-blue-600',
      tips: [
        'Research local customs and traditions',
        'Learn basic phrases in the local language',
        'Check visa requirements and validity',
        'Get travel insurance',
        'Inform your bank about travel plans'
      ]
    },
    {
      category: 'Packing Essentials',
      icon: <CheckSquare className="h-5 w-5" />,
      color: 'text-green-600',
      tips: [
        'Pack according to weather conditions',
        'Carry copies of important documents',
        'Pack medications with prescriptions',
        'Bring universal adapters',
        'Pack comfortable walking shoes'
      ]
    },
    {
      category: 'Safety & Health',
      icon: <MapPin className="h-5 w-5" />,
      color: 'text-red-600',
      tips: [
        'Register with local embassy if abroad',
        'Keep emergency contacts handy',
        'Stay hydrated and eat safely',
        'Avoid isolated areas at night',
        'Keep valuables in hotel safe'
      ]
    }
  ];

  const planningChecklist = [
    'Book flights and accommodation',
    'Apply for visa (if required)',
    'Get travel insurance',
    'Exchange currency',
    'Pack essentials',
    'Download offline maps',
    'Confirm hotel reservations',
    'Set up international roaming',
    'Inform credit card companies',
    'Create digital copies of documents'
  ];

  const toggleChecklistItem = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const monthlyDestinations = {
    'January': ['Goa', 'Kerala', 'Rajasthan', 'Dubai'],
    'February': ['Himachal Pradesh', 'Uttarakhand', 'Andaman', 'Thailand'],
    'March': ['Holi Festival Tours', 'North India', 'Nepal', 'Egypt'],
    'April': ['Kashmir', 'Ladakh', 'Japan', 'Turkey'],
    'May': ['Hill Stations', 'Europe', 'Scandinavia', 'Russia'],
    'June': ['Monsoon Destinations', 'Scotland', 'Ireland', 'Alaska'],
    'July': ['Valley of Flowers', 'Ladakh', 'Eastern Europe', 'Canada'],
    'August': ['Western Ghats', 'Coorg', 'Kenya', 'Romania'],
    'September': ['Post-Monsoon India', 'Jordan', 'South Korea', 'China'],
    'October': ['Rajasthan', 'Gujarat', 'Bhutan', 'Morocco'],
    'November': ['Golden Triangle', 'Myanmar', 'Vietnam', 'Cambodia'],
    'December': ['South India', 'Rishikesh', 'Sri Lanka', 'Philippines']
  };

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentDestinations = monthlyDestinations[currentMonth as keyof typeof monthlyDestinations] || [];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Travel Tips & Planning
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Essential tips and checklists for a perfect trip
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Travel Tips */}
        <div className="space-y-6">
          {travelTips.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${section.color}`}>
                  {section.icon}
                  <span>{section.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
                      <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Planning Checklist & Seasonal Destinations */}
        <div className="space-y-6">
          {/* Planning Checklist */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-orange-600">
                <Calendar className="h-5 w-5" />
                <span>Planning Checklist</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {planningChecklist.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Checkbox
                      id={`checklist-${index}`}
                      checked={checkedItems.includes(index)}
                      onCheckedChange={() => toggleChecklistItem(index)}
                    />
                    <label
                      htmlFor={`checklist-${index}`}
                      className={`text-sm cursor-pointer ${
                        checkedItems.includes(index)
                          ? 'line-through text-gray-500'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Progress: {checkedItems.length}/{planningChecklist.length} completed
              </div>
            </CardContent>
          </Card>

          {/* Seasonal Destinations */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-purple-600">
                <Calendar className="h-5 w-5" />
                <span>Best Destinations for {currentMonth}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {currentDestinations.map((destination, index) => (
                  <Badge key={index} variant="secondary" className="text-purple-600">
                    {destination}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                These destinations are perfect to visit during {currentMonth.toLowerCase()} based on weather and seasonal attractions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
