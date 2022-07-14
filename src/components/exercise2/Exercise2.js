import React, { Component } from "react";
import RedComp from "./RedComp";
import BlueComp from "./BlueComp";
import GreenComp from "./GreenComp";
import "./Style.css";

class Exercise2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      blue: 0,
      green: 0,
    };
  }

  increase = (type) => {
    switch (type) {
      case 0:
        if (this.state.red >= 0 && this.state.red < 255) {
          this.setState({ red: this.state.red + 1 });
        }
        break;

      case 1:
        if (this.state.blue >= 0 && this.state.blue < 255) {
          this.setState({ blue: this.state.blue + 1 });
        }
        break;

      case 2:
        if (this.state.green >= 0 && this.state.green < 255) {
          this.setState({ green: this.state.green + 1 });
        }
        break;
      default:
        console.log(type);
    }
  };

  decrease = (type) => {
    switch (type) {
      case 0:
        if (this.state.red > 0 && this.state.red < 255) {
          this.setState({ red: this.state.red - 1 });
        }
        break;

      case 1:
        if (this.state.blue > 0 && this.state.blue < 255) {
          this.setState({ blue: this.state.blue - 1 });
        }
        break;

      case 2:
        if (this.state.green > 0 && this.state.green < 255) {
          this.setState({ green: this.state.green - 1 });
        }
        break;
      default:
        console.log(type);
    }
  };
  render() {
    return (
      <div className="wrapper">
        <div>
          <h2 className="red">Red</h2>
          <RedComp increase={this.increase} decrease={this.decrease} />

          <h2 className="blue">Blue</h2>
          <BlueComp increase={this.increase} decrease={this.decrease} />

          <h2 className="green">Green</h2>
          <GreenComp increase={this.increase} decrease={this.decrease} />
        </div>

        <div className="right">
          <p style={{backgroundColor: `rgb(${this.state.red} , ${this.state.blue} , ${this.state.green})` }}>
            RGB({this.state.red} , {this.state.blue} , {this.state.green})
          </p>
        </div>
      </div>
    );
  }
}

export default Exercise2;
