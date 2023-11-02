import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DonationPage() {
  const backgroundStyle = {
    backgroundImage: 'url("/worried-child.jpg")',
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
  };

  const [donation, setDonation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  function handleCheckout(e) {
    e.preventDefault();
    if(!donation || !name || !email ){
        return;
    }
    setShowCheckout(true);
  }

  function handleManaulAmount(e) {
    e.preventDefault();
    if (!isNaN(e.target.value)) {
      setDonation(e.target.value);
    } else {
      setDonation("");
    }
  }
  function handleFrequency(e){
    e.target.preventDefault()
  }
  function handleNameInput(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleEmailInput(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  return (
    <>
      <div className="donation-page" style={backgroundStyle}>
        <div className="row">
          <div className="col">
            {!showCheckout ? (
              <div className="form-container">
                <h2>Choose a donation amount</h2>
                <div className="options">
                  <input type="radio" name="options" id="ten" />
                  <label htmlFor="ten">$10</label>

                  <input type="radio" name="options" id="twentyfive" />
                  <label htmlFor="twentyfive">$25</label>

                  <input type="radio" name="options" id="fifty" />
                  <label htmlFor="fifty">$50</label>
                </div>

                <input
                  type="text"
                  value={donation}
                  placeholder="Other Amount"
                  onChange={handleManaulAmount}
                />

                <h2>Choose donation frequency</h2>
                <div className="frequency">
                  <input type="radio" name="frequency" id="monthly" />
                  <label htmlFor="monthly">Monthly</label>

                  <input type="radio" name="frequency" id="ont-time" />
                  <label htmlFor="ont-time">One time</label>
                </div>
                <h2>Your Information</h2>
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  autoCorrect="false"
                  onChange={handleNameInput}
                />
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  autoCorrect="false"
                  onChange={handleEmailInput}
                />
                <div className="action-box">
                  <Link href="">Cancel</Link>
                  <Link href="" onClick={handleCheckout}>
                    Go to checkout
                  </Link>
                </div>
              </div>
            ) : (
              <div className="strip-checkout"></div>
            )}
          </div>
          <div className="col">
            <div>
              <p>Help</p>
              <p>children</p>
              <p>in crises now!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
