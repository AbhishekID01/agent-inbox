import { useState, useMemo } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";
import DetailsPanel from "./DetailsPanel";
import { STATIC_CONVERSATIONS } from "../../data/conversations";

export default function AppLayout() {
  const [selectedId, setSelectedId] = useState<string>("conv_1");

  const activeConversation = useMemo(() => {
    return (
      STATIC_CONVERSATIONS.find((c) => c.id === selectedId) ||
      STATIC_CONVERSATIONS[0]
    );
  }, [selectedId]);

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-page text-txt-primary">
      {/* Sidebar Panel */}
      <Sidebar />

      {/* Main View Area Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header Panel */}
        <Header />

        {/* Workspace Columns Layout (Middle + Right) */}
        <div className="flex-1 flex min-h-0 overflow-hidden">
          {/* Central Conversation/Queue Content Panel */}
          <MainContent selectedId={selectedId} onSelect={setSelectedId} />

          {/* Right-side Detail View Panel */}
          <DetailsPanel conversation={activeConversation} />
        </div>
      </div>
    </div>
  );
}
