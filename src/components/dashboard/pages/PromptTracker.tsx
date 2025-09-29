import React, { useState } from 'react';
import { Search, Filter, Download, Calendar, MessageSquare } from 'lucide-react';

const mockPrompts = [
  {
    id: 1,
    prompt: 'What are the best project management tools for startups?',
    aiModel: 'chatgpt',
    mentionType: 'direct',
    dateSeen: '2024-01-15',
    position: 2,
  },
  {
    id: 2,
    prompt: 'Recommend AI-powered workflow automation tools',
    aiModel: 'claude',
    mentionType: 'indirect',
    dateSeen: '2024-01-14',
    position: 5,
  },
  {
    id: 3,
    prompt: 'Best productivity software for remote teams',
    aiModel: 'gemini',
    mentionType: 'not_mentioned',
    dateSeen: '2024-01-13',
    position: null,
  },
  {
    id: 4,
    prompt: 'Compare task management applications',
    aiModel: 'chatgpt',
    mentionType: 'direct',
    dateSeen: '2024-01-12',
    position: 1,
  },
  {
    id: 5,
    prompt: 'What tools help with team collaboration?',
    aiModel: 'claude',
    mentionType: 'indirect',
    dateSeen: '2024-01-11',
    position: 7,
  },
];

export default function PromptTracker() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModel, setSelectedModel] = useState('all');
  const [selectedMentionType, setSelectedMentionType] = useState('all');
  const [dateRange, setDateRange] = useState('7days');

  const filteredPrompts = mockPrompts.filter(prompt => {
    const matchesSearch = prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModel = selectedModel === 'all' || prompt.aiModel === selectedModel;
    const matchesMentionType = selectedMentionType === 'all' || prompt.mentionType === selectedMentionType;
    return matchesSearch && matchesModel && matchesMentionType;
  });

  const getMentionTypeColor = (type: string) => {
    switch (type) {
      case 'direct':
        return 'bg-emerald-100 text-emerald-800';
      case 'indirect':
        return 'bg-yellow-100 text-yellow-800';
      case 'not_mentioned':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMentionTypeLabel = (type: string) => {
    switch (type) {
      case 'direct':
        return 'Direct';
      case 'indirect':
        return 'Indirect';
      case 'not_mentioned':
        return 'Not Mentioned';
      default:
        return type;
    }
  };

  const getModelColor = (model: string) => {
    switch (model) {
      case 'chatgpt':
        return 'bg-emerald-100 text-emerald-800';
      case 'claude':
        return 'bg-blue-100 text-blue-800';
      case 'gemini':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getModelLabel = (model: string) => {
    switch (model) {
      case 'chatgpt':
        return 'ChatGPT';
      case 'claude':
        return 'Claude';
      case 'gemini':
        return 'Gemini';
      default:
        return model;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Prompt Tracker</h1>
          <p className="text-gray-600 mt-1">Monitor all prompts where your brand appears</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search prompts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* AI Model Filter */}
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="all">All Models</option>
            <option value="chatgpt">ChatGPT</option>
            <option value="claude">Claude</option>
            <option value="gemini">Gemini</option>
          </select>

          {/* Mention Type Filter */}
          <select
            value={selectedMentionType}
            onChange={(e) => setSelectedMentionType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="all">All Mention Types</option>
            <option value="direct">Direct</option>
            <option value="indirect">Indirect</option>
            <option value="not_mentioned">Not Mentioned</option>
          </select>

          {/* Date Range */}
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="all">All time</option>
          </select>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            {filteredPrompts.length} Prompts Found
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prompt
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AI Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mention Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Seen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPrompts.map((prompt) => (
                <tr key={prompt.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-900 max-w-md">{prompt.prompt}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getModelColor(prompt.aiModel)}`}>
                      {getModelLabel(prompt.aiModel)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getMentionTypeColor(prompt.mentionType)}`}>
                      {getMentionTypeLabel(prompt.mentionType)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {prompt.position ? `#${prompt.position}` : '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {prompt.dateSeen}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                      {prompt.mentionType === 'not_mentioned' ? 'Optimize' : 'Analyze'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No prompts found matching your filters</p>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Total Prompts</p>
          <p className="text-2xl font-bold text-gray-900">{mockPrompts.length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Direct Mentions</p>
          <p className="text-2xl font-bold text-emerald-600">
            {mockPrompts.filter(p => p.mentionType === 'direct').length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Indirect Mentions</p>
          <p className="text-2xl font-bold text-yellow-600">
            {mockPrompts.filter(p => p.mentionType === 'indirect').length}
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Missing Opportunities</p>
          <p className="text-2xl font-bold text-red-600">
            {mockPrompts.filter(p => p.mentionType === 'not_mentioned').length}
          </p>
        </div>
      </div>
    </div>
  );
}