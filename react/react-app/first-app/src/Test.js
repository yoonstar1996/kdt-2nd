// import { Component } from "react";

// class Test extends Component {
//   render() {
//     let name = "윤경민";
//     let my_style = {
//       backgroundColor: "blue",
//       color: "orange",
//       fontSize: "40px",
//       padding: "12px",
//     };
//     return (
//       <>
//         <div style={my_style}>{name}</div>
//       </>
//     );
//   }
// }

function Test() {
  let name = "윤경민";
  let my_style = {
    backgroundColor: "blue",
    color: "orange",
    fontSize: "40px",
    padding: "12px",
  };
  return (
    <>
      <div style={my_style}>{name}</div>
    </>
  );
}

export default Test;
