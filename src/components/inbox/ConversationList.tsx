import { useMemo } from "react";
import ConversationCard from "./ConversationCard";
import { type ConversationSummary } from "../../api/conversations";
import { CardSkeleton } from "../ui/Skeleton";
import { AlertTriangle, Inbox, Search } from "lucide-react";
import { STATIC_CONVERSATIONS } from "../../data/conversations";

interface ConversationListProps {
  conversations: ConversationSummary[];
  selectedId: string;
  onSelect: (id: string) => void;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  searchTerm: string;
  selectedPriority: string;
  selectedCategory: string;
  sortKey: string;
}

export default function ConversationList({
  conversations,
  selectedId,
  onSelect,
  isLoading,
  error,
  onRetry,
  searchTerm,
  selectedPriority,
  selectedCategory,
  sortKey,
}: ConversationListProps) {
  // Memoized client-side filtering and sorting list based on inputs
  const filteredConversations = useMemo(() => {
    const priorityOrder: Record<string, number> = {
      critical: 0,
      high: 1,
      medium: 2,
      low: 3,
    };

    const parseTimeToMinutes = (timeStr: string): number => {
      if (!timeStr) return 0;
      const match = timeStr.match(/^(\d+)(m|h)/);
      if (!match) return 0;
      const val = parseInt(match[1], 10);
      const unit = match[2];
      if (unit === "h") return val * 60;
      return val;
    };

    const filtered = conversations.filter((c) => {
      const matchesSearch =
        !searchTerm ||
        c.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.issueSummary.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPriority =
        selectedPriority === "All" ||
        c.priority?.toLowerCase() === selectedPriority.toLowerCase();

      const matchesCategory =
        selectedCategory === "All" ||
        c.categoryTag === selectedCategory;

      return matchesSearch && matchesPriority && matchesCategory;
    });

    // Sort operations
    return [...filtered].sort((a, b) => {
      const fullA = STATIC_CONVERSATIONS.find((item) => item.id === a.id);
      const fullB = STATIC_CONVERSATIONS.find((item) => item.id === b.id);

      if (sortKey === "priority") {
        const orderA = priorityOrder[a.priority?.toLowerCase() || ""] ?? 99;
        const orderB = priorityOrder[b.priority?.toLowerCase() || ""] ?? 99;
        return orderA - orderB;
      }

      if (sortKey === "waitingTime") {
        const minA = parseTimeToMinutes(a.waitingTime);
        const minB = parseTimeToMinutes(b.waitingTime);
        return minB - minA; // Longest waiting first
      }

      if (sortKey === "latestActivity") {
        const minA = parseTimeToMinutes(fullA?.metadata.lastActivity || "");
        const minB = parseTimeToMinutes(fullB?.metadata.lastActivity || "");
        return minA - minB; // Newest activity first (smallest minutes ago)
      }

      if (sortKey === "aiConfidence") {
        const confA = fullA?.aiConfidence ?? 0;
        const confB = fullB?.aiConfidence ?? 0;
        return confA - confB; // Lowest confidence first
      }

      return 0;
    });
  }, [conversations, searchTerm, selectedPriority, selectedCategory, sortKey]);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Cards List Container */}
      <div
        className="flex-1 overflow-y-auto pr-1 -mr-1"
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
        ) : filteredConversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-50 border border-slate-200/60 rounded-2xl my-4 select-none">
            <Search className="w-8 h-8 text-txt-muted mb-3" />
            <h3 className="text-sm font-semibold text-txt-primary mb-1">
              No matching conversations
            </h3>
            <p className="text-xs text-txt-secondary max-w-[240px] leading-relaxed">
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <ul className="space-y-3 pb-6" aria-label="Conversation list">
            {filteredConversations.map((conversation) => (
              <li key={conversation.id}>
                <ConversationCard
                  id={conversation.id}
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

