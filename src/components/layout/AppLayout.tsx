import Sidebar from "./Sidebar";
import Header from "./Header";
import MainContent from "./MainContent";
import DetailsPanel from "./DetailsPanel";

export default function AppLayout() {
  return (
    <div className="h-screen w-screen overflow-hidden flex bg-page text-txt-primary">
      {/* Sidebar Panel */}
      <Sidebar />

      {/* Main View Area Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header Panel */}
        <Header />

        {/* Workspace Columns Layout (Middle + Right) */}
        <div className="flex-1 flex min-h-0 overflow-hidden">
          {/* Central Conversation/Queue Content Panel */}
          <MainContent />

          {/* Right-side Detail View Panel */}
          <DetailsPanel />
        </div>
      </div>
    </div>
  );
}
