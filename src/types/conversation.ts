export interface Message {
  timestamp: string;
  sender: string;
  role: string;
  message: string;
  isAI: boolean;
}

export interface CustomerInfo {
  email: string;
  company: string;
  subscriptionPlan: string;
  customerSince: string;
}

export interface ConversationMetadata {
  channel: string;
  language: string;
  assignedTo: string;
  lastActivity: string;
}

export interface Conversation {
  id: string;
  customerName: string;
  issueSummary: string;
  waitingTime: string;
  priority: "critical" | "high" | "medium" | "low";
  categoryTag: string;
  aiTag: string;
  isUnread?: boolean;
  aiSummary: string;
  aiConfidence: number;
  escalationReason: string;
  suggestedActions: string[];
  customerInfo: CustomerInfo;
  metadata: ConversationMetadata;
  timeline: Message[];
}
