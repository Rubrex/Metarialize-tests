import React, { Component } from "react";

export default class metarialize extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <a class="waves-effect waves-light btn">button</a>
        <a class="waves-effect waves-light btn">
          <i class="material-icons left">cloud</i>button
        </a>
        <a class="waves-effect waves-light btn">
          <i class="material-icons right">cloud</i>button
        </a>
      </div>
    );
  }
}
