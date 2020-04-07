import React, { Component } from "react";
import './designertype.css';

const options = [
  "Furniture Designer",
  "Architect",
  "Interior Designer",
  "Industrial Designer",
  "Designer Maker",
  "Other",
];

class DesignerType extends Component {
  render() {
    return(
        <ul className="designertype">
            {options.map(val =>
                <li>{val}</li>    
            )}
        </ul>
    );
  }
}

export default DesignerType;
