import { Component } from "react";

class BlueComp extends Component {
    constructor(props) {
        super(props)
        
      }
    
      render() {
        return (
          <div>
            <button onClick={() => this.props.increase(1)}>+</button>
            <button onClick={() => this.props.decrease(1)}>-</button>
          </div>
        );
      }
    }

export default BlueComp;
