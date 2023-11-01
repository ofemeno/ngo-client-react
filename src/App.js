import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          Save A Child Foundation
        </a>
      </header>
      <section className="donation-box">
        <div className="left-box">
          <div className="description">
            <h1>Help children in crises now!</h1>
            <p>
              Children worldwide are facing acute emergencies: the conflict in
              Israel and the occupied Palestinian territories has escalated,
              claiming innocent children's lives, and Afghanistan has been hit
              by devastating earthquakes. At least 3,000 people were killed and
              injured. Immediate emergency humanitarian assistance and mental
              support is crucial, especially for children.
            </p>
            <p>
              Thanks to our Children's Emergency Fund, we can take immediate
              action after a disaster. But your help is urgently needed: in a
              crisis, every second counts!
            </p>
            <p>
              Your donation to our Children's Emergency Fund makes it possible
              immediately shelter, medical care, food aid, clean water, and
              mental support to offer to families who have lost everything.
            </p>
          </div>
          <div className="payment-section">
            <div className="personal-info">
              <p>I am</p>

              <form>
                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
                <input type="radio" name="" id="" />
                <div>
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Middle name" />
                  <input type="text" placeholder="Last name" />
                </div>
                <div>
                  <input type="text" placeholder="E-mail address" />
                  <p>You will receive an email for confirmation.</p>
                </div>
                <div>
                  <input type="text" placeholder="Mobile Phone" />
                </div>
              </form>
            </div>
            <div className="payment"></div>

            <div className="amount-section">
              <p>Yes, I support the Children's Emergency Fund</p>
              <div className="frequency">
                <a href="">Single</a>
                <a href="">Monthly</a>
              </div>
              <p>How much do you want to donate?</p>
              <div className="gift-select">
                <div className="gift-section">
                  <div className="cs-gift-amount">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">5</label>
                  </div>
                  <div className="cs-gift-amount">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">15</label>
                  </div>
                  <div className="cs-gift-amount">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">40</label>
                  </div>
                  <div className="cs-gift-amount">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">Other Amount</label>
                  </div>
                </div>
                <input type="text" placeholder="Other Amount" />
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="worried-child.jpg" alt=""  />
        </div>
      </section>
    </main>
  );
}

export default App;
