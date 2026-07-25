import type { Conversation } from "../types/conversation";

export const STATIC_CONVERSATIONS: Conversation[] = [
  {
    id: "conv_1",
    customerName: "Marcus Vance",
    issueSummary:
      "Checkout error: Payment failed repeatedly during enterprise subscription renewal upgrade.",
    waitingTime: "4m ago",
    priority: "critical",
    categoryTag: "Billing",
    aiTag: "AI Escalated",
    isUnread: true,
    aiSummary:
      "Customer is trying to upgrade their subscription from Growth to Enterprise. The payment fails repeatedly at checkout with error code ERR_PAYMENT_FAILED. Customer is highly frustrated due to upcoming project launch.",
    aiConfidence: 94,
    escalationReason: "Gateway Timeout / Checkout Loop",
    suggestedActions: [
      "Verify stripe payment gateway logs",
      "Offer manual invoice processing for upgrade",
      "Escalate checkout telemetry to Billing Team",
      "Request transaction ID from customer",
    ],
    customerInfo: {
      email: "marcus.vance@acme.corp",
      company: "Acme Corporation",
      subscriptionPlan: "Growth (Standard)",
      customerSince: "Oct 12, 2024",
    },
    metadata: {
      channel: "Web Widget",
      language: "English (US)",
      assignedTo: "Alex Morgan",
      lastActivity: "4m ago",
    },
    timeline: [
      {
        timestamp: "10:14 AM",
        sender: "Marcus Vance",
        role: "Customer",
        message:
          "Hi, I'm trying to upgrade our subscription from Growth to Enterprise, but every time I click checkout, the screen loads for a minute and then says 'ERR_PAYMENT_FAILED'. Can you please help? We have a product launch tomorrow and need the higher limits.",
        isAI: false,
      },
      {
        timestamp: "10:15 AM",
        sender: "AI Assistant",
        role: "AI Assistant",
        message:
          "I understand this is urgent, Marcus. Let me analyze the checkout logs. I see repeated failed charges under your account 'Acme Corporation'. This appears to be a gateway timeout. I am escalating this to a human agent immediately to verify your payment status and offer manual activation.",
        isAI: true,
      },
      {
        timestamp: "10:17 AM",
        sender: "Marcus Vance",
        role: "Customer",
        message:
          "Thanks, please hurry. I have my corporate card ready if we need to pay via manual invoice. Let me know what information you need.",
        isAI: false,
      },
    ],
  },
  {
    id: "conv_2",
    customerName: "Clara Zhang",
    issueSummary:
      "Account lockout: Customer blocked from console after multiple failed login attempts.",
    waitingTime: "12m ago",
    priority: "high",
    categoryTag: "Access",
    aiTag: "Needs Human",
    isUnread: true,
    aiSummary:
      "Customer console account 'Clara Zhang' has been locked out after 5 unsuccessful password entries. Multi-factor authentication is enabled, but login block prevents inputting the verification code.",
    aiConfidence: 89,
    escalationReason: "Console Security Lockout Triggered",
    suggestedActions: [
      "Verify client IP address and login logs",
      "Trigger temporary MFA disable sequence",
      "Issue console password reset link",
      "Confirm security questions with customer",
    ],
    customerInfo: {
      email: "clara.z@techstart.io",
      company: "TechStart Inc",
      subscriptionPlan: "Pro (Team)",
      customerSince: "Jan 18, 2025",
    },
    metadata: {
      channel: "Console Portal",
      language: "English (US)",
      assignedTo: "Alex Morgan",
      lastActivity: "12m ago",
    },
    timeline: [
      {
        timestamp: "10:02 AM",
        sender: "Clara Zhang",
        role: "Customer",
        message:
          "Help, I'm completely locked out of my developer dashboard. I entered my password wrong a few times, and now it won't even let me try to type my MFA code. I have a deployment deadline in an hour.",
        isAI: false,
      },
      {
        timestamp: "10:03 AM",
        sender: "AI Assistant",
        role: "AI Assistant",
        message:
          "Hello Clara, I checked your account status. Your profile has been temporarily locked due to security protocols protecting against brute-force attacks. I am escalating this to our support team right now to verify your identity and restore access.",
        isAI: true,
      },
    ],
  },
  {
    id: "conv_3",
    customerName: "David K.",
    issueSummary:
      "Duplicate charge: Refund request for accidental double invoicing on annual license renewal.",
    waitingTime: "24m ago",
    priority: "high",
    categoryTag: "Billing",
    aiTag: "AI Escalated",
    aiSummary:
      "The billing system processed two identical charges of $1,200 on customer's card for the annual license renewal. The customer requests an immediate refund for the second duplicate charge.",
    aiConfidence: 97,
    escalationReason: "Double Payment Refund request",
    suggestedActions: [
      "Locate invoices INV-2026-081 and INV-2026-082 in Stripe",
      "Process refund for duplicate charge",
      "Send credit confirmation receipt",
      "Ensure recurring billing toggle is set correctly",
    ],
    customerInfo: {
      email: "david.k@nexusdev.net",
      company: "Nexus Development",
      subscriptionPlan: "Enterprise (Scale)",
      customerSince: "Jun 05, 2023",
    },
    metadata: {
      channel: "Email Intake",
      language: "English (US)",
      assignedTo: "Alex Morgan",
      lastActivity: "24m ago",
    },
    timeline: [
      {
        timestamp: "09:50 AM",
        sender: "David K.",
        role: "Customer",
        message:
          "My credit card was charged twice for our annual subscription. Both invoices are for $1,200, dated yesterday. Please refund the duplicate transaction immediately as this is affecting our weekly card balance limit.",
        isAI: false,
      },
      {
        timestamp: "09:51 AM",
        sender: "AI Assistant",
        role: "AI Assistant",
        message:
          "I apologize for the inconvenience, David. I found two identical transactions on your billing ledger. Our system requires a billing engineer to approve transaction refunds. I have queued this ticket for our agent team with high priority.",
        isAI: true,
      },
    ],
  },
  {
    id: "conv_4",
    customerName: "Jordan Miller",
    issueSummary:
      "AI confidence too low: Chatbot confidence rating fell below threshold during router configuration.",
    waitingTime: "45m ago",
    priority: "medium",
    categoryTag: "System",
    aiTag: "Low AI Confidence",
    isUnread: true,
    aiSummary:
      "AI assistant was unable to resolve a complex API routing loop problem during custom domain mapping setup. The confidence rating fell to 42%, triggering immediate human workspace handoff.",
    aiConfidence: 42,
    escalationReason: "Low AI Response Confidence",
    suggestedActions: [
      "Review custom domain routing logs",
      "Check DNS records (CNAME and A records)",
      "Verify SSL certificate mapping in console",
      "Instruct user on nameserver updates",
    ],
    customerInfo: {
      email: "jordan.m@millermedia.com",
      company: "Miller Media",
      subscriptionPlan: "Pro (Individual)",
      customerSince: "Mar 10, 2024",
    },
    metadata: {
      channel: "Chat Widget",
      language: "English",
      assignedTo: "Alex Morgan",
      lastActivity: "45m ago",
    },
    timeline: [
      {
        timestamp: "09:28 AM",
        sender: "Jordan Miller",
        role: "Customer",
        message:
          "I keep getting a circular redirect error whenever I try to point my subdomains to your server. I've updated the CNAME records in Cloudflare, but it is not working.",
        isAI: false,
      },
      {
        timestamp: "09:29 AM",
        sender: "AI Assistant",
        role: "AI Assistant",
        message:
          "Cloudflare proxy settings can sometimes trigger circular loops. Please make sure your SSL mode is set to 'Full' instead of 'Flexible' in Cloudflare... (Low confidence trigger, routing to human agent...)",
        isAI: true,
      },
      {
        timestamp: "09:31 AM",
        sender: "Jordan Miller",
        role: "Customer",
        message:
          "I tried changing that to Full and now I get a 525 SSL handshake failed page. What do I do now?",
        isAI: false,
      },
    ],
  },
  {
    id: "conv_5",
    customerName: "Amina Al-Jamil",
    issueSummary:
      "Telemetry failure: Telemetry webhook timeout error warnings during bulk database migration.",
    waitingTime: "1h ago",
    priority: "critical",
    categoryTag: "Technical",
    aiTag: "AI Escalated",
    aiSummary:
      "Customer is performing a large-scale database schema migration. Webhook payloads dispatched to their endpoints are timing out with code 504. Customer requests webhook timeout limit increase.",
    aiConfidence: 91,
    escalationReason: "504 Gateway Webhook Timeout Loop",
    suggestedActions: [
      "Review target webhook payload sizes",
      "Check network latency between regions",
      "Temporarily raise client webhook timeout to 30s",
      "Advise customer to batch webhook events",
    ],
    customerInfo: {
      email: "amina.j@dataknight.co",
      company: "DataKnight Co.",
      subscriptionPlan: "Enterprise (Dedicated)",
      customerSince: "Feb 28, 2023",
    },
    metadata: {
      channel: "API Webhook Logs",
      language: "English (US)",
      assignedTo: "Alex Morgan",
      lastActivity: "1h ago",
    },
    timeline: [
      {
        timestamp: "08:35 AM",
        sender: "Amina Al-Jamil",
        role: "Customer",
        message:
          "We are running a schema migration of 10 million rows. Your server dispatches webhook notifications, but our ingest endpoints are returning 504 timeouts because we take 12 seconds to process each event. Your server cuts the connection after 10 seconds. We need this timeout limit raised to 30 seconds for the next 24 hours.",
        isAI: false,
      },
      {
        timestamp: "08:37 AM",
        sender: "AI Assistant",
        role: "AI Assistant",
        message:
          "I have analyzed your request, Amina. Standard system webhook timeouts are hard-capped at 10 seconds. However, Enterprise plans can request temporary profile configurations. I am escalating this to our operations group to raise your limit.",
        isAI: true,
      },
    ],
  },
  {
    id: "conv_6",
    customerName: "Emily Watson",
    issueSummary:
      "Subscription cancellation request: Enterprise client inquiring about contract end date details.",
    waitingTime: "2h ago",
    priority: "high",
    categoryTag: "Retention",
    aiTag: "Needs Human",
    aiSummary:
      "Customer is asking for cancellation instructions and requesting the exact end date of their current annual contract. This is a high-value account at risk of churning.",
    aiConfidence: 85,
    escalationReason: "Churn Warning / Cancel request",
    suggestedActions: [
      "Locate account contract renewal date (Dec 15, 2026)",
      "Flag account in CRM as high churn risk",
      "Schedule account manager intervention",
      "Review customer usage logs for low adoption metrics",
    ],
    customerInfo: {
      email: "emily.w@vanguardcorp.com",
      company: "Vanguard Corp",
      subscriptionPlan: "Enterprise (Scale)",
      customerSince: "Nov 14, 2022",
    },
    metadata: {
      channel: "Dashboard Account Settings",
      language: "English (UK)",
      assignedTo: "Alex Morgan",
      lastActivity: "2h ago",
    },
    timeline: [
      {
        timestamp: "07:30 AM",
        sender: "Emily Watson",
        role: "Customer",
        message:
          "Where do I find the options to cancel our account renewal in the billing console? I also need to confirm the final service termination date according to our annual contract agreement.",
        isAI: false,
      },
      {
        timestamp: "07:32 AM",
        sender: "AI Assistant",
        role: "AI Assistant",
        message:
          "Hello Emily, I understand you're looking for contract renewal details. To prevent accidental loss of enterprise data, cancellation queries are processed directly by our customer team. I am connecting you to an agent immediately to assist you with your contract dates.",
        isAI: true,
      },
    ],
  },
  {
    id: "conv_7",
    customerName: "Rajesh Patel",
    issueSummary:
      "MIA Code: Password reset verification email not arriving for primary administrator account.",
    waitingTime: "3h ago",
    priority: "medium",
    categoryTag: "Support",
    aiTag: "Low AI Confidence",
    aiSummary:
      "Customer Rajesh Patel reports that password reset verification links are not arriving in their inbox. Checked SendGrid mail queue and confirmed emails are being rejected by client's mail servers.",
    aiConfidence: 77,
    escalationReason: "SMTP Delivery Bounce detected",
    suggestedActions: [
      "Check SendGrid dashboard for bounce event details",
      "Confirm if client email domain has blocked our SPF/DKIM records",
      "Manually trigger single reset link verification bypass",
      "Verify client admin email spelling in ledger",
    ],
    customerInfo: {
      email: "rajesh.patel@globaledu.org",
      company: "Global Education Org",
      subscriptionPlan: "Pro (School)",
      customerSince: "Jul 09, 2024",
    },
    metadata: {
      channel: "Support Form",
      language: "English (US)",
      assignedTo: "Alex Morgan",
      lastActivity: "3h ago",
    },
    timeline: [
      {
        timestamp: "06:12 AM",
        sender: "Rajesh Patel",
        role: "Customer",
        message:
          "I forgot my password and clicked the forgot password link, but no verification email arrives. I've checked spam and whitelist settings, and nothing is there. We need access to manage courses today.",
        isAI: false,
      },
      {
        timestamp: "06:14 AM",
        sender: "AI Assistant",
        role: "AI Assistant",
        message:
          "Hello Rajesh, I initiated a test delivery to your domain. The SMTP logs indicate a delivery timeout from your server. I am escalating this to our system desk to review the SMTP bounce logs.",
        isAI: true,
      },
    ],
  },
  {
    id: "conv_8",
    customerName: "Taylor Reid",
    issueSummary:
      "Shipping delay: Inquiring on custom rack server hardware dispatch transit tracking info.",
    waitingTime: "5h ago",
    priority: "low",
    categoryTag: "Shipping",
    aiTag: "Needs Human",
    aiSummary:
      "Customer is asking for an update on custom server hardware shipment details. The order status is marked as 'Dispatched' but tracking information has not updated for 48 hours.",
    aiConfidence: 82,
    escalationReason: "Hardware Order Tracking Lag",
    suggestedActions: [
      "Lookup FedEx tracking number 8943-2210-9943",
      "Contact warehouse logistics team for confirmation",
      "Draft transit update response to customer",
      "Apply delay credit option if SLA is breached",
    ],
    customerInfo: {
      email: "taylor.r@cloudgrid.io",
      company: "CloudGrid Services",
      subscriptionPlan: "Enterprise (Custom Server)",
      customerSince: "Aug 19, 2025",
    },
    metadata: {
      channel: "Orders Tracker",
      language: "English (US)",
      assignedTo: "Alex Morgan",
      lastActivity: "5h ago",
    },
    timeline: [
      {
        timestamp: "04:10 AM",
        sender: "Taylor Reid",
        role: "Customer",
        message:
          "Our custom rack server was scheduled for delivery yesterday. The order status in the portal says 'Dispatched' but the tracking page has no details and says 'Label Created'. Please check where the shipment is.",
        isAI: false,
      },
      {
        timestamp: "04:12 AM",
        sender: "AI Assistant",
        role: "AI Assistant",
        message:
          "Hello Taylor, I found your tracking record in the system. Since tracking codes are managed by our shipping carriers, updates can sometimes delay by up to 24 hours. I have requested our logistics team to query the carrier status.",
        isAI: true,
      },
    ],
  },
];
