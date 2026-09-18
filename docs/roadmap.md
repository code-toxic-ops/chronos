# Chronos Roadmap

## Current Version

**v0.2.0 — Conversation Detection**

Chronos can currently:

- Load as a Chrome Manifest V3 extension.
- Run a content script on ChatGPT.
- Extract the conversation ID from the ChatGPT URL.
- Distinguish between a conversation page and a non-conversation page.
- Separate conversation extraction from webpage observation.
- Use a basic popup interface.
- Maintain an initial project architecture separating the content script, background service worker, popup, utilities, and documentation.

---

## Phase 1 — SPA Navigation Detection

**Target: v0.3.0**

### Goals

Detect conversation changes without requiring a page reload.

### Tasks

- Detect changes to the ChatGPT URL.
- Handle navigation caused by:
  - `history.pushState()`
  - `history.replaceState()`
  - Browser Back/Forward navigation.
- Detect switching between existing conversations.
- Detect navigation to a new conversation.
- Compare the newly detected conversation ID with the previously detected ID.
- Prevent duplicate processing when the conversation has not changed.

### Result

Chronos should remain active while the user navigates between conversations inside ChatGPT.

---

## Phase 2 — Conversation Registry

**Target: v0.4.0**

### Goals

Create a central system for maintaining information about conversations.

### Tasks

- Create a conversation registry.
- Store conversation identifiers.
- Associate timestamps with conversations.
- Track the last observed time for each conversation.
- Move registry management into the background service worker.
- Establish communication between `content.js` and `background.js`.
- Introduce extension storage.

### Result

Chronos should be able to remember previously observed conversations and their temporal state.

---

## Phase 3 — Temporal Context

**Target: v0.5.0**

### Goals

Calculate meaningful temporal information from stored conversation data.

### Tasks

- Record conversation timestamps.
- Calculate elapsed time between relevant events.
- Handle first-time conversations.
- Handle returning conversations.
- Build a structured temporal context object.
- Separate temporal calculations from webpage-specific code.

### Result

Chronos should be able to determine how much time has passed in relation to a conversation.

---

## Phase 4 — Context Builder

**Target: v0.6.0**

### Goals

Convert temporal information into context that can be understood by an AI system.

### Tasks

- Create a context builder module.
- Define a consistent context format.
- Decide which temporal information should be included.
- Handle different conversation states.
- Keep the context generation independent from platform-specific code.

### Result

Chronos should produce a structured temporal context that can be passed to an AI interface.

---

## Phase 5 — Context Injection

**Target: v0.7.0**

### Goals

Inject the generated temporal context into the AI conversation.

### Tasks

- Study the ChatGPT input interface.
- Determine a safe injection mechanism.
- Insert generated temporal context into the conversation workflow.
- Prevent unwanted modification of user messages.
- Handle injection failures.
- Test context injection across different conversation states.

### Result

Chronos should be able to provide temporal context to the AI automatically.

---

## Phase 6 — Multi-Platform Architecture

**Target: v0.8.0**

### Goals

Prepare Chronos to support AI platforms beyond ChatGPT.

### Tasks

- Separate platform-independent logic from platform-specific logic.
- Create platform-specific conversation extractors.
- Create platform-specific navigation observers where required.
- Define a common platform interface.
- Test the architecture with additional AI platforms.

### Result

Chronos should be capable of supporting multiple AI conversation platforms without duplicating the entire system.

---

## Phase 7 — Reliability and Refinement

**Target: v0.9.0**

### Goals

Make Chronos stable enough for broader testing.

### Tasks

- Handle unexpected navigation states.
- Handle missing conversation IDs.
- Improve error handling.
- Prevent duplicate events.
- Test multiple tabs.
- Test multiple conversations.
- Test browser Back/Forward navigation.
- Test extension reloads and browser restarts.
- Review storage behavior.
- Improve popup status information.

### Result

Chronos should behave consistently during normal browsing and conversation workflows.

---

## Phase 8 — Initial Release

**Target: v1.0.0**

### Goals

Release a stable first version of Chronos.

### Requirements

- Reliable conversation detection.
- Reliable SPA navigation detection.
- Persistent conversation registry.
- Accurate temporal calculations.
- Working temporal context generation.
- Working context injection.
- Basic error handling.
- Multi-tab testing.
- Documentation of the architecture and major decisions.

---

# Development Principles

Chronos will be developed incrementally.

Each major version should represent a working milestone rather than simply a collection of unfinished features.

The development process will follow:

```text
Understand
    ↓
Implement
    ↓
Test
    ↓
Debug
    ↓
Refactor
    ↓
Commit
    ↓
Tag
