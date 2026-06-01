export const claimReward = async (email) => {
  // Logic for single-use token issuance and email dispatch
  const response = await fetch('/api/v1/lantern/claim', {
    method: 'POST',
    body: JSON.stringify({ email, timestamp: Date.now() }),
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
};
