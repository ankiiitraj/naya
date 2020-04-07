import React, { Component } from "react";
import "./App.css";
import Nav from "./components/navigation/Nav";
import ModalBox from "./components/ModalBox";
import Cookie from 'js-cookie';

const light = {
  backgroundColor: "white",
  color: "black",
  transition: 'background 1s ease, padding 0.8s linear',
};
const dark = {
  backgroundColor: "black",
  height: '100%',
  color: "white",
  transition: 'background 1s ease, padding 0.8s linear',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    // eslint-disable-next-line
      theme: (Cookie.get('theme') == 0 ? dark : light),
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.state.theme === light ? Cookie.set('theme', 0, {expires: 30}) : Cookie.set('theme', 1, {expires: 30});
    let toggleTo = this.state.theme === light ? dark : light;
    this.setState({
      theme: toggleTo,
    });
  }

  render() {
    return (
      <div style={this.state.theme}>
        <center>
          <div style={{ width: "100%", maxWidth: "1140px", height: '100vh' }}>
            <Nav
              handleToggle={this.handleToggle}
              color={this.state.theme.color}
            />
            <ModalBox />
          </div>
        </center>
      </div>
    );
  }
}

export default App;
