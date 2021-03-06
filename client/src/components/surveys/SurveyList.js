import React from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (this.props.surveys.length) {
      return this.props.surveys.reverse().map(survey => {
        return (
          <div className="card blue-grey lighten-2" key={survey._id}>
            <div className="card-content white-text">
              <button
                className="btn-floating btn-small white-text right red darken-2"
                onClick={() => this.props.deleteSurvey(survey._id)}
              >
                <i className="material-icons">delete</i>
              </button>
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="centered">
          <h5 className="header light grey-text">
            To create new surveys, click the icon at the bottom right corner
          </h5>
        </div>
      );
    }
  }

  render() {
    return <div className="container">{this.renderSurveys()}</div>;
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys, deleteSurvey }
)(SurveyList);
