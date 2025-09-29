import React, { useState } from 'react';
import { Search, TrendingUp, Plus, Download } from 'lucide-react';

const mockKeywords = [
  {
    keyword: 'best project management tools',
    volume: 12000,
    difficulty: 65,
    aiMentionProbability: 85,
    currentRanking: 7,
  },
  {
    keyword: 'AI-powered workflow automation',
    volume: 8500,
    difficulty: 72,
    aiMentionProbability: 92,
    currentRanking: null,
  },
  {
    keyword: 'startup productivity software',
    volume: 5200,
    difficulty: 58,
    aiMentionProbability: 78,
    currentRanking: 12,
  },
  {
    keyword: 'team collaboration tools comparison',
    volume: 9800,
    difficulty: 69,
    aiMentionProbability: 88,
    currentRanking: 4,
  },
  {
    keyword: 'remote work management platform',
    volume: 6700,
    difficulty: 61,
    aiMentionProbability: 81,
    currentRanking: null,
  },
];

export default function KeywordFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [opportunities, setOpportunities] = useState<string[]>([]);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  const addToOpportunities = (keyword: string) => {
    if (!opportunities.includes(keyword)) {
      setOpportunities([...opportunities, keyword]);
    }
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 40) return 'text-emerald-600 bg-emerald-50';
    if (difficulty < 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getDifficultyLabel = (difficulty: number) => {
    if (difficulty < 40) return 'Easy';
    if (difficulty < 70) return 'Medium';
    return 'Hard';
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return 'text-emerald-600 bg-emerald-50';
    if (probability >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Keyword Intent Finder</h1>
          <p className="text-gray-600 mt-1">Discover new queries and optimization opportunities</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Download className="h-4 w-4" />
          Export Keywords
        </button>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Discover New Keywords</h2>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter a topic or keyword (e.g., project management, AI tools)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={isSearching || !searchTerm}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Search className="h-5 w-5" />
            {isSearching ? 'Searching...' : 'Find Keywords'}
          </button>
        </div>
        {isSearching && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-600"></div>
              <p className="text-blue-800">Analyzing keyword opportunities...</p>
            </div>
          </div>
        )}
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Keyword Opportunities ({mockKeywords.length})
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keyword
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volume
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AI Mention Probability
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Ranking
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockKeywords.map((keyword, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-900">{keyword.keyword}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{keyword.volume.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(keyword.difficulty)}`}>
                      {getDifficultyLabel(keyword.difficulty)} ({keyword.difficulty})
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${keyword.aiMentionProbability >= 80 ? 'bg-emerald-500' : keyword.aiMentionProbability >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${keyword.aiMentionProbability}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{keyword.aiMentionProbability}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {keyword.currentRanking ? `#${keyword.currentRanking}` : (
                      <span className="text-gray-400">Not ranking</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => addToOpportunities(keyword.keyword)}
                      disabled={opportunities.includes(keyword.keyword)}
                      className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 text-sm font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      <Plus className="h-4 w-4" />
                      {opportunities.includes(keyword.keyword) ? 'Added' : 'Add'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Opportunities List */}
      {opportunities.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Opportunities ({opportunities.length})</h2>
            <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              Export to AI Assistant
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {opportunities.map((keyword, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
              >
                {keyword}
                <button
                  onClick={() => setOpportunities(opportunities.filter(k => k !== keyword))}
                  className="ml-2 text-indigo-600 hover:text-indigo-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">High Probability Keywords</p>
          <p className="text-2xl font-bold text-emerald-600">
            {mockKeywords.filter(k => k.aiMentionProbability >= 80).length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Easy Difficulty</p>
          <p className="text-2xl font-bold text-emerald-600">
            {mockKeywords.filter(k => k.difficulty < 40).length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Not Ranking</p>
          <p className="text-2xl font-bold text-orange-600">
            {mockKeywords.filter(k => !k.currentRanking).length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Total Volume</p>
          <p className="text-2xl font-bold text-gray-900">
            {mockKeywords.reduce((sum, k) => sum + k.volume, 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}