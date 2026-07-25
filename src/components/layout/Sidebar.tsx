import {
  Inbox,
  User,
  AlertCircle,
  Clock,
  CheckCircle2,
  Flame,
  ArrowUpCircle,
  Bot,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-sidebar border-r border-slate-200 flex flex-col flex-shrink-0 select-none">
      {/* Product Header */}
      <div className="h-16 border-b border-slate-200/80 px-6 flex items-center flex-shrink-0">
        <div className="flex items-center space-x-2.5">
          <div className="w-6 h-6 rounded-lg bg-brand flex items-center justify-center text-white">
            <Inbox className="w-3.5 h-3.5" />
          </div>
          <span className="text-md font-semibold text-txt-primary tracking-tight">
            Agent Inbox
          </span>
        </div>
      </div>

      {/* Navigation Links Area */}
      <div className="flex-1 px-3 py-4 overflow-y-auto flex flex-col justify-between">
        <div className="space-y-6">
          {/* Primary Navigation */}
          <nav aria-label="Primary navigation">
            <ul className="space-y-1">
              {/* Inbox (Active) */}
              <li>
                <a
                  href="#inbox"
                  aria-current="page"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-white/80 text-txt-primary shadow-xs border border-slate-200/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <div className="flex items-center space-x-2.5">
                    <Inbox className="w-4 h-4 text-brand" />
                    <span>Inbox</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200/50 text-txt-secondary min-w-[22px] text-center">
                    12
                  </span>
                </a>
              </li>

              {/* Assigned to Me */}
              <li>
                <a
                  href="#assigned"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-txt-secondary hover:text-txt-primary hover:bg-slate-200/60 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <div className="flex items-center space-x-2.5">
                    <User className="w-4 h-4 text-txt-muted" />
                    <span>Assigned to Me</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200/40 text-txt-muted min-w-[22px] text-center">
                    4
                  </span>
                </a>
              </li>

              {/* Escalated */}
              <li>
                <a
                  href="#escalated"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-txt-secondary hover:text-txt-primary hover:bg-slate-200/60 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <div className="flex items-center space-x-2.5">
                    <AlertCircle className="w-4 h-4 text-txt-muted" />
                    <span>Escalated</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200/50 min-w-[22px] text-center">
                    3
                  </span>
                </a>
              </li>

              {/* Waiting */}
              <li>
                <a
                  href="#waiting"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-txt-secondary hover:text-txt-primary hover:bg-slate-200/60 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-4 h-4 text-txt-muted" />
                    <span>Waiting</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/50 min-w-[22px] text-center">
                    5
                  </span>
                </a>
              </li>

              {/* Resolved Today */}
              <li>
                <a
                  href="#resolved"
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-txt-secondary hover:text-txt-primary hover:bg-slate-200/60 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-txt-muted" />
                    <span>Resolved Today</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/50 min-w-[22px] text-center">
                    24
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Saved Views */}
          <div>
            <div className="px-3 mb-1.5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-txt-muted uppercase tracking-wider">
                Saved Views
              </span>
            </div>
            <nav aria-label="Saved views">
              <ul className="space-y-1">
                {/* High Priority */}
                <li>
                  <a
                    href="#view-high"
                    className="flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors text-txt-secondary hover:text-txt-primary hover:bg-slate-200/60 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                  >
                    <Flame className="w-4 h-4 mr-2.5 text-txt-muted" />
                    <span>High Priority</span>
                  </a>
                </li>

                {/* Customer Escalations */}
                <li>
                  <a
                    href="#view-escalations"
                    className="flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors text-txt-secondary hover:text-txt-primary hover:bg-slate-200/60 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                  >
                    <ArrowUpCircle className="w-4 h-4 mr-2.5 text-txt-muted" />
                    <span>Customer Escalations</span>
                  </a>
                </li>

                {/* AI Needs Review */}
                <li>
                  <a
                    href="#view-ai-review"
                    className="flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors text-txt-secondary hover:text-txt-primary hover:bg-slate-200/60 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                  >
                    <Bot className="w-4 h-4 mr-2.5 text-txt-muted" />
                    <span>AI Needs Review</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer / Profile Section */}
      <div className="p-4 border-t border-slate-200/80 flex items-center justify-between bg-slate-100/50 flex-shrink-0">
        <div className="flex items-center space-x-3 min-w-0">
          {/* Avatar Container */}
          <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-semibold text-xs relative flex-shrink-0">
            AM
            {/* Online Status Dot */}
            <span
              className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-100"
              aria-label="Online"
              title="Online"
            />
          </div>
          {/* User Meta */}
          <div className="min-w-0 flex flex-col">
            <span className="text-sm font-medium text-txt-primary truncate leading-tight">
              Alex Morgan
            </span>
            <span className="text-[11px] text-txt-muted truncate leading-tight">
              CX Agent
            </span>
          </div>
        </div>
        {/* Settings button */}
        <button
          className="p-1.5 text-txt-muted hover:text-txt-secondary hover:bg-slate-200/60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
          aria-label="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
