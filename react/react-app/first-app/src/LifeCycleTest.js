import { Component } from "react";

class LifeCycleTest extends Component {
  state = {
    number: 0,
    color: "purple",
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");

    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    var num = 0;
    this.time = setInterval(() => {
      console.log("time : ", num);
      num++;
    }, 1000);
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);

    return nextState.number % 10 !== 4;
    // 숫자의 마지막 자리가 4면 리렌더링하지 않음.
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");

    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);

    if (snapshot) {
      console.log("업데이트되기 직전 색상 : ", snapshot);
    }
  }

  componentWillUnmount() {
    clearInterval(this.time);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>

        <p id="pTag">color: {this.state.color}</p>

        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleTest;
