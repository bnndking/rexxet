import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const features = [
  '1 Domain Analysis',
  'AI Visibility Dashboard',
  'Optimization Assistant',
  'Weekly Intent Updates',
  'GPT, Claude & Gemini Tracking',
  'Competitor Analysis',
  'Priority Support',
  'API Access (Coming Soon)'
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to dominate AI search results, in one comprehensive plan
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-white rounded-3xl border-2 border-indigo-200 shadow-2xl overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 text-sm font-semibold rounded-b-xl">
                Most Popular
              </div>
            </div>

            <div className="p-8 pt-12">
              {/* Plan Name */}
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Pro Plan</h3>
              <p className="text-gray-600 mb-8">Perfect for growing businesses</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">$50</span>
                  <span className="text-xl text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Billed monthly • Cancel anytime</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-3 w-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg font-semibold">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Free 14-day trial • No credit card required
              </p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-50 rounded-full border border-emerald-200">
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
              <Check className="h-4 w-4 text-white" />
            </div>
            <span className="text-emerald-800 font-medium">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}