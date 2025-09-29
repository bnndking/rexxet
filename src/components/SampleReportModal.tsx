import React from 'react';
import { X, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface SampleReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SampleReportModal({ isOpen, onClose }: SampleReportModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sample AI Visibility Report</h2>
            <p className="text-gray-600 mt-1">Example analysis for TechStartup.com</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {/* AI Mentions Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Mentions</h3>
            <div className="space-y-3">
              <div className="flex items-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                <div>
                  <p className="font-semibold text-emerald-800">ChatGPT</p>
                  <p className="text-emerald-700 text-sm">Mentioned in 3 out of 10 relevant queries</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-3" />
                <div>
                  <p className="font-semibold text-yellow-800">Claude</p>
                  <p className="text-yellow-700 text-sm">Mentioned in 1 out of 10 relevant queries</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-red-50 rounded-lg border border-red-200">
                <XCircle className="h-5 w-5 text-red-600 mr-3" />
                <div>
                  <p className="font-semibold text-red-800">Gemini</p>
                  <p className="text-red-700 text-sm">Not mentioned in tested queries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Presence */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Google Presence</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 mb-2"><strong>Average Position:</strong> #7</p>
              <p className="text-gray-700 mb-2"><strong>Page 1 Rankings:</strong> 3 out of 10 keywords</p>
              <p className="text-gray-700"><strong>Top Keywords:</strong> "AI tools for startups", "startup automation"</p>
            </div>
          </div>

          {/* Gaps Analysis */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Opportunity Gaps</h3>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-800 mb-2">Missing: Project Management Queries</p>
                <p className="text-blue-700 text-sm">Competitors appear 5x more often for project management related questions</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="font-semibold text-purple-800 mb-2">Missing: Integration Recommendations</p>
                <p className="text-purple-700 text-sm">AI rarely suggests your platform for workflow integrations</p>
              </div>
            </div>
          </div>

          {/* Quick Recommendations */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Optimization Tips</h3>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Add "AI-powered\" to your main headline
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Create content around "best project management tools"
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Optimize for integration-focused queries
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Build comparison pages vs. competitors
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}