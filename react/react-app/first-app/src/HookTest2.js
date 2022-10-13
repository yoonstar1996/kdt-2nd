import React from "react";

// export default function HookTest() {
//   let [name, setName] = useState("");
//   let [pw, setPw] = useState("");
//   let input = useRef(null);

//   useEffect(() => {
//     console.log("mount");
//     // var num = 0;
//     // var timeout = setInterval(() => {
//     //   console.log("time : ", num++);
//     // }, 1000);

//     // return () => {
//     //   clearInterval(timeout);
//     // };

//     console.log(input.current);
//   }, []);

//   useEffect(() => {
//     console.log("update");
//   }, [name]);

//   useEffect(() => {
//     console.log("update2");
//   }, [name, pw]);
//   return (
//     <>
//       <input
//         ref={input}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       ></input>
//       <input
//         type="password"
//         onChange={(e) => {
//           setPw(e.target.value);
//         }}
//       ></input>
//       <div>{name}</div>
//     </>
//   );
// }

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// export default function HookTest() {
//   let [state, setState] = useState({ width: 0 });
//   let box = useRef(null);

//   useEffect(() => {
//     setState({
//       width: document.body.offsetWidth,
//     });

//     window.addEventListener("resize", () => {
//       setState({
//         width: document.body.offsetWidth,
//       });
//     });
//   }, []);

//   useEffect(() => {
//     var num = 0;
//     var timeout = setInterval(() => {
//       console.log("time : ", num++);
//     }, 1000);

//     return () => {
//       clearInterval(timeout);
//     };
//   },[]);

//   useEffect(() => {
//     box.current.style.backgroundColor = getRandomColor();
//   }, [state]);

//   return (
//     <>
//       <div ref={box}>
//         width가 변할 때마다 배경 색상이 바뀌어요.
//         <br></br>
//         width : {state.width}
//       </div>
//     </>
//   );
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {...state, number:state.number + 1};
//     case "DECREMENT":
//       return {...state, number:state.number - 1};
//     default:
//       return state;
//   }
// }
// export default function HookTest() {
//   let [name, setName] = useState("");
//   let [pw, setPw] = useState("");
//   let [state, dispatch] = useReducer(reducer, {number:0, text:''});
//   return (
//     <>
//       <h1>{state.number}</h1>
//       <button onClick={()=>{ dispatch ({ type: "INCREMENT" }) }}> +1 </button>
//       <button onClick={()=>{ dispatch ({ type: "DECREMENT" }) }}> -1 </button>
//     </>
//   );
// }

// export default function HookTest() {
//   let [list, setList] = useState([]);
//   let [text, setText] = useState([]);

//   let inputNumber = useRef(null);

//   let buttonClick = useCallback(() => {
//     setText("test");
//   }, []);

//   let addNumber = useCallback(() => {
//     let newList = list.concat(Number(inputNumber.current.value));
//     setList(newList);
//   }, [list]);

//   let getAvg = () => {
//     console.log("list : ", list);
//     if (list.length === 0) return 0;
//     const sum = list.reduce((a, b) => a + b);
//     return sum / list.length;
//   };

//   let avg = useMemo(() => {
//     return getAvg();
//   }, [list]);
//   return (
//     <>
//       <input
//         value={text}
//         type="text"
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       ></input>
//       <button onClick={buttonClick}>test로 변경</button>
//       <div>
//         <input ref={inputNumber} type="number"></input>
//         <button onClick={addNumber}>추가</button>
//       </div>

//       {avg}

//       <ul>
//         {list.map((value, index) => {
//           return <li key={index}>{value}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

// import styles from "./HookTest2.module.css";
// import img from "./잔디.jpg";

// export default function HookTest2() {
//   return (
//     <>
//       <div className={`${styles.head} ${styles.circle}`}>
//         <div className={`${styles.white} ${styles.circle}`}>
//           <div className={`${styles.black} ${styles.circle}`}></div>
//         </div>
//         <div className={`${styles.neck} ${styles.circle}`}>
//           <div className={`${styles.body1} ${styles.circle}`}></div>
//           <div className={`${styles.body2} ${styles.circle}`}></div>
//           <div className={`${styles.body3} ${styles.circle}`}></div>
//           <img className="img" src={img} alt="잔디"></img>
//         </div>
//       </div>
//     </>
//   );
// }

export default function HookTest2() {
  return (
    <>
      <div>HookTest2</div>
    </>
  );
}
