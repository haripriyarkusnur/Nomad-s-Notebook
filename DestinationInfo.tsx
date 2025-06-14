
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, Calendar, Sun, Moon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface DestinationInfoProps {
  destination: any;
}

export const DestinationInfo: React.FC<DestinationInfoProps> = ({ destination }) => {
  const [destinationData, setDestinationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Generate destination-specific data based on the selected destination
  const generateDestinationData = (dest: any) => {
    const destinationMockData: { [key: string]: any } = {
      'Mumbai': {
        population: '20,411,274',
        attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Chhatrapati Shivaji Terminus', 'Bollywood Studios'],
        hasMetro: true,
        languages: ['Hindi', 'Marathi', 'English'],
        currency: 'INR (Indian Rupee)',
        exchangeRate: '1 USD = 83.25 INR',
        bestTimeToVisit: 'October to March',
        famousFor: ['Bollywood Film Industry', 'Street Food', 'Colonial Architecture', 'Financial Capital', 'Cultural Diversity'],
        eateries: ['Leopold Cafe', 'Trishna', 'Britannia & Co.', 'Mohammed Ali Road Food Street', 'Cafe Mondegar'],
        localPhrases: [
          { english: 'Hello', local: 'Namaste (नमस्ते)' },
          { english: 'Thank you', local: 'Dhanyawad (धन्यवाद)' },
          { english: 'How much?', local: 'Kitna paisa? (कितना पैसा?)' },
          { english: 'Where is?', local: 'Kahan hai? (कहाँ है?)' }
        ]
      },
      'Bengaluru': {
        population: '12,765,000',
        attractions: ['Bangalore Palace', 'Lalbagh Botanical Garden', 'Cubbon Park', 'Tipu Sultan Palace', 'ISKCON Temple'],
        hasMetro: true,
        languages: ['Kannada', 'English', 'Hindi', 'Tamil'],
        currency: 'INR (Indian Rupee)',
        exchangeRate: '1 USD = 83.25 INR',
        bestTimeToVisit: 'October to February',
        famousFor: ['Silicon Valley of India', 'IT Hub', 'Pub Culture', 'Pleasant Climate', 'Garden City'],
        eateries: ['MTR', 'Vidyarthi Bhavan', 'Corner House', 'Truffles', 'Koshy\'s Restaurant'],
        localPhrases: [
          { english: 'Hello', local: 'Namaskara (ನಮಸ್ಕಾರ)' },
          { english: 'Thank you', local: 'Dhanyawadagalu (ಧನ್ಯವಾದಗಳು)' },
          { english: 'How much?', local: 'Eshtu? (ಎಷ್ಟು?)' },
          { english: 'Where is?', local: 'Ellide? (ಎಲ್ಲಿದೆ?)' }
        ]
      },
      'Bangalore': {
        population: '12,765,000',
        attractions: ['Bangalore Palace', 'Lalbagh Botanical Garden', 'Cubbon Park', 'Tipu Sultan Palace', 'ISKCON Temple'],
        hasMetro: true,
        languages: ['Kannada', 'English', 'Hindi', 'Tamil'],
        currency: 'INR (Indian Rupee)',
        exchangeRate: '1 USD = 83.25 INR',
        bestTimeToVisit: 'October to February',
        famousFor: ['Silicon Valley of India', 'IT Hub', 'Pub Culture', 'Pleasant Climate', 'Garden City'],
        eateries: ['MTR', 'Vidyarthi Bhavan', 'Corner House', 'Truffles', 'Koshy\'s Restaurant'],
        localPhrases: [
          { english: 'Hello', local: 'Namaskara (ನಮಸ್ಕಾರ)' },
          { english: 'Thank you', local: 'Dhanyawadagalu (ಧನ್ಯವಾದಗಳು)' },
          { english: 'How much?', local: 'Eshtu? (ಎಷ್ಟು?)' },
          { english: 'Where is?', local: 'Ellide? (ಎಲ್ಲಿದೆ?)' }
        ]
      },
      'New Delhi': {
        population: '32,941,000',
        attractions: ['Red Fort', 'India Gate', 'Qutub Minar', 'Lotus Temple', 'Humayun\'s Tomb'],
        hasMetro: true,
        languages: ['Hindi', 'English', 'Punjabi', 'Urdu'],
        currency: 'INR (Indian Rupee)',
        exchangeRate: '1 USD = 83.25 INR',
        bestTimeToVisit: 'October to March',
        famousFor: ['Capital of India', 'Historical Monuments', 'Political Center', 'Street Food', 'Cultural Heritage'],
        eateries: ['Karim\'s', 'Paranthe Wali Gali', 'Khan Chacha', 'Al Jawahar', 'Lodi - The Garden Restaurant'],
        localPhrases: [
          { english: 'Hello', local: 'Namaste (नमस्ते)' },
          { english: 'Thank you', local: 'Dhanyawad (धन्यवाद)' },
          { english: 'How much?', local: 'Kitna? (कितना?)' },
          { english: 'Where is?', local: 'Kahan hai? (कहाँ है?)' }
        ]
      },
      'Chennai': {
        population: '7,088,000',
        attractions: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George', 'Government Museum', 'San Thome Cathedral'],
        hasMetro: true,
        languages: ['Tamil', 'English', 'Telugu', 'Hindi'],
        currency: 'INR (Indian Rupee)',
        exchangeRate: '1 USD = 83.25 INR',
        bestTimeToVisit: 'November to February',
        famousFor: ['Cultural Capital of South India', 'Classical Music & Dance', 'Auto Industry', 'Temples', 'Marina Beach'],
        eateries: ['Murugan Idli Shop', 'Saravana Bhavan', 'Mathsya', 'Dakshin', 'Hotel Raintree'],
        localPhrases: [
          { english: 'Hello', local: 'Vanakkam (வணக்கம்)' },
          { english: 'Thank you', local: 'Nandri (நன்றி)' },
          { english: 'How much?', local: 'Evvalavu? (எவ்வளவு?)' },
          { english: 'Where is?', local: 'Enga irukku? (எங்க இருக்கு?)' }
        ]
      },
      'Kolkata': {
        population: '4,496,000',
        attractions: ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Temple', 'Indian Museum', 'Park Street'],
        hasMetro: true,
        languages: ['Bengali', 'Hindi', 'English', 'Urdu'],
        currency: 'INR (Indian Rupee)',
        exchangeRate: '1 USD = 83.25 INR',
        bestTimeToVisit: 'October to March',
        famousFor: ['Cultural Capital of India', 'Literature & Arts', 'Sweets', 'Intellectuals', 'Durga Puja'],
        eateries: ['Peter Cat', 'Flurys', 'Kewpie\'s Kitchen', 'Mocambo', '6 Ballygunge Place'],
        localPhrases: [
          { english: 'Hello', local: 'Namaskar (নমস্কার)' },
          { english: 'Thank you', local: 'Dhonnobad (ধন্যবাদ)' },
          { english: 'How much?', local: 'Koto? (কত?)' },
          { english: 'Where is?', local: 'Kothay? (কোথায়?)' }
        ]
      },
      'Hyderabad': {
        population: '6,993,000',
        attractions: ['Charminar', 'Golconda Fort', 'Ramoji Film City', 'Salar Jung Museum', 'Hussain Sagar Lake'],
        hasMetro: true,
        languages: ['Telugu', 'Hindi', 'English', 'Urdu'],
        currency: 'INR (Indian Rupee)',
        exchangeRate: '1 USD = 83.25 INR',
        bestTimeToVisit: 'October to March',
        famousFor: ['Nizami Culture', 'Biryani', 'IT Hub', 'Pearls', 'Historical Architecture'],
        eateries: ['Paradise Biryani', 'Shah Ghouse', 'Bawarchi', 'Jewel of Nizam', 'Kritunga Restaurant'],
        localPhrases: [
          { english: 'Hello', local: 'Namaste (నమస్తే)' },
          { english: 'Thank you', local: 'Dhanyawadamulu (ధన్యవాదములు)' },
          { english: 'How much?', local: 'Enta? (ఎంత?)' },
          { english: 'Where is?', local: 'Ekkada undi? (ఎక్కడ ఉంది?)' }
        ]
      },
      'Goa': {
        population: '1,458,000',
        attractions: ['Baga Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls', 'Fort Aguada', 'Anjuna Beach'],
        hasMetro: false,
        languages: ['Konkani', 'Portuguese', 'English', 'Hindi'],
        currency: 'INR (Indian Rupee)',
        exchangeRate: '1 USD = 83.25 INR',
        bestTimeToVisit: 'November to February',
        famousFor: ['Beaches', 'Portuguese Architecture', 'Seafood', 'Nightlife', 'Water Sports'],
        eateries: ['Fisherman\'s Wharf', 'Vinayak Family Restaurant', 'Britto\'s', 'Martin\'s Corner', 'The Fisherman\'s Wharf'],
        localPhrases: [
          { english: 'Hello', local: 'Namaskar (नमस्कार)' },
          { english: 'Thank you', local: 'Dev borem korum (देव बरें करूम्)' },
          { english: 'How much?', local: 'Kitlo? (कितलो?)' },
          { english: 'Where is?', local: 'Koi? (कोय?)' }
        ]
      },
      'Paris': {
        population: '2,161,000',
        attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Arc de Triomphe', 'Champs-Élysées'],
        hasMetro: true,
        languages: ['French', 'English'],
        currency: 'EUR (Euro)',
        exchangeRate: '1 USD = 0.93 EUR',
        bestTimeToVisit: 'April to June, September to November',
        famousFor: ['City of Light', 'Fashion Capital', 'Art & Culture', 'Cuisine', 'Romance'],
        eateries: ['Le Comptoir du Relais', 'L\'As du Fallafel', 'Breizh Café', 'Du Pain et des Idées', 'L\'Ami Jean'],
        localPhrases: [
          { english: 'Hello', local: 'Bonjour' },
          { english: 'Thank you', local: 'Merci' },
          { english: 'How much?', local: 'Combien?' },
          { english: 'Where is?', local: 'Où est?' }
        ]
      },
      'Tokyo': {
        population: '13,960,000',
        attractions: ['Tokyo Tower', 'Sensoji Temple', 'Shibuya Crossing', 'Meiji Shrine', 'Tokyo Skytree'],
        hasMetro: true,
        languages: ['Japanese', 'English'],
        currency: 'JPY (Japanese Yen)',
        exchangeRate: '1 USD = 149.50 JPY',
        bestTimeToVisit: 'March to May, September to November',
        famousFor: ['Technology Hub', 'Anime & Manga', 'Sushi', 'Cherry Blossoms', 'Modern Architecture'],
        eateries: ['Tsukiji Outer Market', 'Sukiyabashi Jiro', 'Ramen Yashichi', 'Gonpachi', 'Nabezo'],
        localPhrases: [
          { english: 'Hello', local: 'Konnichiwa (こんにちは)' },
          { english: 'Thank you', local: 'Arigato gozaimasu (ありがとうございます)' },
          { english: 'How much?', local: 'Ikura desu ka? (いくらですか?)' },
          { english: 'Where is?', local: 'Doko desu ka? (どこですか?)' }
        ]
      }
    };

    // Return specific data for the destination or default data
    return destinationMockData[dest.name] || {
      population: '2,500,000+',
      attractions: ['Local Attractions', 'Historical Sites', 'Natural Beauty', 'Cultural Centers', 'Markets'],
      hasMetro: false,
      languages: ['Local Language', 'English'],
      currency: 'Local Currency',
      exchangeRate: 'Check current rates',
      bestTimeToVisit: 'Year Round',
      famousFor: ['Local Culture', 'Traditional Cuisine', 'Heritage Sites', 'Natural Beauty', 'Hospitality'],
      eateries: ['Local Restaurant 1', 'Local Restaurant 2', 'Street Food', 'Traditional Cuisine', 'Modern Dining'],
      localPhrases: [
        { english: 'Hello', local: 'Local Greeting' },
        { english: 'Thank you', local: 'Local Thank You' },
        { english: 'How much?', local: 'Local Price Query' },
        { english: 'Where is?', local: 'Local Direction Query' }
      ]
    };
  };

  useEffect(() => {
    // Simulate API calls with destination-specific mock data
    const fetchDestinationData = async () => {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get destination-specific data
      const mockData = generateDestinationData(destination);
      
      setDestinationData(mockData);
      setIsLoading(false);
    };

    fetchDestinationData();
  }, [destination]);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Fetching destination information...</p>
      </div>
    );
  }

  if (!destinationData) return null;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
          {destination.name}, {destination.country}
        </h2>
        <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>Population: {destinationData.population}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>Metro: {destinationData.hasMetro ? 'Available' : 'Not Available'}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tourist Attractions */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-600">
              <MapPin className="h-5 w-5" />
              <span>Tourist Attractions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {destinationData.attractions.map((attraction: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{attraction}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Languages & Currency */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-600">
              <span>Languages & Currency</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Languages Spoken:</h4>
              <div className="flex flex-wrap gap-2">
                {destinationData.languages.map((lang: string, index: number) => (
                  <Badge key={index} variant="secondary">{lang}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Currency:</h4>
              <p className="text-gray-700 dark:text-gray-300">{destinationData.currency}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{destinationData.exchangeRate}</p>
            </div>
          </CardContent>
        </Card>

        {/* Best Time to Visit */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-orange-600">
              <Calendar className="h-5 w-5" />
              <span>Best Time to Visit</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg">
              <Sun className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <p className="font-semibold text-orange-700 dark:text-orange-400">
                {destinationData.bestTimeToVisit}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Famous For */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-purple-600">Famous For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-2">
              {destinationData.famousFor.map((item: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Famous Eateries */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-red-600">Famous Eateries</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {destinationData.eateries.map((eatery: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">{eatery}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Local Phrases */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-indigo-600">Common Phrases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {destinationData.localPhrases.map((phrase: any, index: number) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-3">
                  <p className="font-semibold text-gray-900 dark:text-white">{phrase.english}</p>
                  <p className="text-indigo-600 dark:text-indigo-400">{phrase.local}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
