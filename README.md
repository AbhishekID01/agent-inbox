# 🚀 Agent Inbox

A purpose-built conversation triage interface designed for CX agents handling AI-escalated customer conversations.

Built as a Frontend Engineer Intern take-home assignment for Yellow.ai using React, TypeScript, Tailwind CSS, Vite, and MSW.

---

## 🎯 Product Thinking

The brief focuses on helping CX agents quickly identify and act on the conversations that need human attention.

Instead of building a full messaging application, I prioritized rapid triage by surfacing:

- AI-generated conversation summaries
- Priority indicators
- Suggested actions
- Search and filtering
- Saved views
- Customer context

The goal was to help agents understand **what needs attention first**, rather than recreating a traditional chat application.

---

## ✨ Features

- 📥 Conversation Inbox
- 🔍 Search conversations
- 🏷️ Priority & category filters
- ⭐ Saved views
- 🤖 AI Insight panel
- 👤 Customer information
- 📜 Conversation timeline
- ⚡ Suggested actions
- ⏳ Loading, empty, and error states
- 🔄 Retry failed requests
- ✍️ Mock write action with simulated API failure
- ♿ Keyboard-accessible navigation

---

## 🛠️ Tech Stack

- React 18
- TypeScript (Strict Mode)
- Vite
- Tailwind CSS v4
- MSW (Mock Service Worker)
- Lucide React

---

## 🏗️ Architecture

```
AppLayout
├── Sidebar
├── WorkspaceToolbar
├── ConversationList
│   └── ConversationCard
└── DetailsPanel
```

State is managed using React hooks (`useState` and `useEffect`). Given the scope of the assignment, an external state management library was intentionally avoided.

---

## 📁 Folder Structure

```text
src/
├── components/
├── layout/
├── ui/
├── mocks/
├── data/
├── types/
└── App.tsx
```

---

## ♿ Accessibility

- Keyboard navigation
- Focus-visible states
- Semantic HTML
- Native form controls
- Accessible loading and error feedback

---

## ⚖️ Trade-offs

To stay within the suggested time budget, I intentionally did not implement:

- Authentication
- Real backend
- Real-time updates
- Reply sending
- Notifications
- Mobile-first responsive layout

These were considered outside the assignment scope.

---

## 🚧 Known Limitations

- Mock data only (MSW)
- No persistence across page refreshes
- Simulated API delays and failures
- Single-page application

---

## 🔮 Future Improvements

- Sticky reply composer
- Keyboard shortcut (`/`) for search
- Real backend integration
- Real-time conversation updates
- Virtualized conversation list
- Dark mode

---

## ⚙️ Setup

```bash
git clone https://github.com/AbhishekID01/agent-inbox.git

cd agent-inbox

npm install

npm run dev
```

---

## 🧪 Available Scripts

```bash
npm run dev
npm run build
npm run lint
```

---

## Time Spent

Approximately 12 hours over two evenings, including planning, implementation, testing, and final polish.

---

## 📄 AI Usage

AI tools (ChatGPT and Antigravity IDE) were used to assist with brainstorming, implementation guidance, and code review. All code was reviewed, understood, and integrated manually.