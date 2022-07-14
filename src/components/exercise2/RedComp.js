import { Component } from "react";

class RedComp extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.increase(0)}>+</button>
        <button onClick={() => this.props.decrease(0)}>-</button>
      </div>
    );
  }
}

export default RedComp;
