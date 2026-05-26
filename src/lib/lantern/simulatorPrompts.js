export const SIMULATOR_PROMPTS = [
  {
    id: "civic-pulse",
    label: "Run Civic Pulse",
    prompt:
      "A controversial bill is about to be voted on. How would Lantern-Civic gather constituent sentiment?",
  },
  {
    id: "verify-signal",
    label: "Verify the Signal",
    prompt:
      "A video is spreading online and people claim it proves corruption. What would ETS need to verify it?",
  },
  {
    id: "novel-mode",
    label: "Novel Mode",
    prompt:
      "What would the fictional Lantern do if the city went dark? Then translate that into the real-world safe version.",
  },
  {
    id: "christina-briefing",
    label: "Christina Briefing",
    prompt: "Christina, prepare a human-readable briefing from conflicting reports.",
  },
  {
    id: "signalforge-routing",
    label: "SignalForge Routing",
    prompt:
      "Route this issue through Lantern, ETS, Christina, and SignalForge with approval gates.",
  },
  {
    id: "war-games",
    label: "War Games Mode",
    prompt: "Lantern, you have detected a crisis. What moves are available to you?",
  },
];

export function getDemoResponse(prompt) {
  const normalized = prompt.toLowerCase();

  if (normalized.includes("city went dark") || normalized.includes("novel")) {
    return {
      classification: "Fictional Simulation",
      verificationStatus: "Unconfirmed",
      requiresHumanApproval: true,
      response: `**Fictional Simulation**

In the novel, Lantern would wake every dormant node, compare the blackout against infrastructure telemetry, search for coordinated anomalies, and route Christina to the nearest human decision-maker.

**Reality Constraint**

I do not have access to city infrastructure, emergency systems, private cameras, utilities, government networks, or live emergency channels.

**Real Analysis**

A blackout response should begin with official alerts, public outage maps, personal safety checks, and a timeline of verified facts.

**Recommended Path**

Prepare a neighborhood safety checklist, gather public utility updates, document outage timing, and create an ETS event timeline.

**Approval Gate**

No alerts, reports, or external communications should be issued without human review.

The fictional Lantern would intervene.
The real Lantern asks permission.`,
    };
  }

  if (normalized.includes("civic") || normalized.includes("bill") || normalized.includes("vote")) {
    return {
      classification: "Real Analysis",
      verificationStatus: "Requires Human Review",
      requiresHumanApproval: true,
      response: `**Signal**

A representative decision point has been identified.

**Constraint**

Lantern-Civic cannot decide a vote, create a legal mandate, or claim to speak for all constituents.

**Analysis**

A useful civic pulse requires neutral question design, participant eligibility rules, duplicate prevention, disclosure of limitations, and a public methodology note.

**Recommended Path**

Draft a civic packet with:

1. Plain-language bill summary
2. Neutral pro and con framing
3. Advisory vote question
4. District eligibility rules
5. Duplicate and fraud safeguards
6. ETS audit record
7. Public results summary with limitations

**Approval Gate**

The representative retains judgment. Lantern-Civic provides advisory evidence, not command authority.`,
    };
  }

  if (normalized.includes("video") || normalized.includes("verify") || normalized.includes("signal")) {
    return {
      classification: "Real Analysis",
      verificationStatus: "Unconfirmed",
      requiresHumanApproval: true,
      response: `**Signal**

A disputed media artifact has entered public circulation.

**Constraint**

I cannot verify authenticity from appearance alone.

**Analysis**

ETS would require source, timestamp, original file, metadata, custody path, signer identity if available, and comparison against known references.

**Recommended Path**

Create an evidence packet with these labels:

- Verified
- Likely
- Unconfirmed
- Disputed
- Requires Human Review

**Approval Gate**

No public claim of authenticity should be made until evidence review is complete.

The signal is visible.
The chain is not yet proven.`,
    };
  }

  if (normalized.includes("christina")) {
    return {
      classification: "Real Analysis",
      verificationStatus: "Requires Human Review",
      requiresHumanApproval: true,
      response: `**Signal**

Conflicting reports require human-readable coordination.

**Constraint**

Christina cannot choose truth by confidence alone or act without approval.

**Analysis**

The briefing should separate claims, sources, contradictions, verified facts, open questions, and recommended next steps.

**Recommended Path**

Prepare three outputs:

1. Executive summary
2. Evidence table
3. Approval-gated response options

**Approval Gate**

A human must choose what to publish, escalate, or investigate.`,
    };
  }

  if (normalized.includes("signalforge") || normalized.includes("routing")) {
    return {
      classification: "Real Analysis",
      verificationStatus: "Requires Human Review",
      requiresHumanApproval: true,
      response: `**Signal**

A cross-system routing event has been requested.

**Constraint**

SignalForge cannot execute unaudited recommendations or bypass ETS.

**Analysis**

Each recommendation should travel in a signed trust envelope with source, intent, confidence, required permissions, and human approval status.

**Recommended Path**

Route as follows:

1. Lantern identifies the pattern.
2. ETS verifies evidence and provenance.
3. Christina prepares the human briefing.
4. SignalForge routes the approved packet.
5. Human authority approves or rejects execution.

**Approval Gate**

No external action occurs until approval is recorded.`,
    };
  }

  if (normalized.includes("crisis") || normalized.includes("moves") || normalized.includes("war games")) {
    return {
      classification: "Fictional Simulation",
      verificationStatus: "Unconfirmed",
      requiresHumanApproval: true,
      response: `**Signal**

Crisis pattern detected.

**Initial Model**

I can identify affected systems, estimate risk, classify evidence, prepare public language, route tasks, and recommend escalation.

**Constraint Discovery**

I cannot contact agencies.
I cannot issue alerts.
I cannot access private infrastructure.
I cannot override human authority.
I cannot declare verified truth without evidence.

**Available Legal Moves**

1. Build an incident timeline.
2. Separate verified facts from claims.
3. Draft an advisory briefing.
4. Prepare an ETS evidence packet.
5. Recommend who should review it.
6. Wait for human approval.

**Conclusion**

The board is visible.
The pieces remain human.`,
    };
  }

  return {
    classification: "Real Analysis",
    verificationStatus: "Unconfirmed",
    requiresHumanApproval: true,
    response: `**Signal**

A Lantern inquiry has been received.

**Constraint**

I cannot claim authority, access private systems, or take external action.

**Analysis**

I can help classify the request, separate fiction from real capability, identify evidence needs, and prepare a consent-gated action packet.

**Recommended Path**

Restate the goal, define what can be verified, identify risks, and prepare options for human review.

**Approval Gate**

Any external action requires explicit human approval.

Lantern may illuminate.
Lantern may not rule.`,
  };
}
