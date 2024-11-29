import React from 'react';
import { Shield, Home, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Over 10 years of experience in connecting people with their dream properties',
    },
    {
      icon: Home,
      title: 'Extensive Listings',
      description: 'Access to thousands of verified properties across multiple locations',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from our team of real estate professionals',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About RealEstate
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to helping you find the perfect property that matches your lifestyle and needs.
            Our platform makes it easy to discover, compare, and connect with property owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}