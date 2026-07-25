import { type CustomerInfo, type ConversationMetadata } from "../../types/conversation";

interface CustomerInfoCardProps {
  customerInfo: CustomerInfo;
  metadata: ConversationMetadata;
}

export default function CustomerInfoCard({
  customerInfo,
  metadata,
}: CustomerInfoCardProps) {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs flex flex-col space-y-5">
      {/* Customer Info Section */}
      <div className="space-y-3.5">
        <h3 className="text-xs font-bold text-txt-muted uppercase tracking-wider">
          Customer Information
        </h3>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          {/* Email */}
          <div className="flex flex-col">
            <dt className="text-xs text-txt-muted font-medium">Email</dt>
            <dd className="text-txt-primary truncate font-medium mt-0.5">
              {customerInfo.email}
            </dd>
          </div>
          {/* Company */}
          <div className="flex flex-col">
            <dt className="text-xs text-txt-muted font-medium">Company</dt>
            <dd className="text-txt-primary truncate font-medium mt-0.5">
              {customerInfo.company}
            </dd>
          </div>
          {/* Plan */}
          <div className="flex flex-col">
            <dt className="text-xs text-txt-muted font-medium">
              Subscription Plan
            </dt>
            <dd className="text-txt-primary truncate font-medium mt-0.5">
              {customerInfo.subscriptionPlan}
            </dd>
          </div>
          {/* Customer Since */}
          <div className="flex flex-col">
            <dt className="text-xs text-txt-muted font-medium">
              Customer Since
            </dt>
            <dd className="text-txt-primary truncate font-medium mt-0.5">
              {customerInfo.customerSince}
            </dd>
          </div>
        </dl>
      </div>

      <div className="border-t border-slate-100" />

      {/* Conversation Metadata Section */}
      <div className="space-y-3.5">
        <h3 className="text-xs font-bold text-txt-muted uppercase tracking-wider">
          Conversation Metadata
        </h3>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          {/* Channel */}
          <div className="flex flex-col">
            <dt className="text-xs text-txt-muted font-medium">Channel</dt>
            <dd className="text-txt-primary truncate font-medium mt-0.5">
              {metadata.channel}
            </dd>
          </div>
          {/* Language */}
          <div className="flex flex-col">
            <dt className="text-xs text-txt-muted font-medium">Language</dt>
            <dd className="text-txt-primary truncate font-medium mt-0.5">
              {metadata.language}
            </dd>
          </div>
          {/* Assigned To */}
          <div className="flex flex-col">
            <dt className="text-xs text-txt-muted font-medium">Assigned To</dt>
            <dd className="text-txt-primary truncate font-medium mt-0.5">
              {metadata.assignedTo}
            </dd>
          </div>
          {/* Last Activity */}
          <div className="flex flex-col">
            <dt className="text-xs text-txt-muted font-medium">
              Last Activity
            </dt>
            <dd className="text-txt-primary truncate font-medium mt-0.5">
              {metadata.lastActivity}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
