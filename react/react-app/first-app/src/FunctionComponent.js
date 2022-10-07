// import PropTypes from "prop-types";

// const FunctionComponent = (props) => {
//   let { title, children } = props;
//   return (
//     <>
//       <div>제목 : {title}</div>
//       <div>이름 : {props.name}</div>
//       <div>안녕</div>
//       <div>{children}</div>
//     </>
//   );
// };

// FunctionComponent.defaultProps = {
//   title: "기본 제목",
//   name: "기본 이름",
//   children: "기본 자식",
// };

// FunctionComponent.propTypes = {
//   title: PropTypes.string,
//   number: PropTypes.number,
//   func: PropTypes.func,
// };

// import React, { useState } from "react";

// export default function FunctionComponent(props) {
//   let [number, setNumber] = useState(0);
//   const changeNumber = () => {
//     setNumber(number + 1);
//   };
//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={changeNumber}>+1</button>
//       <button
//         onClick={() => {
//           setNumber(number + 1);
//         }}
//       >
//         +1
//       </button>
//     </>
//   );
// }

import React, { useState } from "react";

export default function FunctionComponent(props) {
  let [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };
  const Decrease = () => {
    setNumber(number - 2);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </>
  );
}
