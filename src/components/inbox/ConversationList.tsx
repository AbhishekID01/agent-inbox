import ConversationListHeader from "./ConversationListHeader";
import ConversationCard from "./ConversationCard";
import { type ConversationSummary } from "../../api/conversations";
import { CardSkeleton } from "../ui/Skeleton";
import { AlertTriangle, Inbox } from "lucide-react";

interface ConversationListProps {
  conversations: ConversationSummary[];
  selectedId: string;
  onSelect: (id: string) => void;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

export default function ConversationList({
  conversations,
  selectedId,
  onSelect,
  isLoading,
  error,
  onRetry,
}: ConversationListProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header Container */}
      <ConversationListHeader />

      {/* Cards List Container */}
      <div
        className="flex-1 overflow-y-auto mt-6 pr-1 -mr-1"
        aria-busy={isLoading}
      >
        {isLoading && conversations.length === 0 ? (
          <ul className="space-y-3 pb-6" aria-hidden="true">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </ul>
        ) : error ? (
          <div
            role="alert"
            className="flex flex-col items-center justify-center text-center p-6 bg-slate-50 border border-slate-200/60 rounded-2xl my-4 select-none"
          >
            <AlertTriangle className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="text-sm font-semibold text-txt-primary mb-1">
              Failed to load queue
            </h3>
            <p className="text-xs text-txt-secondary mb-4 max-w-[240px] leading-relaxed">
              {error}
            </p>
            <button
              type="button"
              onClick={onRetry}
              disabled={isLoading}
              className="px-4 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-txt-secondary hover:text-txt-primary rounded-lg text-xs font-semibold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "Retrying..." : "Retry"}
            </button>
          </div>
        ) : conversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-50 border border-slate-200/60 rounded-2xl my-4 select-none">
            <Inbox className="w-8 h-8 text-txt-muted mb-3" />
            <h3 className="text-sm font-semibold text-txt-primary mb-1">
              Queue is empty
            </h3>
            <p className="text-xs text-txt-secondary max-w-[240px] leading-relaxed">
              No conversations escalated for review today.
            </p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

