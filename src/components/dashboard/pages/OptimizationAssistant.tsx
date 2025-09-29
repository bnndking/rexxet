import React, { useState } from 'react';
import { Bot, Send, Lightbulb, CheckCircle, RefreshCw, CreditCard as Edit3 } from 'lucide-react';

const optimizationCategories = [
  { id: 'content-gaps', label: 'Content Gaps', count: 5, color: 'text-red-600 bg-red-50' },
  { id: 'missing-topics', label: 'Missing Topics', count: 3, color: 'text-orange-600 bg-orange-50' },
  { id: 'technical', label: 'Technical Suggestions', count: 2, color: 'text-blue-600 bg-blue-50' },
  { id: 'keywords', label: 'Keyword Expansion', count: 8, color: 'text-purple-600 bg-purple-50' },
];

const contentSections = [
  { section: 'Title', status: 'needs_improvement', suggestion: 'Add "AI-powered" to your main headline for better AI visibility' },
  { section: 'Meta Description', status: 'missing', suggestion: 'Create a meta description that includes semantic keywords AI models look for' },
  { section: 'H1 / H2', status: 'good', suggestion: 'Your headings are well-structured and AI-friendly' },
  { section: 'Body Content', status: 'needs_improvement', suggestion: 'Include more comparison phrases and "best for" statements' },
];

const chatMessages = [
  { role: 'assistant', content: 'Hi! I\'m your AI optimization assistant. I\'ve analyzed your content and found several opportunities to improve your AI visibility. What would you like to work on first?' },
];

export default function OptimizationAssistant() {
  const [activeCategory, setActiveCategory] = useState('content-gaps');
  const [messages, setMessages] = useState(chatMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [showContentAnalysis, setShowContentAnalysis] = useState(true);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessages = [
      ...messages,
      { role: 'user', content: inputMessage },
      { role: 'assistant', content: 'I understand you want to improve that section. Here are some specific suggestions...' }
    ];
    
    setMessages(newMessages);
    setInputMessage('');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-emerald-600" />;
      case 'needs_improvement':
        return <RefreshCw className="h-5 w-5 text-orange-600" />;
      case 'missing':
        return <Edit3 className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'needs_improvement':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'missing':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Optimization Assistant</h1>
        <p className="text-gray-600 mt-1">AI-powered suggestions to boost your visibility</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-0">
        {/* Left Sidebar - Categories */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Optimization Categories</h2>
            <div className="space-y-2">
              {optimizationCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-indigo-50 border border-indigo-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{category.label}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Toggle Content Analysis */}
          <div className="mt-4">
            <button
              onClick={() => setShowContentAnalysis(!showContentAnalysis)}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-sm"
            >
              {showContentAnalysis ? 'Hide' : 'Show'} Content Analysis
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 flex flex-col min-h-0">
          {/* Content Analysis Panel */}
          {showContentAnalysis && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Content Analysis</h2>
              <div className="space-y-4">
                {contentSections.map((section, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${getStatusColor(section.status)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(section.status)}
                        <h3 className="font-semibold">{section.section}</h3>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                          Optimize
                        </button>
                        {section.status === 'good' && (
                          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                            Re-check
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-sm">{section.suggestion}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Interface */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex-1 flex flex-col min-h-0">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                <p className="text-sm text-gray-600">Ready to help optimize your content</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto min-h-0">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about optimization suggestions..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}