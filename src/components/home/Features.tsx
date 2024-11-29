import React from 'react';
import { Shield, Clock, Users, Search, Heart, Calendar } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'All properties are thoroughly verified for your peace of mind.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your queries and concerns.',
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Access to experienced real estate professionals.',
  },
  {
    icon: Search,
    title: 'Advanced Search',
    description: 'Powerful search tools to find your perfect property.',
  },
  {
    icon: Heart,
    title: 'Save Favorites',
    description: 'Create and manage lists of your favorite properties.',
  },
  {
    icon: Calendar,
    title: 'Easy Scheduling',
    description: 'Convenient booking system for property viewings.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Platform Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to find and secure your perfect property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}