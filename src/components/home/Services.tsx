import React from 'react';
import { Home, Building2, Warehouse, Building } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Properties',
    description: 'Find your dream home from our collection of houses, apartments, and condos.',
  },
  {
    icon: Building2,
    title: 'Commercial Spaces',
    description: 'Discover prime commercial locations for your business needs.',
  },
  {
    icon: Warehouse,
    title: 'Industrial Properties',
    description: 'Explore industrial spaces perfect for manufacturing and warehousing.',
  },
  {
    icon: Building,
    title: 'Property Management',
    description: 'Professional property management services for landlords and investors.',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}