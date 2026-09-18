# ADR-001
## Title
Conversation-Centric Tracking

## Status
Accepted

## Context

Users may:
- Open multiple tabs.
- Open the same conversation in multiple tabs.
- Switch conversations inside a single tab.

Tracking by tab would lose conversation continuity.

## Decision

Chronos will track conversations using platform-specific conversation identifiers rather than browser tab IDs.

## Consequences

Pros
- Stable across refreshes.
- Stable across reopened tabs.
- Multi-platform ready.

Cons
- Requires platform-specific conversation extraction.