export default function DetailsPanel() {
  return (
    <aside className="w-96 h-full bg-surface border-l border-slate-200 flex flex-col flex-shrink-0">
      {/* Details Header Container */}
      <div className="h-16 border-b border-slate-200/80 px-6 flex items-center flex-shrink-0" />

      {/* Main Details Body Container */}
      <div className="flex-1 p-6 overflow-y-auto" />

      {/* Quick Actions Footer Container */}
      <div className="p-4 border-t border-slate-200/80 flex-shrink-0" />
    </aside>
  );
}
