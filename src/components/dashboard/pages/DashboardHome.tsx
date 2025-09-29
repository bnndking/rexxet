import React from 'react';
import { TrendingUp, TrendingDown, Eye, Search, Bot, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  {
    label: 'AI Mentions This Month',
    value: '47',
    change: '+12%',
    trend: 'up',
    icon: Eye,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    label: 'Visibility Score',
    value: '73/100',
    change: '+8 points',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    label: 'Top Ranking Keywords',
    value: '23',
    change: '+5',
    trend: 'up',
    icon: Search,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    label: 'Missing Opportunities',
    value: '12',
    change: '-3',
    trend: 'down',
    icon: AlertCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

const aiMentions = [
  { model: 'ChatGPT', mentions: 18, percentage: 60, color: 'bg-emerald-500' },
  { model: 'Claude', mentions: 12, percentage: 40, color: 'bg-blue-500' },
  { model: 'Gemini', mentions: 17, percentage: 57, color: 'bg-purple-500' },
];

const topQueries = [
  'Best project management tools for startups',
  'AI-powered workflow automation',
  'Startup productivity software recommendations',
];

const recentActivity = [
  { action: 'New AI mention detected', details: 'ChatGPT recommended your tool', time: '2 hours ago', type: 'mention' },
  { action: 'Optimization completed', details: 'Updated meta descriptions', time: '1 day ago', type: 'optimization' },
  { action: 'Scan completed', details: 'techstartup.com visibility report', time: '2 days ago', type: 'scan' },
];

export default function DashboardHome() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your AI visibility overview.</p>
        </div>
        <Link
          to="/dashboard/ai-visibility"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          <Search className="h-5 w-5" />
          Run New Scan
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Visibility Snapshot */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">AI Visibility Snapshot</h2>
          <div className="space-y-4">
            {aiMentions.map((ai, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${ai.color}`}></div>
                  <span className="font-medium text-gray-900">{ai.model}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${ai.color}`}
                      style={{ width: `${ai.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{ai.mentions}</span>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/dashboard/ai-visibility"
            className="mt-6 text-indigo-600 hover:text-indigo-700 text-sm font-medium inline-flex items-center gap-1"
          >
            View detailed report →
          </Link>
        </div>

        {/* Top Queries */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top 3 Queries Mentioning You</h2>
          <div className="space-y-4">
            {topQueries.map((query, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-sm font-medium flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700">{query}</p>
              </div>
            ))}
          </div>
          <Link
            to="/dashboard/prompts"
            className="mt-6 text-indigo-600 hover:text-indigo-700 text-sm font-medium inline-flex items-center gap-1"
          >
            View all prompts →
          </Link>
        </div>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              to="/dashboard/ai-visibility"
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg hover:from-indigo-100 hover:to-purple-100 transition-colors group"
            >
              <Search className="h-5 w-5 text-indigo-600" />
              <div>
                <p className="font-medium text-gray-900">Run New Scan</p>
                <p className="text-sm text-gray-600">Check your latest AI visibility</p>
              </div>
            </Link>
            <Link
              to="/dashboard/optimization"
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg hover:from-emerald-100 hover:to-blue-100 transition-colors group"
            >
              <Bot className="h-5 w-5 text-emerald-600" />
              <div>
                <p className="font-medium text-gray-900">Open Optimization Assistant</p>
                <p className="text-sm text-gray-600">Get AI-powered suggestions</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'mention' ? 'bg-emerald-500' :
                  activity.type === 'optimization' ? 'bg-blue-500' : 'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}