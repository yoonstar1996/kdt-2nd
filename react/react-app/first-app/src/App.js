import logo from "./logo.svg";
import "./App.css";
import img from './잔디.jpg'

function App() {
  // const teacher = "김소연";
  // let classs = "";
  // if (teacher == "김소연") {
  //   classs = "kdt2기";
  // } else {
  //   classs = "누구?";
  // }
  // if (teacher == "김소연" && true)

  // let styles = {
  //   width: "100px",
  //   height: "100px",
  //   color: "blue",
  //   backgroundColor: "yellow",
  // };

  let name = "도라에몽";
  let animal = "고양이";

  let a = 10;
  let b = 5;

  var title = "Hello World";

  return (
    <>
      {" "}
      {/**여기부터 JSX문법 */}
      {/* <div
        style={{
          width: "100px",
          height: "100px",
          color: "blue",
          backgroundColor: "yellow",
        }}
      >
        안녕
      </div> */}
      {/* <div className="App">안녕</div> */}
      {/* <div>{teacher == "김소연" (조건) ? "kdt2기" (참) : "누구?" (거짓)}</div> */}
      {/* 1번 실습 */}
      {/* <div>
        이것은 div입니다
        <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      </div> */}
      {/* 2번 실습 */}
      {/* <h2>제 반려 동물의 이름은 <u>{name}</u>입니다.</h2>
      <h2>
      <u>{name}</u>은 <u>{animal}</u>입니다.
      </h2> */}
      {/* 3번 실습 */}
      {/* <div> {3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</div> */}
      {/* 4번 실습 */}
      {/* <div>{a>b && (<div>a가 b보다 큽니다</div>)}</div> */}
      {/* 5번 실습 */}
      {/* <div className="test">{title}</div>
      <div className="center">
        아이디 : <input className="input"></input>
        <br></br>
        비밀번호 : <input className="input"></input>
      </div> */}
      {/* 6번 실습 */}
      {/* <div className="flex">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div> */}
      {/* 애벌레 실습*/}
      <div className="head circle">
        <div className="white circle">
          <div className="black circle"></div>
        </div>
        <div className="neck circle">
          <div className="body1 circle"></div>
          <div className="body2 circle"></div>
          <div className="body3 circle"></div>
          <img className="img" src={img}></img>
        </div>
      </div>
    </>
  );
}

export default App;
