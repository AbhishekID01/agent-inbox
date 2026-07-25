export interface ConversationCardProps {
  customerName: string;
  issueSummary: string;
  waitingTime: string;
  priority: "critical" | "high" | "medium" | "low";
  categoryTag: string;
  aiTag: string;
  isActive?: boolean;
  isUnread?: boolean;
  onSelect?: () => void;
}

export default function ConversationCard({
  customerName,
  issueSummary,
  waitingTime,
  priority,
  categoryTag,
  aiTag,
  isActive = false,
  isUnread = false,
  onSelect,
}: ConversationCardProps) {
  // Priority styling classes mapping
  const priorityStyles = {
    critical: "bg-red-50 text-red-700 border-red-200/60",
    high: "bg-orange-50 text-orange-700 border-orange-200/60",
    medium: "bg-yellow-50/50 text-yellow-700 border-yellow-200/60",
    low: "bg-green-50 text-green-700 border-green-200/60",
  };

  const priorityLabel = priority.charAt(0).toUpperCase() + priority.slice(1);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.();
    }
  };

  return (
    <article
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      aria-selected={isActive}
      className={`relative p-4 rounded-2xl border transition-all duration-200 select-none cursor-pointer flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${
        isActive
          ? "border-brand bg-brand/[0.02] ring-1 ring-brand"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
      }`}
    >
      {/* Unread Indicator Dot */}
      {isUnread && (
        <span
          className="absolute top-4.5 left-2 w-2 h-2 rounded-full bg-brand"
          aria-label="Unread conversation"
          title="Unread"
        />
      )}

      {/* Top Row: Customer Info & Timestamp */}
      <div className="flex items-center justify-between mb-1.5 pl-2.5">
        <span className="text-sm font-semibold text-txt-primary">
          {customerName}
        </span>
        <span className="text-xs text-txt-muted font-medium">
          {waitingTime}
        </span>
      </div>

      {/* Middle Row: Content Summary */}
      <div className="text-sm text-txt-secondary line-clamp-2 mb-3.5 pl-2.5 leading-relaxed">
        {issueSummary}
      </div>

      {/* Bottom Row: Metadata Badges */}
      <div className="flex flex-wrap gap-2 pl-2.5">
        {/* Priority Badge */}
        <span
          className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium border ${priorityStyles[priority]}`}
        >
          {priorityLabel}
        </span>

        {/* Category Tag */}
        <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium border border-slate-200/60 bg-slate-50 text-txt-secondary">
          {categoryTag}
        </span>

        {/* AI Tag */}
        <span className="text-[11px] px-2.5 py-0.5 rounded-full font-medium border border-blue-100 bg-blue-50/50 text-brand">
          {aiTag}
        </span>
      </div>
    </article>
  );
}
