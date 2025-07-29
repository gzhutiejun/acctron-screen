export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-card-container">
          <img src="/images/visa.svg" />
          <img src="/images/mastercard.svg" />
          <img src="/images/unionpay.svg" />
        </div>
        <div className="card-instruction">
          <span>Please insert your card</span>
          <div className="card-slot-icon">💳</div>
        </div>
      </div>
    </div>
  );
}
