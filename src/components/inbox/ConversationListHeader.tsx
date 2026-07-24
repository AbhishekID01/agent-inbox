import { Search, SlidersHorizontal } from "lucide-react";

export default function ConversationListHeader() {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between pb-6 border-b border-slate-200 flex-shrink-0">
      <div>
        <h1 className="text-xl font-semibold text-txt-primary">
          Conversation Inbox
        </h1>
      </div>
      <div className="flex items-center space-x-3">
        {/* Search Input Container */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-txt-muted" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="pl-10 pr-4 py-2 text-sm w-48 bg-white border border-slate-200 rounded-xl focus-visible:outline-none focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20 transition-all text-txt-primary placeholder:text-txt-muted"
            readOnly
          />
        </div>
        {/* Filter Button */}
        <button
          type="button"
          className="flex items-center space-x-2 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-txt-secondary hover:text-txt-primary rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
}
