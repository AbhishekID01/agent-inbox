Product Requirements Document (PRD)
Project

Agent Inbox

Frontend Engineer Take-home Assignment — Yellow.ai

1. Product Vision
Overview

Agent Inbox is a purpose-built workspace that helps Customer Experience (CX) agents quickly triage AI-escalated conversations.

Unlike traditional messaging interfaces, this product focuses on prioritization before conversation.

The primary goal is to reduce the time required for an agent to decide what to work on next, ensuring urgent customer issues are never overlooked.

2. Problem Statement

Yellow.ai's AI agents successfully resolve the majority of customer conversations.

However, conversations involving:

Angry customers
Low satisfaction scores
Complex edge cases
AI failures

are escalated to human agents.

Currently these escalations appear inside a generic queue where every conversation looks equally important.

Agents waste valuable time identifying which conversations require immediate attention.

This delays critical customer responses and increases operational stress.

3. Product Goal

Design a workspace where an agent can:

Open the inbox
Instantly understand queue health
Identify the highest priority conversations
Resolve customer issues quickly
Finish the shift knowing nothing important was missed
4. Target User
Primary User

Customer Experience Agent

Characteristics

Handles dozens of escalated conversations daily
Works in a fast-paced support environment
Needs to process conversations efficiently
Frequently switches between conversations
Relies on keyboard shortcuts
Makes quick prioritization decisions
5. User Pain Points

Current workflow problems include:

Large noisy queues
No clear prioritization
Important conversations hidden among low priority issues
Time wasted opening multiple conversations
Stress caused by uncertainty
Missed SLAs due to poor visibility
6. Success Criteria

A successful product enables agents to:

Understand queue priority within seconds
Open only conversations that require immediate attention
Resolve conversations efficiently
Trust system recommendations
Finish work without overlooking critical issues
7. Product Principles

The interface should prioritize:

Clarity

Every important conversation should stand out immediately.

Speed

Reduce clicks and unnecessary navigation.

Confidence

Agents should trust the priority order and recommended actions.

Simplicity

Remove unnecessary interface elements.

8. Core Product Philosophy

This is not a messaging application.

It is a decision-support interface.

The conversation list is the primary product.

The conversation detail view exists only to help resolve the selected conversation.

9. Information Hierarchy

Priority of information on screen:

Queue Health
Critical Conversations
High Priority Conversations
Medium Priority Conversations
Conversation Details
Conversation History
10. Core Features
Queue Summary

Provides an overview of:

Total conversations
Critical conversations
Average waiting time
SLA risk
Smart Conversation List

Each conversation card displays:

Customer Name
Company
Issue Title
Priority
Waiting Time
Customer Sentiment
Escalation Reason
Assignment Status
Search

Search conversations by:

Customer
Company
Conversation ID
Issue
Filters

Allow filtering by:

Priority
Waiting Time
Sentiment
Status
Assignment
Conversation Details

Displays:

Customer profile
AI-generated summary
Complete conversation history
Suggested next action
Quick Actions

Support one-click actions:

Assign
Resolve
Snooze
11. User Flow
Open Inbox

↓

View Queue Summary

↓

Review Prioritized Conversations

↓

Select Highest Priority Conversation

↓

Read AI Summary

↓

Review Full Conversation

↓

Take Action

↓

Return to Queue
12. Out of Scope

The following will not be implemented:

Authentication
User Management
Real Backend
Real-time Messaging
Analytics Dashboard
Notifications
Multi-tenancy
Reports
13. Technical Stack

Frontend

React 18
TypeScript (Strict)
Tailwind CSS
Vite

Data

MSW
Mock API
Local mock dataset

Deployment

Vercel
14. Design Direction

Design Inspiration

Linear
GitHub Pull Requests
Notion
Superhuman

Design Keywords

Enterprise
Minimal
Fast
Professional
Clean
High Information Density
Keyboard Friendly
15. MVP Scope

Only one primary screen will be developed.

The screen combines:

Queue overview
Conversation prioritization
Conversation details
Agent actions

This focused scope ensures a polished, maintainable product that directly addresses the assignment goals.