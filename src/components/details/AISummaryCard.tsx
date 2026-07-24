import { Sparkles, BarChart2, ShieldAlert } from "lucide-react";

export default function AISummaryCard() {
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
      <p className="text-sm text-txt-secondary leading-relaxed font-normal">
        Customer is trying to upgrade their subscription from Growth to Enterprise. The payment fails repeatedly at checkout with error code ERR_PAYMENT_FAILED. Customer is highly frustrated due to upcoming project launch.
      </p>

      {/* Sub-grid with Confidence and Escalation details */}
      <div className="grid grid-cols-2 gap-4 pt-3.5 border-t border-slate-100 text-xs">
        {/* AI Confidence */}
        <div className="flex flex-col space-y-1">
          <span className="text-txt-muted font-medium flex items-center space-x-1.5">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>AI Confidence</span>
          </span>
          <span className="text-sm font-semibold text-txt-primary">
            94% (High)
          </span>
        </div>

        {/* Escalation Reason */}
        <div className="flex flex-col space-y-1">
          <span className="text-txt-muted font-medium flex items-center space-x-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Escalation Reason</span>
          </span>
          <span className="text-sm font-semibold text-txt-primary truncate">
            Gateway Timeout / Checkout Loop
          </span>
        </div>
      </div>
    </div>
  );
}
