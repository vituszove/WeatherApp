import React from "react";

const Weather = props => {
  return (
    <div className="data-container">
      {props.description && <p className="condition">{props.description}</p>}
      {props.temperature && (
        <p className="temperature">
          {props.temperature}
          <span>&#176;C</span>
        </p>
      )}
      {props.city && props.country && (
        <p className="cc">
          {props.city} {props.country}
        </p>
      )}

      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Weather;
