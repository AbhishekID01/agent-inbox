import ConversationListHeader from "./ConversationListHeader";
import ConversationCard from "./ConversationCard";
import { type ConversationSummary } from "../../api/conversations";

interface ConversationListProps {
  conversations: ConversationSummary[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function ConversationList({
  conversations,
  selectedId,
  onSelect,
}: ConversationListProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header Container */}
      <ConversationListHeader />

      {/* Cards List Container */}
      <div className="flex-1 overflow-y-auto mt-6 pr-1 -mr-1">
        <ul className="space-y-3 pb-6" aria-label="Conversation list">
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              <ConversationCard
                customerName={conversation.customerName}
                issueSummary={conversation.issueSummary}
                waitingTime={conversation.waitingTime}
                priority={conversation.priority}
                categoryTag={conversation.categoryTag}
                aiTag={conversation.aiTag}
                isActive={conversation.id === selectedId}
                isUnread={conversation.isUnread}
                onSelect={() => onSelect(conversation.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

