import React, { Component } from "react";

export default class RefTest extends Component {
  aaa = () => {
    console.log(this.box);
    console.log(this.box2.current);
    this.input.focus();
  };

  constructor(props) {
    super(props);
    this.box2 = React.createRef();
  }
  render() {
    return (
      <>
        <div
          ref={(ref) => {
            this.box = ref;
          }}
        >
          box
        </div>
        <div ref={this.box2}>box2</div>
        <input
          type="text"
          ref={(ref) => {
            this.input = ref;
          }}
        ></input>
        <button onClick={this.aaa}>버튼</button>
      </>
    );
  }
}
