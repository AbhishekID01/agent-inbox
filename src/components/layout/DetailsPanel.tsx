import ConversationDetails from "../details/ConversationDetails";
import { type Conversation } from "../../types/conversation";
import { DetailsSkeleton } from "../ui/Skeleton";
import { AlertTriangle, Inbox } from "lucide-react";

interface DetailsPanelProps {
  conversation: Conversation | null;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

export default function DetailsPanel({
  conversation,
  isLoading,
  error,
  onRetry,
}: DetailsPanelProps) {
  return (
    <aside
      className="flex-1 min-w-0 h-full bg-surface border-l border-slate-200 flex flex-col"
      aria-busy={isLoading}
    >
      {isLoading ? (
        <DetailsSkeleton />
      ) : error ? (
        <div
          role="alert"
          className="flex-1 flex flex-col items-center justify-center text-center p-6 select-none"
        >
          <AlertTriangle className="w-10 h-10 text-red-500 mb-3" />
          <h3 className="text-base font-semibold text-txt-primary mb-1.5">
            Failed to load conversation
          </h3>
          <p className="text-sm text-txt-secondary mb-5 max-w-sm leading-relaxed">
            {error}
          </p>
          <button
            type="button"
            onClick={onRetry}
            disabled={isLoading}
            className="px-5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-txt-secondary hover:text-txt-primary rounded-xl text-sm font-semibold shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isLoading ? "Retrying..." : "Retry"}
          </button>
        </div>
      ) : conversation ? (
        <ConversationDetails conversation={conversation} />
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8 select-none">
          <Inbox className="w-12 h-12 text-txt-muted/80 stroke-[1.25] mb-4" />
          <h3 className="text-base font-semibold text-txt-primary mb-1">
            Select a conversation
          </h3>
          <p className="text-sm text-txt-secondary max-w-[280px] leading-relaxed">
            Choose a conversation from the inbox to view:
          </p>
          <ul className="text-sm text-txt-secondary mt-3 space-y-1 text-left list-disc list-inside">
            <li>AI Summary</li>
            <li>Conversation history</li>
            <li>Customer details</li>
            <li>Suggested actions</li>
          </ul>
        </div>
      )}
    </aside>
  );
}
