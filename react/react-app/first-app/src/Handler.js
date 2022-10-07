// import React, { Component } from "react";

// export default class Handler extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "Hello World!",
//     };

//     this.changeText = this.changeText.bind(this);
//   }

//   changeText = (e) => {
//     this.setState({ text: "Goodbye World!" });
//   };
//   render() {
//     return (
//       <>
//         <h1>{this.state.text}</h1>
//         <button onClick={this.changeText}>클릭</button>
//       </>
//     );
//   }
// }

// import React, { Component } from "react";

// export default class Handler extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "검정색 글씨",
//       color: "black",
//     };

//     this.redColor = this.redColor.bind(this);
//     this.blueColor = this.blueColor.bind(this);
//   }
//   redColor = (e) => {
//     this.setState({ text: e.target.innerText + " 글씨", color: "red" });
//   };

//   blueColor = (e) => {
//     this.setState({ text: e.target.innerText + " 글씨", color: "blue" });
//   };

//   render() {
//     return (
//       <>
//         <h1 style={{ color: this.state.color }}>{this.state.text}</h1>
//         <button onClick={this.redColor}>빨간색</button>
//         <button onClick={this.blueColor}>파란색</button>
//       </>
//     );
//   }
// }

import React, { Component } from "react";

export default class Handler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "안녕하세요",
      button: "사라져라",
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText = () => {
    if (this.state.text === "안녕하세요") {
      this.setState({ text: "", button: "보여라" });
    } else {
      this.setState({ text: "안녕하세요", button: "사라져라" });
    }
  };
  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <button onClick={this.changeText}>{this.state.button}</button>
      </>
    );
  }
}
