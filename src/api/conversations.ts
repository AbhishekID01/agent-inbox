import { apiClient } from "./client";
import type { Conversation } from "../types/conversation";

export type ConversationSummary = Pick<
  Conversation,
  | "id"
  | "customerName"
  | "issueSummary"
  | "waitingTime"
  | "priority"
  | "categoryTag"
  | "aiTag"
  | "isUnread"
>;

export async function fetchConversations(
  signal?: AbortSignal
): Promise<ConversationSummary[]> {
  return apiClient<ConversationSummary[]>("/api/conversations", { signal });
}

export async function fetchConversationById(
  id: string,
  signal?: AbortSignal
): Promise<Conversation> {
  return apiClient<Conversation>(`/api/conversations/${id}`, { signal });
}

export async function updateConversation(
  id: string,
  updates: Partial<Conversation>,
  signal?: AbortSignal
): Promise<Conversation> {
  return apiClient<Conversation>(`/api/conversations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
    signal,
  });
}
