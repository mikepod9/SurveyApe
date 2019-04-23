import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="SurveyApe" //who we pay to
        description="$5 for 5 survey credits"
        amount={500} //amount of money in US cents
        token={token => this.props.handleToken(token)} //Authorization token returned by stripe in the given callbakc function
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
