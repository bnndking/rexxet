import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Bot, MessageSquare, TrendingUp, Brain, Settings, FileText, FlaskRound as Flask, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Search, label: 'AI Visibility', path: '/dashboard/ai-visibility' },
  { icon: Bot, label: 'Optimization Assistant', path: '/dashboard/optimization' },
  { icon: MessageSquare, label: 'Prompt Tracker', path: '/dashboard/prompts' },
  { icon: TrendingUp, label: 'Keyword Finder', path: '/dashboard/keywords' },
  { icon: Brain, label: 'AI Trends', path: '/dashboard/trends' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

const secondaryItems = [
  { icon: FileText, label: 'Export Reports', path: '/dashboard/exports' },
  { icon: Flask, label: 'Labs', path: '/dashboard/labs' },
  { icon: HelpCircle, label: 'Help', path: '/dashboard/help' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex flex-col h-full`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-bold">
            Rexxet
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive(item.path) ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Secondary Navigation */}
        <div className="space-y-1">
          {secondaryItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              <item.icon className={`h-4 w-4 ${isActive(item.path) ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
              {!isCollapsed && (
                <span className="text-sm">{item.label}</span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Quick Action Button */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <Link
            to="/dashboard/ai-visibility"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm font-medium"
          >
            <Search className="h-4 w-4" />
            New Scan
          </Link>
        </div>
      )}
    </div>
  );
}