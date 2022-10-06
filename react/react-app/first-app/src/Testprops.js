// import PropTypes from "prop-types";
// import img from "./book.jpg";

import { Component } from "react";

// const Testprops = (props) => {
//   let { title, author, price, type } = props;
//   // let { food } = props;
//   // const red = {
//   //   color: "red",
//   // };
//   return (
//     <>
//       {/* <span style={red}>{food}</span><span>맛있다</span> */}
//       <div className="wrapper">
//         <div className="title">{title}</div>
//         <img src={img} alt="book" className="book"></img>
//         <div className="content">나의 하루는 4시40분에 시작된다.</div>
//         <div className="author">저자 : {author}</div>
//         <div className="price">판매가 : {price}</div>
//         <div className="type">구분 : {type}</div>
//       </div>
//     </>
//   );
// };

// Testprops.defaultProps = {
//   food: "고기",
// };

class Testprops extends Component {
  render() {
    let { text, valid } = this.props;

    return (
      <>
        <div>{text}</div>
        <button onClick={valid}>콘솔 메세지</button>
      </>
    );
  }
}

Testprops.defaultProps = {
  text:"이건 기본 text props입니다."
}

export default Testprops;
