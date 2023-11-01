import React from "react";

export default function DonationPage() {
  return (
    <div className="donation-page">
      <div className="row">
        <div className="col">
          <div className="form-container">
            <p>Choose a donation amount</p>
            <div className="options">
            <div>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <input type="radio" name="" id="" />
              </div>
            </div>
            <a href="">Enter a custom donation</a>

            <p>Choose donation frequency</p>
            <div className="frequency">
              <div>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <input type="radio" name="" id="" />
              </div>
            </div>
            <div className="action-box">
                <a href="">Cancel</a>
                <a href="">Go to checkout</a>
            </div>
          </div>
        </div>
        <div className="col">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          consequatur quibusdam minima nihil est delectus recusandae
          voluptatibus, temporibus tempora deserunt. Dolore, nobis cupiditate in
          sunt porro harum aperiam praesentium dicta.
        </div>
      </div>
    </div>
  );
}
