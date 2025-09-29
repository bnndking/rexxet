import React, { useState } from 'react';
import { Search, Download, Share2, Calendar, CheckCircle, AlertCircle, XCircle, TrendingUp } from 'lucide-react';

const mockScanResult = {
  domain: 'techstartup.com',
  scanDate: '2024-01-15',
  visibilityScore: 73,
  aiMentions: {
    chatgpt: { mentions: 18, total: 30, percentage: 60 },
    claude: { mentions: 12, total: 30, percentage: 40 },
    gemini: { mentions: 17, total: 30, percentage: 57 },
  },
  googlePresence: {
    averagePosition: 7,
    pageOneRankings: 8,
    totalKeywords: 25,
  },
  opportunities: [
    'Project management tool comparisons',
    'AI-powered workflow automation',
    'Startup productivity recommendations',
  ],
  gaps: [
    'Integration recommendations',
    'Enterprise solution queries',
    'Mobile app comparisons',
  ],
};

export default function AIVisibilityPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isScanning, setIsScanning] = useState(false);
  const [domain, setDomain] = useState('');

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scan process
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'queries', label: 'Query-Level Report' },
    { id: 'competitors', label: 'Competitor Comparison' },
    { id: 'history', label: 'History' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Visibility Scanner</h1>
          <p className="text-gray-600 mt-1">Analyze how AI models mention your brand</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Share2 className="h-4 w-4" />
            Share Report
          </button>
        </div>
      </div>

      {/* Scan Input */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Run New Scan</h2>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="url"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Enter your domain or URL (e.g., techstartup.com)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleScan}
            disabled={isScanning || !domain}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Search className="h-5 w-5" />
            {isScanning ? 'Scanning...' : 'Run Scan'}
          </button>
        </div>
        {isScanning && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-600"></div>
              <p className="text-blue-800">Scanning AI models and search results...</p>
            </div>
          </div>
        )}
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Visibility Score */}
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 mb-4">
                  <div className="text-4xl font-bold text-indigo-600">{mockScanResult.visibilityScore}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visibility Score</h3>
                <p className="text-gray-600">Out of 100 • Last updated {mockScanResult.scanDate}</p>
              </div>

              {/* AI Mentions */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Mentions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                      <h4 className="font-semibold text-emerald-800">ChatGPT</h4>
                    </div>
                    <p className="text-2xl font-bold text-emerald-900">{mockScanResult.aiMentions.chatgpt.mentions}</p>
                    <p className="text-emerald-700 text-sm">out of {mockScanResult.aiMentions.chatgpt.total} queries</p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold text-blue-800">Claude</h4>
                    </div>
                    <p className="text-2xl font-bold text-blue-900">{mockScanResult.aiMentions.claude.mentions}</p>
                    <p className="text-blue-700 text-sm">out of {mockScanResult.aiMentions.claude.total} queries</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                      <h4 className="font-semibold text-purple-800">Gemini</h4>
                    </div>
                    <p className="text-2xl font-bold text-purple-900">{mockScanResult.aiMentions.gemini.mentions}</p>
                    <p className="text-purple-700 text-sm">out of {mockScanResult.aiMentions.gemini.total} queries</p>
                  </div>
                </div>
              </div>

              {/* Google Presence */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Google Presence</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-900">{mockScanResult.googlePresence.averagePosition}</p>
                      <p className="text-gray-600">Average Position</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-900">{mockScanResult.googlePresence.pageOneRankings}</p>
                      <p className="text-gray-600">Page 1 Rankings</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-900">{mockScanResult.googlePresence.totalKeywords}</p>
                      <p className="text-gray-600">Total Keywords</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opportunities & Gaps */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Opportunities</h3>
                  <div className="space-y-3">
                    {mockScanResult.opportunities.map((opportunity, index) => (
                      <div key={index} className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                        <p className="font-medium text-emerald-800">{opportunity}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Missing Mentions</h3>
                  <div className="space-y-3">
                    {mockScanResult.gaps.map((gap, index) => (
                      <div key={index} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <p className="font-medium text-orange-800">{gap}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View Full Report
                </button>
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                  Optimize Content
                </button>
              </div>
            </div>
          )}

          {activeTab === 'queries' && (
            <div className="text-center py-12">
              <p className="text-gray-500">Query-level report coming soon...</p>
            </div>
          )}

          {activeTab === 'competitors' && (
            <div className="text-center py-12">
              <p className="text-gray-500">Competitor comparison coming soon...</p>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="text-center py-12">
              <p className="text-gray-500">Scan history coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}