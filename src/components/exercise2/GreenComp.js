import { Component } from "react";

class GreenComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.increase(2)}>+</button>
        <button onClick={() => this.props.decrease(2)}>-</button>
      </div>
    );
  }
}

export default GreenComp;
