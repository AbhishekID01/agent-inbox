import { Check } from "lucide-react";

interface SuggestedActionsCardProps {
  suggestedActions: string[];
}

export default function SuggestedActionsCard({
  suggestedActions,
}: SuggestedActionsCardProps) {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col space-y-3.5">
      {/* Title Header */}
      <div>
        <h3 className="text-xs font-bold text-txt-muted uppercase tracking-wider">
          Suggested Actions
        </h3>
      </div>

      {/* Checklist List */}
      <ul className="space-y-2.5">
        {suggestedActions.map((action, idx) => (
          <li
            key={idx}
            className="flex items-start space-x-3 text-sm text-txt-secondary leading-relaxed select-none"
          >
            <div className="w-4.5 h-4.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200/50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3" />
            </div>
            <span>{action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
