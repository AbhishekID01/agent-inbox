import { Clock, ShieldAlert } from "lucide-react";

interface DetailsHeaderProps {
  customerName: string;
  categoryTag: string;
  priority: "critical" | "high" | "medium" | "low";
  waitingTime: string;
}

export default function DetailsHeader({
  customerName,
  categoryTag,
  priority,
  waitingTime,
}: DetailsHeaderProps) {
  const priorityStyles = {
    critical: "bg-red-50 text-red-700 border-red-200/60",
    high: "bg-orange-50 text-orange-700 border-orange-200/60",
    medium: "bg-yellow-50/50 text-yellow-700 border-yellow-200/60",
    low: "bg-green-50 text-green-700 border-green-200/60",
  };

  const priorityLabel = priority.charAt(0).toUpperCase() + priority.slice(1);

  return (
    <div className="pb-5 border-b border-slate-200 flex-shrink-0">
      <div className="flex items-center justify-between">
        {/* Customer Name */}
        <h1 className="text-xl font-bold text-txt-primary tracking-tight">
          {customerName}
        </h1>
        {/* Waiting Time */}
        <div className="flex items-center space-x-1.5 text-txt-muted text-xs font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>{waitingTime} waiting</span>
        </div>
      </div>

      {/* Badges Row */}
      <div className="flex items-center space-x-2 mt-3">
        {/* Category Tag */}
        <span className="text-xs px-2.5 py-0.5 rounded-full font-medium border border-slate-200/60 bg-slate-50 text-txt-secondary">
          {categoryTag}
        </span>

        {/* Priority Badge */}
        <span
          className={`text-xs px-2.5 py-0.5 rounded-full font-medium border flex items-center space-x-1 ${priorityStyles[priority]}`}
        >
          {priority === "critical" && (
            <ShieldAlert className="w-3 h-3 flex-shrink-0" />
          )}
          <span>{priorityLabel}</span>
        </span>
      </div>
    </div>
  );
}
