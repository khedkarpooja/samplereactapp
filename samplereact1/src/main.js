import React, { Component, Fragment } from "react";
import { FLU_DRUGS } from "./constants";
class Main extends Component {
  state = {
    drugsList: FLU_DRUGS
  };
  render() {
    const drugs = this.state.drugsList.map(drugs => {
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
            <span className = "price-lable">as low as</span>
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
            <span>avarage price</span>
          </p>
        </div>
      </>
    );
  }
}

export default Main;
