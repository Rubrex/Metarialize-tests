import React, { Component } from "react";
import "./style.css";

class metarialize extends Component {
  constructor(props) {
    super(props);

    this.state = { textColor: true };
  }

  render() {
    const classes = [];
    if (this.state.textColor) {
      classes.push("greenc");
    }
    if (!this.state.textColor) {
      classes.push("redc");
    }
    const changeColor = () => {
      if (this.state.textColor) this.setState({ textColor: false });
      else this.setState({ textColor: true });
    };
    return (
      <div>
        <div>
          <h1 className={classes.join(" ")}>Change My Color</h1>
          <button
            class="waves-effect waves-light btn"
            style={{ backgroundColor: "#28615b" }}
            onClick={changeColor}
          >
            Switch Color
          </button>
        </div>
      </div>
    );
  }
}

export default metarialize;
