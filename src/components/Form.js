import React from "react";

const Form = props => {
  return (
    <div className="form-container">
      <form onSubmit={props.getWeather}>
        <div className="input-container">
          <input
            type="text"
            name="country"
            placeholder="Country..."
            required
            autoComplete="off"
          />
          <input
            type="text"
            name="city"
            required
            placeholder="City..."
            autoComplete="off"
          />
        </div>
        <div className="button-container">
          <button>Get Weather</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
