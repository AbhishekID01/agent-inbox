import ConversationList from "../inbox/ConversationList";

interface MainContentProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function MainContent({
  selectedId,
  onSelect,
}: MainContentProps) {
  return (
    <main className="basis-[480px] min-w-[420px] max-w-[500px] flex-shrink-0 h-full bg-page overflow-hidden flex flex-col p-6">
      <ConversationList selectedId={selectedId} onSelect={onSelect} />
    </main>
  );
}

