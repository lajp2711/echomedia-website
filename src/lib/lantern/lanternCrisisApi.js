import { getDemoResponse } from "./simulatorPrompts";

const DEFAULT_SIMULATOR_API_PATH = "/api/lantern/crisis";
const DEFAULT_REWARD_API_PATH = "/api/rewards/lantern-crisis/claim";

export async function getLanternCrisisResponse(message, options = {}) {
  const { useApi = false, apiPath = DEFAULT_SIMULATOR_API_PATH, signal } = options;

  if (!useApi) {
    return getDemoResponse(message);
  }

  try {
    const response = await fetch(apiPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal,
      body: JSON.stringify({
        message,
        mode: "demo",
        consent: false,
        externalActionAllowed: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Lantern API returned ${response.status}`);
    }

    const data = await response.json();

    return {
      classification: data.classification || "Real Analysis",
      verificationStatus: data.verificationStatus || "Requires Human Review",
      requiresHumanApproval: data.requiresHumanApproval !== false,
      response:
        data.response ||
        "Lantern received the signal, but the response packet was empty. Advisory mode remains active.",
    };
  } catch (error) {
    console.warn("Lantern API unavailable. Falling back to demo response.", error);
    return getDemoResponse(message);
  }
}

export async function claimLanternReward(payload, options = {}) {
  const { apiPath = DEFAULT_REWARD_API_PATH, signal } = options;

  try {
    const response = await fetch(apiPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal,
      body: JSON.stringify({
        ...payload,
        campaignId: payload.campaignId || "lantern-crisis-v1",
        externalActionAllowed: false,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        ok: false,
        status: data.status || "error",
        message:
          data.message ||
          "The reward claim endpoint could not accept the request. Please try again later.",
      };
    }

    return {
      ok: true,
      status: data.status || "accepted",
      message: data.message || "Reward link queued for delivery.",
      claimId: data.claimId,
    };
  } catch (error) {
    console.warn("Lantern reward API unavailable.", error);
    return {
      ok: false,
      status: "offline",
      message:
        "The reward system is not connected yet. The signal was found, but the archive door is still being wired.",
    };
  }
}
