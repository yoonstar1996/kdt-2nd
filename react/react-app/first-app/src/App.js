// import logo from "./logo.svg";
import "./App.css";
// import img from "./잔디.jpg";
// import FunctionComponent from "./FunctionComponent";
// import ClassComponent from "./ClassComponent";
// import Test from "./Test";
// import Test2 from "./Test2";
// import Testprops from "./Testprops";
// import Handler from "./Handler";

///2022-10-05 리액트 수업////
// function App() {
//   // const teacher = "김소연";
//   // let classs = "";
//   // if (teacher == "김소연") {
//   //   classs = "kdt2기";
//   // } else {
//   //   classs = "누구?";
//   // }
//   // if (teacher == "김소연" && true)

//   // let styles = {
//   //   width: "100px",
//   //   height: "100px",
//   //   color: "blue",
//   //   backgroundColor: "yellow",
//   // };

//   // let name = "도라에몽";
//   // let animal = "고양이";

//   // let a = 10;
//   // let b = 5;

//   // var title = "Hello World";

//   return (
//     <>
//       {" "}
//       {/**여기부터 JSX문법 */}
//       {/* <div
//         style={{
//           width: "100px",
//           height: "100px",
//           color: "blue",
//           backgroundColor: "yellow",
//         }}
//       >
//         안녕
//       </div> */}
//       {/* <div className="App">안녕</div> */}
//       {/* <div>{teacher == "김소연" (조건) ? "kdt2기" (참) : "누구?" (거짓)}</div> */}
//       {/* 1번 실습 */}
//       {/* <div>
//         이것은 div입니다
//         <h3>이것은 div 안에 있는 h3태그 입니다</h3>
//       </div> */}
//       {/* 2번 실습 */}
//       {/* <h2>제 반려 동물의 이름은 <u>{name}</u>입니다.</h2>
//       <h2>
//       <u>{name}</u>은 <u>{animal}</u>입니다.
//       </h2> */}
//       {/* 3번 실습 */}
//       {/* <div> {3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</div> */}
//       {/* 4번 실습 */}
//       {/* <div>{a>b && (<div>a가 b보다 큽니다</div>)}</div> */}
//       {/* 5번 실습 */}
//       {/* <div className="test">{title}</div>
//       <div className="center">
//         아이디 : <input className="input"></input>
//         <br></br>
//         비밀번호 : <input className="input"></input>
//       </div> */}
//       {/* 6번 실습 */}
//       {/* <div className="flex">
//         <div className="red"></div>
//         <div className="orange"></div>
//         <div className="yellow"></div>
//         <div className="green"></div>
//         <div className="blue"></div>
//         <div className="navy"></div>
//         <div className="purple"></div>
//       </div> */}
//       {/* 애벌레 실습*/}
//       {/* <div className="head circle">
//         <div className="white circle">
//           <div className="black circle"></div>
//         </div>
//         <div className="neck circle">
//           <div className="body1 circle"></div>
//           <div className="body2 circle"></div>
//           <div className="body3 circle"></div>
//           <img className="img" src={img} alt="잔디"></img>
//         </div>
//       </div> */}
//     </>
//   );
// }

// function App() {
//   function msg() {
//     console.log("콘솔 띄우기 성공!");
//   };
//   return (
//     <>
//       {/* <div>kdt 2기</div> */}
//       {/* <FunctionComponent title="1" name="윤경민">자식</FunctionComponent>
//       <FunctionComponent title="bbb" />
//       <ClassComponent title="cccc"></ClassComponent> */}
//       {/* <Test></Test>
//        <Test2></Test2> */}
//       {/* <Testprops food="햄버거"></Testprops><br></br>
//       <Testprops></Testprops> */}
//       {/* <Testprops
//         title="이번주 베스트셀러"
//         author="김유진"
//         price="13,500원"
//         type="자기계발서"
//       ></Testprops> */}
//       <Testprops
//         text="App컴포넌트에서 넘겨준 text props입니다."
//         valid={msg}
//       ></Testprops>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       {/* <ClassComponent></ClassComponent> */}
//       {/* <FunctionComponent></FunctionComponent> */}
//       <Handler></Handler>
//     </>
//   );
// }

// import { useEffect, useState } from "react";

// function App() {
//   // let items = list.map((value, id) => {
//   // console.log("value : ", value);
//   // console.log("id : ", id);
//   // return value + id;
//   // });
//   // console.log("items : ", items);
//   // let list = ["a", "b", "c", "d", "e"];

//   let listTemp = [
//     { id: 1, value: "a" },
//     { id: 2, value: "b" },
//     { id: 3, value: "c" },
//     { id: 4, value: "d" },
//     { id: 5, value: "e" },
//   ];

//   let [list, setList] = useState(listTemp);
//   let [inputValue, setInput] = useState("");
//   let [inputId, setInputId] = useState(list.length + 1);

//   // let animals = ["dog", "tutle", "rabbit"];
//   // let newAnimals = animals.filter((animal) => {
//   //   return animal.length > 3;
//   // });
//   // console.log(newAnimals);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => {
//           setInput(e.target.value);
//         }}
//       ></input>
//       <button
//         type="button"
//         onClick={() => {
//           let newList = list.concat({ id: inputId, value: inputValue });
//           setList(newList);
//           setInput("");
//           setInputId(inputId + 1);
//         }}
//       >
//         추가
//       </button>
//       <ol>
//         {list.map((value) => {
//           return (
//             <li
//               key={value.id}
//               onDoubleClick={(e) => {
//                 let newList = list.filter((value2) => {
//                   console.log(e.target);
//                   return value2.id !== value.id;
//                 });
//                 setList(newList);
//               }}
//             >
//               {value.value}
//             </li>
//           );
//         })}
//       </ol>
//     </>
//   );
// }

// function App() {
//   let nameTemp = [
//     { id: 1, value: "코디" },
//     { id: 2, value: "윤소희" },
//   ];

//   let emailTemp = [
//     { id: 1, value: "codi@gmail.com" },
//     { id: 2, value: "yoonsohee@gmail.com" },
//   ];

//   let [name, setName] = useState(nameTemp);
//   let [nameValue, setNv] = useState("");
//   let [nameId, setNameId] = useState(name.length + 1);

//   let [email, setEmail] = useState(emailTemp);
//   let [emailValue, setEv] = useState("");
//   let [emailId, setEmailId] = useState(email.length + 1);

//   function addInfo() {
//     let newname = name.concat({ id: nameId, value: nameValue });
//     setName(newname);
//     setNv("");
//     setNameId(nameId + 1);

//     let newemail = email.concat({ id: emailId, value: emailValue });
//     setEmail(newemail);
//     setEv("");
//     setEmailId(emailId + 1);
//   }

//   useEffect(() => {
//     let email2 = document.querySelector("#email");
//     email2.addEventListener("keydown", ({ key }) => {
//       if (key === "Enter") {
//         addInfo();
//       }
//     });
//   });

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="이름"
//         value={nameValue}
//         onChange={(e) => {
//           setNv(e.target.value);
//         }}
//       ></input>
//       <input
//         id="email"
//         type="text"
//         placeholder="이메일"
//         value={emailValue}
//         onChange={(e) => {
//           setEv(e.target.value);
//         }}
//       ></input>
//       <button type="button" onClick={addInfo}>
//         등록
//       </button>
//       <ul>
//         {name.map((value, index) => {
//           return (
//             <li
//               key={value.id}
//               onDoubleClick={(e) => {
//                 let newname = name.filter((value2) => {
//                   console.log(e.target);
//                   return value2.id !== value.id;
//                 });
//                 setName(newname);
//               }}
//             >
//               {value.value + " : " + email[index].value}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// function App() {
//   let [userInfo, setUserInfo] = useState([]);
//   let [searchInfo, setSearchInfo] = useState([]);

//   let [nameValue, setName] = useState("");
//   let [titleValue, setTitle] = useState("");
//   let [nameId, setNameId] = useState(userInfo.length + 1);
//   let [search, setSearch] = useState("");

//   let select = document.querySelector(".select");

//   function addInfo() {
//     let newInfo = userInfo.concat({
//       id: nameId,
//       writer: nameValue,
//       title: titleValue,
//     });
//     setUserInfo(newInfo);
//     setNameId(nameId + 1);
//     setName("");
//     setTitle("");
//   }

//   function searchBtn() {
//     let searchTitle;
//     if (select.value === "writer") {
//       searchTitle = userInfo.filter((val) => {
//         return val.writer.includes(search);
//       });
//     } else if (select.value === "title") {
//       searchTitle = userInfo.filter((val) => {
//         return val.title.includes(search);
//       });
//     }

//     setSearchInfo(searchTitle);
//     setSearch("");
//   }

//   useEffect(() => {
//     let email2 = document.querySelector(".email");
//     email2.addEventListener("keydown", ({ key }) => {
//       if (key === "Enter") {
//         addInfo();
//       }
//     });
//   });

//   return (
//     <>
//       <div className="top">
//         작성자 :
//         <input
//           type="text"
//           placeholder="작성자"
//           value={nameValue}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         ></input>
//         제목 :
//         <input
//           class="email"
//           type="text"
//           placeholder="제목"
//           value={titleValue}
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         ></input>
//         <button type="button" onClick={addInfo}>
//           작성
//          </button>
//        </div>
//       <div className="mid">
//         <select className="select">
//           <option value="writer">작성자</option>
//           <option value="title">제목</option>
//         </select>
//         <input
//           className="search"
//           placeholder="검색"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//         ></input>
//         <button type="button" onClick={searchBtn}>
//           검색
//         </button>
//       </div>
//       <table border="1" cellSpacing="0" cellPadding="10" className="table">
//         <thead>
//           <tr>
//             <td>번호</td>
//             <td>작성자</td>
//             <td>제목</td>
//           </tr>
//         </thead>
//         <tbody>
//           {userInfo.map((value) => {
//             return (
//               <tr key={value.id}>
//                 <td>{value.id}</td>
//                 <td>{value.writer}</td>
//                 <td>{value.title}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       <div>검색결과</div>
//       <table border="1" cellSpacing="0" cellPadding="10" className="table">
//         <thead>
//           <tr>
//             <td>번호</td>
//             <td>작성자</td>
//             <td>제목</td>
//           </tr>
//         </thead>
//         <tbody>
//           {searchInfo.map((value) => {
//             return (
//               <tr key={value.id}>
//                 <td>{value.id}</td>
//                 <td>{value.writer}</td>
//                 <td>{value.title}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// }

// import RefTest from "./RefTest";
// import ScrollBox from "./ScrollBox";
// import React, { Component } from "react";
// import LifeCycleTest from "./LifeCycleTest";

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: "#000000",
//     value: true,
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <button
//             onClick={() => {
//               this.setState({ value: !this.state.value });
//             }}
//           >
//             컴포넌트 바껴라!
//           </button>
//         </div>

//         <button onClick={this.handleClick}>랜덤 색상</button>

//         {this.state.value ? (
//           <LifeCycleTest color={this.state.color} />
//         ) : (
//           <div />
//         )}
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import TestComponent from "./TestComponent";
import LifeCyclePractice from "./LifeCyclePractice";

class App extends Component {
  state = {
    value: true,
  };

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState({ value: !this.state.value });
            }}
          >
            컴포넌트 바껴라!
          </button>
        </div>

        <hr style={{ margin: "50px 0" }}></hr>

        {this.state.value ? <LifeCyclePractice /> : <TestComponent />}
      </div>
    );
  }
}

export default App;
