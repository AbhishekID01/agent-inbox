export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-sidebar border-r border-slate-200 flex flex-col flex-shrink-0">
      {/* Workspace Header Container */}
      <div className="h-16 border-b border-slate-200/80 px-6 flex items-center flex-shrink-0" />

      {/* Navigation Area Container */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto" />

      {/* User / Settings Footer Container */}
      <div className="p-4 border-t border-slate-200/80 flex-shrink-0" />
    </aside>
  );
}
