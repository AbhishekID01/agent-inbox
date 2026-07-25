import ConversationDetails from "../details/ConversationDetails";
import { type Conversation } from "../../types/conversation";

interface DetailsPanelProps {
  conversation: Conversation | null;
}

export default function DetailsPanel({ conversation }: DetailsPanelProps) {
  return (
    <aside className="flex-1 min-w-0 h-full bg-surface border-l border-slate-200 flex flex-col">
      {conversation ? (
        <ConversationDetails conversation={conversation} />
      ) : (
        <div className="flex-1 flex items-center justify-center text-txt-muted text-sm select-none">
          Loading workspace...
        </div>
      )}
    </aside>
  );
}
