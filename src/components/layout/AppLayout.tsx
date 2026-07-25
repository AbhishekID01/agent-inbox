import { useState, useEffect, useMemo } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";
import DetailsPanel from "./DetailsPanel";
import {
  fetchConversations,
  fetchConversationById,
  type ConversationSummary,
} from "../../api/conversations";
import { type Conversation } from "../../types/conversation";

export default function AppLayout() {
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [conversationsDetails, setConversationsDetails] = useState<
    Conversation[]
  >([]);

  // Local state for future UI feedback loading/error blocks, initialized to true
  const [, setIsLoadingList] = useState<boolean>(true);
  const [, setListError] = useState<string | null>(null);
  const [, setIsLoadingDetails] = useState<boolean>(true);
  const [, setDetailsError] = useState<string | null>(null);

  // Derive the active conversation from the list of fully fetched details
  const activeConversation = useMemo(() => {
    return conversationsDetails.find((c) => c.id === selectedId) || null;
  }, [selectedId, conversationsDetails]);

  // Click handler wrapper to set loading state before details fetch begins
  const handleSelect = (id: string) => {
    setSelectedId(id);
    if (!conversationsDetails.some((c) => c.id === id)) {
      setIsLoadingDetails(true);
    } else {
      setIsLoadingDetails(false);
    }
  };

  // Effect: Fetch list summaries on component mount
  useEffect(() => {
    const controller = new AbortController();

    fetchConversations(controller.signal)
      .then((data) => {
        setConversations(data);
        if (data.length > 0) {
          setSelectedId(data[0].id);
        }
        setIsLoadingList(false);
        setListError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setListError(err.message || "Failed to load conversation summaries.");
        setIsLoadingList(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  // Effect: Fetch full conversation details when active conversation changes
  useEffect(() => {
    if (!selectedId) return;

    // Skip network request if already cached in client state
    if (conversationsDetails.some((c) => c.id === selectedId)) {
      return;
    }

    const controller = new AbortController();

    fetchConversationById(selectedId, controller.signal)
      .then((data) => {
        setConversationsDetails((prev) => [...prev, data]);
        setIsLoadingDetails(false);
        setDetailsError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setDetailsError(err.message || "Failed to load conversation details.");
        setIsLoadingDetails(false);
      });

    return () => {
      controller.abort();
    };
  }, [selectedId, conversationsDetails]);

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
          <MainContent
            conversations={conversations}
            selectedId={selectedId}
            onSelect={handleSelect}
          />

          {/* Right-side Detail View Panel */}
          <DetailsPanel conversation={activeConversation} />
        </div>
      </div>
    </div>
  );
}
