import { Sparkles, BarChart2, ShieldAlert, Smile } from "lucide-react";

interface AISummaryCardProps {
  aiSummary: string;
  aiConfidence: number;
  escalationReason: string;
}

export default function AISummaryCard({
  aiSummary,
  aiConfidence,
  escalationReason,
}: AISummaryCardProps) {
  // Analyze semantic sentiment from AI generated summary paragraphs
  const getSentiment = (summaryText: string) => {
    const text = summaryText.toLowerCase();
    if (text.includes("highly frustrated") || text.includes("frustrated")) {
      return {
        label: "Frustrated",
        color: "bg-red-50 text-red-700 border-red-200",
      };
    }
    if (text.includes("lockout") || text.includes("blocked")) {
      return {
        label: "Anxious",
        color: "bg-orange-50 text-orange-700 border-orange-200",
      };
    }
    if (text.includes("duplicate") || text.includes("refund")) {
      return {
        label: "Neutral",
        color: "bg-slate-50 text-slate-600 border-slate-200",
      };
    }
    if (
      text.includes("low confidence") ||
      text.includes("confidence rating")
    ) {
      return {
        label: "Confused",
        color: "bg-yellow-50 text-yellow-700 border-yellow-200",
      };
    }
    if (
      text.includes("telemetry failure") ||
      text.includes("webhook timeout")
    ) {
      return {
        label: "Urgent",
        color: "bg-red-50 text-red-700 border-red-200",
      };
    }
    if (text.includes("cancellation") || text.includes("contract")) {
      return {
        label: "Neutral",
        color: "bg-slate-50 text-slate-600 border-slate-200",
      };
    }
    if (text.includes("not arriving") || text.includes("reset")) {
      return {
        label: "Annoyed",
        color: "bg-yellow-50 text-yellow-700 border-yellow-200",
      };
    }
    if (text.includes("shipping delay") || text.includes("transit")) {
      return {
        label: "Patient",
        color: "bg-green-50 text-green-700 border-green-200",
      };
    }
    return {
      label: "Neutral",
      color: "bg-slate-50 text-slate-600 border-slate-200",
    };
  };

  const sentiment = getSentiment(aiSummary);

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col space-y-4">
      {/* Title Header */}
      <div className="flex items-center space-x-2">
        <div className="w-7 h-7 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold text-brand uppercase tracking-wider">
          AI Assistant Insight
        </span>
      </div>

      {/* AI Summary Text */}
      <div className="space-y-1">
        <h4 className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
          Summary
        </h4>
        <p className="text-sm text-txt-secondary leading-relaxed font-normal">
          {aiSummary}
        </p>
      </div>

      {/* Structured Sub-grid */}
      <div className="grid grid-cols-3 gap-4 pt-3.5 border-t border-slate-100 text-xs">
        {/* AI Confidence */}
        <div className="flex flex-col space-y-1">
          <span className="text-txt-muted font-medium flex items-center space-x-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-txt-muted" />
            <span>Confidence</span>
          </span>
          <div>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                aiConfidence >= 90
                  ? "bg-green-50 text-green-700 border-green-200"
                  : aiConfidence >= 70
                    ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                    : "bg-red-50 text-red-700 border-red-200"
              }`}
            >
              {aiConfidence}%
            </span>
          </div>
        </div>

        {/* Escalation Reason */}
        <div className="flex flex-col space-y-1">
          <span className="text-txt-muted font-medium flex items-center space-x-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-txt-muted" />
            <span>Escalation</span>
          </span>
          <span
            className="text-xs font-semibold text-txt-primary truncate"
            title={escalationReason}
          >
            {escalationReason}
          </span>
        </div>

        {/* Customer Sentiment */}
        <div className="flex flex-col space-y-1">
          <span className="text-txt-muted font-medium flex items-center space-x-1.5">
            <Smile className="w-3.5 h-3.5 text-txt-muted" />
            <span>Sentiment</span>
          </span>
          <div>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${sentiment.color}`}
            >
              {sentiment.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
