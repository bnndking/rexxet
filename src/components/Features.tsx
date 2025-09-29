import React from 'react';
import { Brain, CreditCard as Edit3, Search, Target } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Visibility Checker',
    description: 'See if your website or content is recommended by AI assistants like GPT, Claude, and Gemini.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Edit3,
    title: 'Optimization Assistant',
    description: 'Get actionable fixes to boost your AI visibility with specific recommendations.',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Search,
    title: 'Keyword Intent Finder',
    description: 'Discover what people are asking AI and how to match their queries perfectly.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Target,
    title: 'Prompt Tracker',
    description: 'See which AI prompts align with your site and optimize for better coverage.',
    gradient: 'from-orange-500 to-orange-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Dominate AI Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI optimization tools helps you get discovered, recommended, and chosen by AI assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}