import ConversationList from "../inbox/ConversationList";
import { type ConversationSummary } from "../../api/conversations";

interface MainContentProps {
  conversations: ConversationSummary[];
  selectedId: string;
  onSelect: (id: string) => void;
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

export default function MainContent({
  conversations,
  selectedId,
  onSelect,
  isLoading,
  error,
  onRetry,
}: MainContentProps) {
  return (
    <main className="basis-[480px] min-w-[420px] max-w-[500px] flex-shrink-0 h-full bg-page overflow-hidden flex flex-col p-6">
      <ConversationList
        conversations={conversations}
        selectedId={selectedId}
        onSelect={onSelect}
        isLoading={isLoading}
        error={error}
        onRetry={onRetry}
      />
    </main>
  );
}

