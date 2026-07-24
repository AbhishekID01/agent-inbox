import ConversationDetails from "../details/ConversationDetails";

export default function DetailsPanel() {
  return (
    <aside className="flex-1 min-w-0 h-full bg-surface border-l border-slate-200 flex flex-col">
      <ConversationDetails />
    </aside>
  );
}
