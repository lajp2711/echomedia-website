export const RewardModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>You found the signal.</h2>
        <p>The fictional Lantern would open the archive. The real Lantern asks permission.</p>
        <p>Enter your email and we’ll send you a digital copy from the Lantern Protocol archive.</p>
        <input type="email" placeholder="email@example.com" id="reward-email" />
        <label>
          <input type="checkbox" id="consent" /> I agree to receive the digital download link.
        </label>
        <button onClick={() => { /* API call logic */ }}>Claim Reward</button>
        <p className="privacy">Privacy: We store minimal data. No marketing unless opted in.</p>
      </div>
    </div>
  );
};
