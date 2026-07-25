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

      {/* Ordered List */}
      <ul className="space-y-3.5">
        {suggestedActions.map((action, idx) => {
          const isPrimary = idx === 0;
          return (
            <li
              key={idx}
              className="flex items-start space-x-3 text-sm text-txt-secondary leading-relaxed select-none"
            >
              {/* Index Number Badge */}
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 border ${
                  isPrimary
                    ? "bg-brand/15 text-brand border-brand/25"
                    : "bg-slate-50 text-txt-secondary border-slate-200/50"
                }`}
              >
                {idx + 1}
              </div>

              {/* Action content block */}
              {isPrimary ? (
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center">
                    <span className="text-[9px] font-bold text-brand bg-brand/10 border border-brand/20 px-1.5 py-0.5 rounded uppercase tracking-wider">
                      Primary Action
                    </span>
                  </div>
                  <span className="font-semibold text-txt-primary">{action}</span>
                </div>
              ) : (
                <span className="text-txt-secondary mt-0.5">{action}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
