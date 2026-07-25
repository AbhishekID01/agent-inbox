import { useState, useEffect, useMemo } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
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

  // State flags for list loading & error responses
  const [isLoadingList, setIsLoadingList] = useState<boolean>(true);
  const [listError, setListError] = useState<string | null>(null);

  // State flags for details loading & error responses
  const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);

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

  // Click handler for retrying conversation summaries fetch
  const handleRetryList = () => {
    setIsLoadingList(true);
    setListError(null);

    fetchConversations()
      .then((data) => {
        setConversations(data);
        if (data.length > 0) {
          setSelectedId(data[0].id);
          setIsLoadingDetails(true);
        } else {
          setSelectedId("");
          setIsLoadingDetails(false);
        }
        setIsLoadingList(false);
        setListError(null);
      })
      .catch((err) => {
        setListError(err.message || "Failed to load conversation summaries.");
        setIsLoadingList(false);
      });
  };

  // Click handler for retrying conversation details fetch
  const handleRetryDetails = () => {
    if (!selectedId) return;
    setIsLoadingDetails(true);
    setDetailsError(null);

    fetchConversationById(selectedId)
      .then((data) => {
        setConversationsDetails((prev) => {
          const filtered = prev.filter((c) => c.id !== selectedId);
          return [...filtered, data];
        });
        setIsLoadingDetails(false);
        setDetailsError(null);
      })
      .catch((err) => {
        setDetailsError(err.message || "Failed to load conversation details.");
        setIsLoadingDetails(false);
      });
  };

  // Effect: Fetch list summaries on component mount
  useEffect(() => {
    const controller = new AbortController();

    fetchConversations(controller.signal)
      .then((data) => {
        setConversations(data);
        if (data.length > 0) {
          setSelectedId(data[0].id);
          setIsLoadingDetails(true);
        } else {
          setSelectedId("");
          setIsLoadingDetails(false);
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
        setConversationsDetails((prev) => {
          const filtered = prev.filter((c) => c.id !== selectedId);
          return [...filtered, data];
        });
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
        {/* Central Workspace Content Panel containing Toolbar & Columns */}
        <MainContent
          conversations={conversations}
          selectedId={selectedId}
          onSelect={handleSelect}
          isLoadingList={isLoadingList}
          listError={listError}
          onRetryList={handleRetryList}
          activeConversation={activeConversation}
          isLoadingDetails={isLoadingDetails}
          detailsError={detailsError}
          onRetryDetails={handleRetryDetails}
        />
      </div>
    </div>
  );
}
