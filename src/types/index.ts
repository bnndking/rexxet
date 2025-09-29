export interface User {
  id: string;
  email: string;
  full_name: string;
  business_name?: string;
  domain?: string;
  industry?: string;
  subscription_status: 'active' | 'inactive' | 'trial';
  created_at: string;
}

export interface ScanResult {
  id: string;
  domain: string;
  ai_mentions: {
    chatgpt: number;
    claude: number;
    gemini: number;
  };
  google_presence: {
    average_position: number;
    page_one_rankings: number;
    total_keywords: number;
  };
  gaps: string[];
  opportunities: string[];
  scan_date: string;
  visibility_score: number;
}

export interface OptimizationSuggestion {
  id: string;
  section: string;
  status: 'good' | 'needs_improvement' | 'missing';
  suggestion: string;
  priority: 'high' | 'medium' | 'low';
}

export interface PromptMention {
  id: string;
  prompt_text: string;
  ai_model: 'chatgpt' | 'claude' | 'gemini';
  mention_type: 'direct' | 'indirect' | 'not_mentioned';
  date_seen: string;
  domain: string;
}

export interface KeywordOpportunity {
  keyword: string;
  volume: number;
  difficulty: number;
  ai_mention_probability: number;
  current_ranking?: number;
}