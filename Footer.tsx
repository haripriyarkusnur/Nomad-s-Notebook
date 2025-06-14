
import React from 'react';
import { Compass, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-slate-800 to-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">TravelInfo</h3>
            </div>
            <p className="text-gray-300 max-w-sm">
              Your comprehensive travel companion for discovering amazing destinations worldwide. 
              Plan better, travel smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Travel Guides</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Popular Destinations</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Travel Tips</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span>Everywhere, Earth</span>
              </div>
              <p>Email: info@travelinfo.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TravelInfo. All rights reserved. Built with ❤️ for travelers.</p>
        </div>
      </div>
    </footer>
  );
};
