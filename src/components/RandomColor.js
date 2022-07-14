import { Component } from "react";
// import randomColor from "randomcolor";
import './Style.css'

class RandomColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: [],
    };
  }

  handleColor = () => {
    var myRandomColor =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    this.setState({ bgColor: [...this.state.bgColor, myRandomColor] });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleColor}>add color</button>
        <ul style={{listStyle: "none"}}>
        {this.state.bgColor.map((color, index) => (
            <li style={{ backgroundColor: color }} key={index}>
              {color}
            </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default RandomColor;
