import React, { Component } from "react";
import Landing from "./landing/Landing";
import Signin from "./signin/Signin";
import CapacityWork from "./capacity/CapacityWork";
import Material from "./material/Material";
import Location from "./Location";
import CapacityDesign from "./capacity/CapacityDesign";
import DesignerType from "./designerType/DesignerType";
import Education from "./Education";

class ModalBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        "What do you want to register as?",
        "SignUp",
        "How many projects on average do you work on every month?",
        "What kind of materials can you work with?",
        "Where are your based out of?",
        "How much time can you spend on Naya projects per week?",
        "Which of the following best describes you?",
				"Education level/type?",
				"Thankyou"
      ],
      answers: [],
      questionComponent: [<Landing />, <Signin />, <CapacityWork />, <Material />, <Location />, <CapacityDesign />, <DesignerType />, <Education />, "All Done!"],
			counter: 0,
			active: true,
		};
		this.handleClick = this.handleClick.bind(this);
  }

	handleClick(){
		let active = true;
		if(this.state.counter === 7){
			active = false;
		}
		this.setState({
			counter: this.state.counter +1,
			active: active,
		})
	}

  render() {
    return (
      <div
        style={{
					marginTop: '150px',
					padding: '20px',
          border: "solid #ccc 1px",
          borderRadius: "10px",
					width: 'max-content',
					minWidth: '500px',
          height: "max-content",
          // padding: "10px 3px",
        }}
      >
        <p>{this.state.questions[this.state.counter]}</p>
        {this.state.questionComponent[this.state.counter]}
        {this.state.active && <button onClick={this.handleClick}>Continue</button>}
      </div>
    );
  }
}

export default ModalBox;
