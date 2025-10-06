import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import SampleReportModal from './SampleReportModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-8">
              🚀 AI-Powered Visibility Optimization
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Get Your Website{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Recommended by AI
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed">
              See how GPT, Claude, and Gemini mention your brand — and learn how to rank inside their answers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button

                 onClick={() => navigate('/signup')}

                className="bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 text-lg font-semibold">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 text-lg font-semibold border border-gray-200"
              >
                <Play className="h-5 w-5" />
                See Example Report
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-6">Trusted by growing businesses worldwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                {/* Placeholder for company logos */}
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <SampleReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
