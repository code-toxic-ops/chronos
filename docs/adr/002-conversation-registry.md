# ADR 002: Conversation Registry

## Status

Accepted

## Context

Chronos needs to maintain information about conversations over time.

A user may:

- Open an existing conversation.
- Switch between conversations.
- Start a new conversation.
- Return to a previously visited conversation.
- Use multiple browser tabs.

Keeping all conversation information directly inside the content script would make the system difficult to maintain and would limit communication between tabs and platforms.

## Decision

Chronos will use a conversation registry as the central record of known conversations.

The registry will associate each conversation identifier with its temporal metadata.

A conceptual registry entry may contain:

- Platform
- Conversation identifier
- Creation timestamp
- Last observed timestamp
- Last known state
- Additional platform-specific metadata

A conceptual entry may look like this:

```javascript
{
    platform: "chatgpt",
    conversationId: "example-id",
    createdAt: 0,
    lastObservedAt: 0,
    state: "active"
}
