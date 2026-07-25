import { Search, ArrowUpDown } from "lucide-react";

interface WorkspaceToolbarProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  selectedPriority: string;
  onPriorityChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (val: string) => void;
  categories: string[];
  filteredCount: number;
  totalCount: number;
  sortKey: string;
  onSortChange: (val: string) => void;
}

export default function WorkspaceToolbar({
  searchTerm,
  onSearchChange,
  selectedPriority,
  onPriorityChange,
  selectedCategory,
  onCategoryChange,
  categories,
  filteredCount,
  totalCount,
  sortKey,
  onSortChange,
}: WorkspaceToolbarProps) {
  return (
    <div className="h-16 w-full bg-surface border-b border-slate-200 px-6 flex items-center justify-between flex-shrink-0">
      {/* Title & Count Badge */}
      <div className="flex items-center space-x-3.5">
        <h1 className="text-sm font-semibold text-txt-primary tracking-tight">
          Conversation Inbox
        </h1>
      </div>

      {/* Interactive Controls */}
      <div className="flex items-center space-x-3">
        {/* Search Container */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-txt-muted" />
          <input
            type="text"
            aria-label="Search conversations by customer name or issue summary"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 pr-3.5 py-1.5 text-xs w-48 bg-white border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 transition-all text-txt-primary placeholder:text-txt-muted hover:border-slate-300"
          />
        </div>

        {/* Priority Filter Dropdown */}
        <select
          aria-label="Filter by priority"
          value={selectedPriority}
          onChange={(e) => onPriorityChange(e.target.value)}
          className="px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 transition-all text-txt-secondary hover:border-slate-300 cursor-pointer"
        >
          <option value="All">All Priorities</option>
          <option value="critical">Critical</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        {/* Category Filter Dropdown */}
        <select
          aria-label="Filter by category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 transition-all text-txt-secondary hover:border-slate-300 cursor-pointer"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "All" ? "All Categories" : cat}
            </option>
          ))}
        </select>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-1.5 bg-white border border-slate-200 rounded-xl px-2.5 hover:border-slate-300 transition-all focus-within:ring-2 focus-within:ring-brand/20 focus-within:border-brand">
          <ArrowUpDown className="w-3.5 h-3.5 text-txt-muted" />
          <select
            aria-label="Sort conversations"
            value={sortKey}
            onChange={(e) => onSortChange(e.target.value)}
            className="py-1.5 text-xs bg-transparent border-0 focus-visible:outline-none text-txt-secondary cursor-pointer pr-1"
          >
            <option value="priority">Priority</option>
            <option value="waitingTime">Waiting Time</option>
            <option value="latestActivity">Latest Activity</option>
            <option value="aiConfidence">AI Confidence</option>
          </select>
        </div>
      </div>
    </div>
  );
}
