import React from "react";

// props.input redux-form specific event handler
const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      {/* ES6 {...input} === onChange={input.onChange} onBlur==={onBluer} etc. */}
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {" "}
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
