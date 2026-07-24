import { Bot, User } from "lucide-react";

export default function ConversationTimeline() {
  const events = [
    {
      timestamp: "10:14 AM",
      sender: "Marcus Vance",
      role: "Customer",
      message:
        "Hi, I'm trying to upgrade our subscription from Growth to Enterprise, but every time I click checkout, the screen loads for a minute and then says 'ERR_PAYMENT_FAILED'. Can you please help? We have a product launch tomorrow and need the higher limits.",
      isAI: false,
    },
    {
      timestamp: "10:15 AM",
      sender: "AI Assistant",
      role: "AI Assistant",
      message:
        "I understand this is urgent, Marcus. Let me analyze the checkout logs. I see repeated failed charges under your account 'Acme Corporation'. This appears to be a gateway timeout. I am escalating this to a human agent immediately to verify your payment status and offer manual activation.",
      isAI: true,
    },
    {
      timestamp: "10:17 AM",
      sender: "Marcus Vance",
      role: "Customer",
      message:
        "Thanks, please hurry. I have my corporate card ready if we need to pay via manual invoice. Let me know what information you need.",
      isAI: false,
    },
  ];

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
        {events.map((event, idx) => (
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
