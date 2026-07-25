interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse bg-slate-200/80 rounded-md ${className}`}
    />
  );
}

// Mimics ConversationCard.tsx closely
export function CardSkeleton() {
  return (
    <div className="p-4 rounded-2xl border border-slate-100 bg-white flex flex-col space-y-3.5 select-none">
      {/* Name and waiting time */}
      <div className="flex justify-between items-center pl-0.5">
        <Skeleton className="h-4.5 w-32" />
        <Skeleton className="h-3.5 w-12" />
      </div>
      {/* Summary */}
      <div className="space-y-2 pl-0.5">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      {/* Tags */}
      <div className="flex space-x-2 pl-0.5 pt-1">
        <Skeleton className="h-5 w-16 rounded-lg" />
        <Skeleton className="h-5 w-20 rounded-lg" />
        <Skeleton className="h-5 w-28 rounded-lg" />
      </div>
    </div>
  );
}

// Mimics ConversationDetails.tsx structure
export function DetailsSkeleton() {
  return (
    <div className="flex flex-col h-full overflow-hidden select-none">
      {/* Details Header Skeleton (matches DetailsHeader.tsx) */}
      <div className="p-6 pb-4 border-b border-slate-100 flex-shrink-0 space-y-3">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <div className="flex space-x-2">
              <Skeleton className="h-5.5 w-20 rounded-lg" />
              <Skeleton className="h-5.5 w-16 rounded-lg" />
            </div>
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      {/* Main scrolling details content skeleton */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* AI summary card skeleton */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-6 w-6 rounded-lg" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="space-y-2.5">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-3.5 border-t border-slate-100">
            <div className="space-y-1.5">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-4 w-36" />
            </div>
          </div>
        </div>

        {/* Suggested Actions skeleton */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3.5">
          <Skeleton className="h-4 w-32" />
          <div className="space-y-2.5">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-4.5 w-4.5 rounded-md flex-shrink-0" />
              <Skeleton className="h-4 w-60" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton className="h-4.5 w-4.5 rounded-md flex-shrink-0" />
              <Skeleton className="h-4 w-52" />
            </div>
            <div className="flex items-center space-x-3">
              <Skeleton className="h-4.5 w-4.5 rounded-md flex-shrink-0" />
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
        </div>

        {/* Customer Profile Info skeleton */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <Skeleton className="h-4 w-40" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
            <div className="space-y-1.5"><Skeleton className="h-3 w-12" /><Skeleton className="h-4 w-36" /></div>
            <div className="space-y-1.5"><Skeleton className="h-3 w-16" /><Skeleton className="h-4 w-28" /></div>
            <div className="space-y-1.5"><Skeleton className="h-3 w-14" /><Skeleton className="h-4 w-20" /></div>
            <div className="space-y-1.5"><Skeleton className="h-3 w-18" /><Skeleton className="h-4 w-24" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
