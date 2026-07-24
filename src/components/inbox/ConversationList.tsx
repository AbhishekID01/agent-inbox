import ConversationListHeader from "./ConversationListHeader";
import ConversationCard, { type ConversationCardProps } from "./ConversationCard";

interface StaticConversation extends ConversationCardProps {
  id: string;
}

const STATIC_CONVERSATIONS: StaticConversation[] = [
  {
    id: "conv_1",
    customerName: "Marcus Vance",
    issueSummary:
      "Checkout error: Payment failed repeatedly during enterprise subscription renewal upgrade.",
    waitingTime: "4m ago",
    priority: "critical",
    categoryTag: "Billing",
    aiTag: "AI Escalated",
    isActive: true,
    isUnread: true,
  },
  {
    id: "conv_2",
    customerName: "Clara Zhang",
    issueSummary:
      "Account lockout: Customer blocked from console after multiple failed login attempts.",
    waitingTime: "12m ago",
    priority: "high",
    categoryTag: "Access",
    aiTag: "Needs Human",
    isUnread: true,
  },
  {
    id: "conv_3",
    customerName: "David K.",
    issueSummary:
      "Duplicate charge: Refund request for accidental double invoicing on annual license renewal.",
    waitingTime: "24m ago",
    priority: "high",
    categoryTag: "Billing",
    aiTag: "AI Escalated",
  },
  {
    id: "conv_4",
    customerName: "Jordan Miller",
    issueSummary:
      "AI confidence too low: Chatbot confidence rating fell below threshold during router configuration.",
    waitingTime: "45m ago",
    priority: "medium",
    categoryTag: "System",
    aiTag: "Low AI Confidence",
    isUnread: true,
  },
  {
    id: "conv_5",
    customerName: "Amina Al-Jamil",
    issueSummary:
      "Telemetry failure: Telemetry webhook timeout error warnings during bulk database migration.",
    waitingTime: "1h ago",
    priority: "critical",
    categoryTag: "Technical",
    aiTag: "AI Escalated",
  },
  {
    id: "conv_6",
    customerName: "Emily Watson",
    issueSummary:
      "Subscription cancellation request: Enterprise client inquiring about contract end date details.",
    waitingTime: "2h ago",
    priority: "high",
    categoryTag: "Retention",
    aiTag: "Needs Human",
  },
  {
    id: "conv_7",
    customerName: "Rajesh Patel",
    issueSummary:
      "MIA Code: Password reset verification email not arriving for primary administrator account.",
    waitingTime: "3h ago",
    priority: "medium",
    categoryTag: "Support",
    aiTag: "Low AI Confidence",
  },
  {
    id: "conv_8",
    customerName: "Taylor Reid",
    issueSummary:
      "Shipping delay: Inquiring on custom rack server hardware dispatch transit tracking info.",
    waitingTime: "5h ago",
    priority: "low",
    categoryTag: "Shipping",
    aiTag: "Needs Human",
  },
];

export default function ConversationList() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header Container */}
      <ConversationListHeader />

      {/* Cards List Container */}
      <div className="flex-1 overflow-y-auto mt-6 pr-1 -mr-1">
        <ul className="space-y-3 pb-6" aria-label="Conversation list">
          {STATIC_CONVERSATIONS.map((conversation) => (
            <li key={conversation.id}>
              <ConversationCard
                customerName={conversation.customerName}
                issueSummary={conversation.issueSummary}
                waitingTime={conversation.waitingTime}
                priority={conversation.priority}
                categoryTag={conversation.categoryTag}
                aiTag={conversation.aiTag}
                isActive={conversation.isActive}
                isUnread={conversation.isUnread}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
