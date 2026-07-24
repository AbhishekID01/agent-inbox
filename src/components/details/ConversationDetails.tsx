import DetailsHeader from "./DetailsHeader";
import AISummaryCard from "./AISummaryCard";
import SuggestedActionsCard from "./SuggestedActionsCard";
import CustomerInfoCard from "./CustomerInfoCard";
import ConversationTimeline from "./ConversationTimeline";
import ReplyComposer from "./ReplyComposer";

export default function ConversationDetails() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Sticky Header Panel */}
      <div className="p-6 pb-0 flex-shrink-0">
        <DetailsHeader
          customerName="Marcus Vance"
          categoryTag="Billing"
          priority="critical"
          waitingTime="4m"
        />
      </div>

      {/* Scrollable Workspace Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* AI Summary Insight */}
        <AISummaryCard />

        {/* Action Recommendations */}
        <SuggestedActionsCard />

        {/* Customer Profile & System Metadata */}
        <CustomerInfoCard />

        {/* Conversation Activity Log */}
        <ConversationTimeline />

        {/* Composer Textarea */}
        <ReplyComposer />
      </div>
    </div>
  );
}
