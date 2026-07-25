export interface ConversationCardProps {
  id: string;
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
  id,
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
  // Parse time helper: converts "4m ago" or "2h ago" into numeric minutes
  const parseTimeToMinutes = (timeStr: string): number => {
    if (!timeStr) return 0;
    const match = timeStr.match(/^(\d+)(m|h)/);
    if (!match) return 0;
    const val = parseInt(match[1], 10);
    const unit = match[2];
    if (unit === "h") return val * 60;
    return val;
  };

  // Timer formatter: "4m ago" -> "⏱ Waiting 4 min"
  const formatWaitingTime = (timeStr: string): string => {
    const clean = timeStr.replace(" ago", "");
    if (clean.endsWith("m")) return `⏱ Waiting ${clean.slice(0, -1)} min`;
    if (clean.endsWith("h")) return `⏱ Waiting ${clean.slice(0, -1)} hr`;
    return `⏱ Waiting ${clean}`;
  };


  // Priority styling classes mapping (Critical solid-filled vs others soft-filled)
  const priorityStyles = {
    critical: "bg-red-50 text-red-700 border-red-200 ",
    high: "bg-orange-50 text-orange-700 border-orange-200",
    medium: "bg-yellow-50/50 text-yellow-700 border-yellow-200",
    low: "bg-green-50 text-green-700 border-green-200",
  };

  const priorityLabel = priority.charAt(0).toUpperCase() + priority.slice(1);

  // Evaluate wait time thresholds for indicator coloring
  const waitMins = parseTimeToMinutes(waitingTime);
  let waitStyle = "border-slate-200/60 bg-slate-50 text-slate-600";
  if (waitMins >= 15 && waitMins < 60) {
    waitStyle = "border-amber-200/60 bg-amber-50 text-amber-700";
  } else if (waitMins >= 60) {
    waitStyle = "border-red-200/60 bg-red-50/70 text-red-700";
  }

  // Critical items waiting longer than 10 mins receive high contrast alert style
  const isUrgentCritical = priority === "critical" && waitMins > 10;
  if (isUrgentCritical) {
    waitStyle = "border-red-200 bg-red-50 text-red-700";
  }

  // Card root border and elevation state styles
  let cardStyle =
    "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-[2px]";
  if (priority === "critical") {
    cardStyle =
      "border-red-100/80 bg-red-50/[0.01]  hover:border-red-200 hover:shadow-md hover:-translate-y-[2px]";
  }

  if (isActive) {
    if (priority === "critical") {
      cardStyle =
        "border-red-400 bg-red-50/10  shadow-md before:absolute before:left-0 before:top-0 before:bottom-0 ";
    } else {
      cardStyle =
        "border-brand bg-blue-50/[0.04]  before:absolute before:left-0 before:top-0 before:bottom-0 ";
    }
  }

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
      className={`relative p-4 rounded-2xl border transition-all duration-200 select-none cursor-pointer flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${cardStyle}`}
    >
      {/* Top Row: Customer Info & Attention Score */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center space-x-1.5 min-w-0">
          {isUnread && (
            <span
              className="w-2 h-2 rounded-full bg-brand flex-shrink-0"
              aria-label="Unread conversation"
              title="Unread"
            />
          )}
          <span className="text-sm font-semibold text-txt-primary truncate">
            {customerName}
          </span>
        </div>
      </div>

      {/* Middle Row: Content Summary */}
      <div className="text-xs text-txt-secondary line-clamp-2 mb-3 leading-relaxed">
        {issueSummary}
      </div>

      {/* Bottom Row: Metadata Badges */}
      <div className="flex flex-wrap gap-1.5 items-center">
        {/* Priority Badge */}
        <span
          className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium border ${priorityStyles[priority]}`}
        >
          {priorityLabel}
        </span>

        {/* Category Tag */}
        <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium border border-slate-200/60 bg-slate-50 text-txt-secondary">
          {categoryTag}
        </span>

        {/* AI Tag */}
        <span className="text-[10px] px-2.5 py-0.5 rounded-full font-medium border border-blue-100 bg-blue-50/50 text-brand">
          {aiTag}
        </span>

        {/* Waiting Time Badge */}
        <span
          className={`text-[10px] px-2.5 py-0.5 rounded-full font-medium border ${waitStyle}`}
        >
          {formatWaitingTime(waitingTime)}
        </span>
      </div>
    </article>
  );
}
