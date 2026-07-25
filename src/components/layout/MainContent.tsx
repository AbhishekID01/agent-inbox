import { useState, useMemo } from "react";
import ConversationList from "../inbox/ConversationList";
import DetailsPanel from "./DetailsPanel";
import WorkspaceToolbar from "./WorkspaceToolbar";
import { type ConversationSummary } from "../../api/conversations";
import { type Conversation } from "../../types/conversation";

interface MainContentProps {
  conversations: ConversationSummary[];
  selectedId: string;
  onSelect: (id: string) => void;
  isLoadingList: boolean;
  listError: string | null;
  onRetryList: () => void;
  activeConversation: Conversation | null;
  isLoadingDetails: boolean;
  detailsError: string | null;
  onRetryDetails: () => void;
}

export default function MainContent({
  conversations,
  selectedId,
  onSelect,
  isLoadingList,
  listError,
  onRetryList,
  activeConversation,
  isLoadingDetails,
  detailsError,
  onRetryDetails,
}: MainContentProps) {
  // Client-side search and filtering states owned at workspace-level
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedPriority, setSelectedPriority] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortKey, setSortKey] = useState<string>("priority");

  // Dynamically compute the list of categories present in the current inbox
  const categories = useMemo(() => {
    const allCats = conversations.map((c) => c.categoryTag).filter(Boolean);
    return ["All", ...Array.from(new Set(allCats))];
  }, [conversations]);

  // Compute filtered count to display in the workspace toolbar
  const filteredCount = useMemo(() => {
    return conversations.filter((c) => {
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
    }).length;
  }, [conversations, searchTerm, selectedPriority, selectedCategory]);

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      {/* Workspace Toolbar spanning the full width */}
      <WorkspaceToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedPriority={selectedPriority}
        onPriorityChange={setSelectedPriority}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
        filteredCount={filteredCount}
        totalCount={conversations.length}
        sortKey={sortKey}
        onSortChange={setSortKey}
      />

      {/* Two-column layout immediately below the toolbar */}
      <div className="flex-1 flex min-h-0 overflow-hidden">
        {/* Left Column: Conversation Queue (MainContent scroll container) */}
        <main className="basis-[480px] min-w-[420px] max-w-[500px] flex-shrink-0 h-full bg-page overflow-hidden flex flex-col p-6 pt-4">
          <ConversationList
            conversations={conversations}
            selectedId={selectedId}
            onSelect={onSelect}
            isLoading={isLoadingList}
            error={listError}
            onRetry={onRetryList}
            searchTerm={searchTerm}
            selectedPriority={selectedPriority}
            selectedCategory={selectedCategory}
            sortKey={sortKey}
          />
        </main>

        {/* Right Column: Details Panel */}
        <DetailsPanel
          conversation={activeConversation}
          isLoading={isLoadingDetails}
          error={detailsError}
          onRetry={onRetryDetails}
        />
      </div>
    </div>
  );
}
