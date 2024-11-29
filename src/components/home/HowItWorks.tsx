import React from 'react';
import { Search, Home, CalendarCheck, Key } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search Properties',
    description: 'Browse our extensive collection of properties using advanced filters.',
  },
  {
    icon: Home,
    title: 'Virtual Tours',
    description: 'Take virtual tours of properties from the comfort of your home.',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule Visits',
    description: 'Book property visits at your convenience with our agents.',
  },
  {
    icon: Key,
    title: 'Close the Deal',
    description: 'Get expert support throughout the closing process.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Your journey to finding the perfect property in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}