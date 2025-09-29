import React from 'react';
import { Globe, Zap, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Globe,
    title: 'Enter Your Domain',
    description: 'Simply add your website URL and let our AI scanners get to work.',
    step: '01'
  },
  {
    icon: Zap,
    title: 'Rexxet Checks AI & Search Results',
    description: 'We analyze how GPT, Claude, Gemini, and search engines currently see your brand.',
    step: '02'
  },
  {
    icon: TrendingUp,
    title: 'Get Optimization Suggestions',
    description: 'Receive specific, actionable recommendations to improve your AI visibility.',
    step: '03'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple 3-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-6xl font-bold text-indigo-100 mb-4">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-6 relative -mt-12">
                <step.icon className="h-8 w-8" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-indigo-200 -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-indigo-300 rounded-full -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}