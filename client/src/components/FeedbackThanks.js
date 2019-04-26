import React from "react";
import axios from "axios";

class FeedbackThanks extends React.Component {
  state = {};

  async componentDidMount() {
    const url = window.location.pathname;
    const surveySubject = await axios.get("/api/surveys/thanks", {
      params: {
        surveyData: url
      }
    });
    this.setState({ surveySubject: surveySubject.data });
  }

  renderSubject() {
    if (this.state.surveySubject) {
      return (
        <p className="flow-text">
          Your vote for survey "{this.state.surveySubject}" has been counted.
        </p>
      );
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Thank You!</h1>
        <p className="flow-text">Your feedback is valuable to our users.</p>
        {this.renderSubject()}
      </div>
    );
  }
}

export default FeedbackThanks;
