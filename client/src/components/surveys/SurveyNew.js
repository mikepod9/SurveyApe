import React from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends React.Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showReview: false })}
        />
      );
    }

    return (
      <SurveyForm onSurveySumbit={() => this.setState({ showReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// trick that overwrites the form so that values are dumped when a user leaves the page
export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
