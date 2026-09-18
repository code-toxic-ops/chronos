
# ADR 003: Context Injection

## Status

Accepted

## Context

The purpose of Chronos is to provide temporal information to an AI conversation.

The system must eventually communicate relevant temporal context to the AI interface without requiring the user to manually calculate elapsed time.

Examples of useful temporal context include:

- Time since the previous interaction
- Time since the conversation was started
- Time since the user last visited the conversation
- Relevant changes that occurred during the absence

However, webpage observation, temporal calculations, and prompt injection should not be tightly coupled.

## Decision

Chronos will separate context generation from context injection.

The system will use the following conceptual flow:

Conversation observation
        ↓
Conversation registry
        ↓
Temporal calculation
        ↓
Context builder
        ↓
Prompt injection

### Conversation Observation

The content script detects the active conversation and relevant page events.

### Conversation Registry

The background service worker retrieves stored temporal information for the conversation.

### Temporal Calculation

Chronos calculates relevant time differences using stored timestamps and the current observation time.

### Context Builder

The context builder converts temporal information into a structured context representation.

For example:

```javascript
{
    elapsedSinceLastInteraction: 3600,
    elapsedSinceLastVisit: 86400,
    conversationState: "returning"
}
