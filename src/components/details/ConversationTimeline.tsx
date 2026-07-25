import { Bot, User } from "lucide-react";
import { type Message } from "../../types/conversation";

interface ConversationTimelineProps {
  timeline: Message[];
}

export default function ConversationTimeline({
  timeline,
}: ConversationTimelineProps) {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col space-y-4">
      {/* Header */}
      <div>
        <h3 className="text-xs font-bold text-txt-muted uppercase tracking-wider">
          Ticket Activity Timeline
        </h3>
      </div>

      {/* Timeline List Container */}
      <div className="relative border-l border-slate-100 pl-6 ml-3.5 space-y-6">
        {timeline.map((event, idx) => (
          <div key={idx} className="relative">
            {/* Timeline Node Icon */}
            <div
              className={`absolute -left-[35px] top-0 w-5.5 h-5.5 rounded-full border-2 border-white flex items-center justify-center text-white shadow-xs ${
                event.isAI ? "bg-brand" : "bg-slate-500"
              }`}
            >
              {event.isAI ? (
                <Bot className="w-3 h-3" />
              ) : (
                <User className="w-3 h-3" />
              )}
            </div>

            {/* Event Content */}
            <div className="flex flex-col space-y-1.5">
              {/* Header Metadata */}
              <div className="flex items-center space-x-2 text-xs">
                <span className="font-semibold text-txt-primary">
                  {event.sender}
                </span>
                <span className="px-1.5 py-0.2 rounded-sm bg-slate-100 text-txt-secondary text-[9px] font-bold uppercase tracking-wider">
                  {event.role}
                </span>
                <span className="text-txt-muted font-medium">
                  • {event.timestamp}
                </span>
              </div>

              {/* Message Block */}
              <p className="text-sm text-txt-secondary leading-relaxed bg-slate-50/50 border border-slate-100/60 p-3.5 rounded-xl font-normal">
                {event.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
