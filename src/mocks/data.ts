import { type Conversation } from "../types/conversation";
import { STATIC_CONVERSATIONS } from "../data/conversations";

// Create a deep clone of the static dataset for MSW state operations
export let mockConversations: Conversation[] = JSON.parse(
  JSON.stringify(STATIC_CONVERSATIONS)
);

export function resetMockData() {
  mockConversations = JSON.parse(JSON.stringify(STATIC_CONVERSATIONS));
}
