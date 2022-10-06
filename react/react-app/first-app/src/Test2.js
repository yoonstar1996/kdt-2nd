// import { Component } from "react";
import img from "./잔디.jpg";

// class Test2 extends Component {
//   render() {
//     let style = {
//       color: "orange",
//       fontSize: "40px",
//       marginTop: "20px",
//     };
//     return (
//       <>
//         <div style={style}>
//           <h2>안녕하세요</h2>
//           <img src={img} alt="잔디"></img>
//         </div>
//       </>
//     );
//   }
// }

function Test2() {
  const style = {
    color: "orange",
    fontSize: "40px",
    marginTop: "20px",
  };
  return (
    <>
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={img} alt="잔디"></img>
      </div>
    </>
  );
}

export default Test2;
