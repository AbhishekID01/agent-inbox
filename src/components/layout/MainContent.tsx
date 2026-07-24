import ConversationList from "../inbox/ConversationList";

export default function MainContent() {
  return (
    <main className="basis-[480px] min-w-[420px] max-w-[500px] flex-shrink-0 h-full bg-page overflow-hidden flex flex-col p-6">
      <ConversationList />
    </main>
  );
}

