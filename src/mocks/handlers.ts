import { http, HttpResponse, delay } from "msw";
import { mockConversations } from "./data";
import { type Conversation } from "../types/conversation";

// Helper to generate a random delay between 200ms and 500ms
const getSimulatedDelay = () =>
  Math.floor(Math.random() * (500 - 200 + 1) + 200);

export const handlers = [
  // GET /api/conversations -> Returns conversation summary objects only
  http.get("/api/conversations", async () => {
    await delay(getSimulatedDelay());

    const summaries = mockConversations.map(
      ({
        id,
        customerName,
        issueSummary,
        waitingTime,
        priority,
        categoryTag,
        aiTag,
        isUnread,
      }) => ({
        id,
        customerName,
        issueSummary,
        waitingTime,
        priority,
        categoryTag,
        aiTag,
        isUnread,
      })
    );

    return HttpResponse.json(summaries);
  }),

  // GET /api/conversations/:id -> Returns the complete conversation details
  http.get("/api/conversations/:id", async ({ params }) => {
    const { id } = params;
    await delay(getSimulatedDelay());

    const conversation = mockConversations.find((c) => c.id === id);

    if (!conversation) {
      return new HttpResponse(
        JSON.stringify({ error: "Conversation not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return HttpResponse.json(conversation);
  }),

  // PATCH /api/conversations/:id -> Accepts updates, randomly fails ~20% of requests
  http.patch("/api/conversations/:id", async ({ params, request }) => {
    const { id } = params;
    await delay(getSimulatedDelay());

    // Fail 20% of the time to demonstrate error handling in the UI
    if (Math.random() < 0.2) {
      return new HttpResponse(
        JSON.stringify({
          error: "Database update error: Transaction write timeout.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const conversationIndex = mockConversations.findIndex((c) => c.id === id);

    if (conversationIndex === -1) {
      return new HttpResponse(
        JSON.stringify({ error: "Conversation not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    try {
      const updates = (await request.json()) as Partial<Conversation>;

      mockConversations[conversationIndex] = {
        ...mockConversations[conversationIndex],
        ...updates,
      };

      return HttpResponse.json(mockConversations[conversationIndex]);
    } catch {
      return new HttpResponse(
        JSON.stringify({ error: "Malformed JSON payload" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }),
];
