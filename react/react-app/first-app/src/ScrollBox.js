import React, { Component } from "react";

export default class ScrollBox extends Component {
  goTop = () => {
    const box = this.box;
    box.scrollTop = 0;
  };
  goBottom = () => {
    const box = this.box;
    // console.log(box.clientHeight);
    // console.log(box.scrollHeight);
    box.scrollTop = box.scrollHeight;
  };
  render() {
    return (
      <>
        <div
          className="wrapper3"
          ref={(ref) => {
            this.box = ref;
          }}
        >
          <div className="blackbox"></div>
        </div>
        <button onClick={this.goTop}>맨 위로</button>
        <button onClick={this.goBottom}>맨 밑으로</button>
      </>
    );
  }
}
