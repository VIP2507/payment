import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import 'bootstrap/dist/css/bootstrap.min.css';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("API_KEY");

const successMessage = () => {
  return (
    <div className="success-msg">
      <div className="title">Payment Successful</div>
    </div>
  )
}

const cart = () => {
  return (<React.Fragment>
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-muted">Your cart</span>
      <span className="badge bg-secondary badge-pill">3</span>
    </h4>
    <ul className="list-group mb-3">
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Product name</h6>
          <small className="text-muted">Brief description</small>
        </div>
        <span className="text-muted">₹1200</span>
      </li>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Second product</h6>
          <small className="text-muted">Brief description</small>
        </div>
        <span className="text-muted">₹800</span>
      </li>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Third item</h6>
          <small className="text-muted">Brief description</small>
        </div>
        <span className="text-muted">₹500</span>
      </li>
      <li className="list-group-item d-flex justify-content-between bg-light">
        <div className="text-success">
          <h6 className="my-0">Promo code</h6>
          <small>EXAMPLECODE</small>
        </div>
        <span className="text-success">-₹500</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (INR)</span>
        <strong>₹2000</strong>
      </li>
    </ul>
  </React.Fragment>)
}

function App() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h4 style={{fontFamily:'cursive',fontWeight:'bold',color:'#2f2f2f'}}>PAYMENT</h4>
      </div>

      <div className="row s-box">
        {paymentCompleted ? successMessage() : <React.Fragment>
          <div className="col-md-5 order-md-2 mb-4">
            {cart()}
          </div>
          <div className="col-md-7 order-md-1">
            <Elements stripe={stripePromise}>
              <CheckoutForm amount={2000} setPaymentCompleted={setPaymentCompleted} />
            </Elements>
          </div>
        </React.Fragment>}
      </div>

    </div>
  );
}

export default App;
