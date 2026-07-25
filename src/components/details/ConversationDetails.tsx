import DetailsHeader from "./DetailsHeader";
import AISummaryCard from "./AISummaryCard";
import SuggestedActionsCard from "./SuggestedActionsCard";
import CustomerInfoCard from "./CustomerInfoCard";
import ConversationTimeline from "./ConversationTimeline";
import ReplyComposer from "./ReplyComposer";
import { type Conversation } from "../../types/conversation";

interface ConversationDetailsProps {
  conversation: Conversation;
}

export default function ConversationDetails({
  conversation,
}: ConversationDetailsProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Sticky Header Panel */}
      <div className="p-6 pb-0 flex-shrink-0">
        <DetailsHeader
          customerName={conversation.customerName}
          categoryTag={conversation.categoryTag}
          priority={conversation.priority}
          waitingTime={conversation.waitingTime}
        />
      </div>

      {/* Scrollable Workspace Body */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* AI Summary Insight */}
        <AISummaryCard
          aiSummary={conversation.aiSummary}
          aiConfidence={conversation.aiConfidence}
          escalationReason={conversation.escalationReason}
        />

        {/* Action Recommendations */}
        <SuggestedActionsCard suggestedActions={conversation.suggestedActions} />

        {/* Customer Profile & System Metadata */}
        <CustomerInfoCard
          customerInfo={conversation.customerInfo}
          metadata={conversation.metadata}
        />

        {/* Conversation Activity Log */}
        <ConversationTimeline timeline={conversation.timeline} />

        {/* Composer Textarea */}
        <ReplyComposer customerName={conversation.customerName} />
      </div>
    </div>
  );
}

