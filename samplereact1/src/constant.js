import React, { Component, Fragment } from "react";
class Constant extends Component {
  state = {
    flu_drugs: [
      {
        type: "vaccine",
        name: "fluzen quadravealent",
        price_old: "$40.00",
        price_new: "$40.00"
      },
      {
        type: "vaccine",
        name: "fluzen quadravealent",
        price_old: "$40.00",
        price_new: "$40.00"
      },
      {
        type: "vaccine",
        name: "fluzen quadravealent",
        price_old: "$40.00",
        price_new: "$40.00"
      },
      {
        type: "vaccine",
        name: "fluzen quadravealent",
        price_old: "$40.00",
        price_new: "$40.00"
      }
    ]
  };

  render() {
    const drugs = this.state.flu_drugs.map(drugs => {
      return (
        <div className="drugs-container">
          <div className="drugs-text">
            <span className="badge">{drugs.type}</span>
            <h3 className="drugs-name drugs-sub-container">{drugs.name}</h3>
          </div>
          <div className="old-price drugs-sub-container">
            {drugs.price_old}
            <span className="caret"></span>
          </div>

          <div className=" new-price-wrapper drugs-sub-container">
            <span>as low as</span>
            <span className="new-price">
              {drugs.price_new} <sup className="muted">*</sup>
            </span>
          </div>
        </div>
      );
    });
    return (
      <>
        <div className="main">
          <h1 className="drugs-heading">Top flu drugs</h1>
          <div className="drugs-wrapper">{drugs}</div>
        </div>
        <div className="button-container">
          <button className="coupon-genrate-button"> Get free coupon</button>
          <p className="muted">
            <sup>*</sup>
            <span>avarge price</span>
          </p>
        </div>
      </>
    );
  }
}

export default Constant;
