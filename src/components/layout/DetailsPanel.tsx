import { MessageSquare } from "lucide-react";

export default function DetailsPanel() {
  return (
    <aside className="flex-1 min-w-0 h-full bg-surface border-l border-slate-200 flex flex-col">
      {/* Details Header Container */}
      <div className="h-16 border-b border-slate-200/80 px-6 flex items-center flex-shrink-0" />

      {/* Main Details Body Container - Empty State */}
      <div className="flex-1 p-6 overflow-y-auto flex flex-col items-center justify-center text-center">
        <div className="max-w-md flex flex-col items-center select-none">
          {/* Minimal Icon Container */}
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
            <MessageSquare className="w-5 h-5 text-txt-muted" />
          </div>
          {/* Title */}
          <h2 className="text-base font-semibold text-txt-primary mb-1">
            Select a conversation
          </h2>
          {/* Description */}
          <p className="text-sm text-txt-secondary mb-4">
            Choose a conversation from the inbox to view:
          </p>
          {/* Features Bullet List */}
          <ul className="text-xs text-txt-secondary space-y-2 text-left bg-slate-50 border border-slate-100 p-4 rounded-xl w-60">
            <li className="flex items-center space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand/60 flex-shrink-0" />
              <span>AI Summary</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand/60 flex-shrink-0" />
              <span>Conversation history</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand/60 flex-shrink-0" />
              <span>Customer details</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand/60 flex-shrink-0" />
              <span>Suggested actions</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Actions Footer Container */}
      <div className="p-4 border-t border-slate-200/80 flex-shrink-0" />
    </aside>
  );
}
