import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Landing Page Components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// Auth Components
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';

// Dashboard Components
import DashboardLayout from './components/dashboard/DashboardLayout';
import DashboardHome from './components/dashboard/pages/DashboardHome';
import AIVisibilityPage from './components/dashboard/pages/AIVisibilityPage';
import OptimizationAssistant from './components/dashboard/pages/OptimizationAssistant';
import PromptTracker from './components/dashboard/pages/PromptTracker';
import KeywordFinder from './components/dashboard/pages/KeywordFinder';
import SettingsPage from './components/dashboard/pages/SettingsPage';

// Landing Page Component
function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/login" />;
}

// Public Route Component (redirect to dashboard if logged in)
function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }
  
  return user ? <Navigate to="/dashboard" /> : <>{children}</>;
}

// Placeholder components for missing pages
function ComingSoonPage({ title }: { title: string }) {
  return (
    <div className="p-6">
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">This feature is coming soon!</p>
        <div className="inline-flex items-center px-6 py-3 bg-indigo-50 rounded-full border border-indigo-200">
          <span className="text-indigo-800 font-medium">🚀 Under Development</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          } />
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />
          <Route path="/signup" element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          } />
          
          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardHome />} />
            <Route path="ai-visibility" element={<AIVisibilityPage />} />
            <Route path="optimization" element={<OptimizationAssistant />} />
            <Route path="prompts" element={<PromptTracker />} />
            <Route path="keywords" element={<KeywordFinder />} />
            <Route path="trends" element={<ComingSoonPage title="AI Trends" />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="exports" element={<ComingSoonPage title="Export Reports" />} />
            <Route path="labs" element={<ComingSoonPage title="Nova Labs" />} />
            <Route path="help" element={<ComingSoonPage title="Help & Documentation" />} />
          </Route>
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;