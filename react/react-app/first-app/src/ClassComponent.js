// import { Component } from "react";

///클래스형 컴포넌트는 메소드 안에서 작성///
// class ClassComponent extends Component {
//   static defaultProps = {};
//   static propTypes = {
//     title: this.propTypes.string,
//   };
//   //메소드//
//   render() {
//     let { title } = this.props;
//     return (
//       <>
//         <div>안녕??</div>
//         <div>클래스형 컴포넌트</div>
//         <div>{title}</div>
//       </>
//     );
//   }
// }
// class ClassComponent extends Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     number: 0,
//   //     text: "안녕하세요",
//   //   };
//   // }
//   state = {
//     number: 0,
//     text: "안녕하세여",
//   };
//   render() {
//     let { number, text } = this.state;
//     return (
//       <>
//         <h1>{number}</h1>
//         <div>{text}</div>
//         <button
//           onClick={() => {
//             this.setState((prev) => {
//               return { number: prev.number + 1 };
//             });
//             this.setState((prev) => {
//               return { number: prev.number + 1 };
//             });
//             // this.setState({ number: this.state.number + 1 });
//           }}
//         >
//           1
//         </button>
//       </>
//     );
//   }
// }

// export default ClassComponent;

// import React, { Component } from "react";

// export default class ClassComponent extends Component {
//   state = {
//     number: 0,
//   };
//   render() {
//     let { number } = this.state;
//     return (
//       <>
//         <h1>{number}</h1>
//         <button
//           onClick={() => {
//             this.setState((prev) => {
//               return {
//                 number: prev.number + 2,
//               };
//             });
//           }}
//         >
//           +2
//         </button>
//         <br />
//         <button
//           onClick={() => {
//             this.setState((prev) => {
//               return {
//                 number: prev.number - 1,
//               };
//             });
//           }}
//         >
//           -1
//         </button>
//       </>
//     );
//   }
// }

import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    this.changeNumber = this.changeNumber.bind(this);
  }

  changeNumber = (e) => {
    console.log(e.target.innerText);
    this.setState({ number: this.state.number + 1 });
  };
  consoleLog(e, name) {
    console.log(e.target.innerText);
    console.log(name, "하이");
  }

  render() {
    return (
      <>
        {/* <button
          onClick={() => {
            this.consoleLog("윤경민");
          }}
        >
          버튼
        </button>
        <button onClick={this.consoleLog.bind(this, "윤경민")}>버튼</button> */}
        <h1>{this.state.number}</h1>
        <button
          onClick={(e) => {
            this.consoleLog(e, "윤경민");
          }}
        >
          버튼
        </button>
      </>
    );
  }
}
