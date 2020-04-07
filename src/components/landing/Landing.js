import React, { Component } from "react";
import "./landing.css";
import designer from "./designer.png";
import maker from "./maker.png";
import both from "./360.png";

class Landing extends Component {
  render() {
    return (
      <ul className="landing">
        <div>
          <li>
            <img src={designer} alt="designer" height="70" width="70" />
            <br />
            Designer
          </li>
        </div>
        <div>
          <li>
            <img src={maker} alt="maker" height="70" width="70" />
            <br />
            Maker
          </li>
        </div>
        <div>
          <li>
            <img src={both} alt="both" height="70" width="70" />
            <br />
            Both
          </li>
        </div>
      </ul>
    );
  }
}

export default Landing;
