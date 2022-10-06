import { Component } from "react";

///클래스형 컴포넌트는 메소드 안에서 작성///
class ClassComponent extends Component {
  static defaultProps = {};
  static propTypes = {
    title: this.propTypes.string,
  };
  //메소드//
  render() {
    let { title } = this.props;
    return (
      <>
        <div>안녕??</div>
        <div>클래스형 컴포넌트</div>
        <div>{title}</div>
      </>
    );
  }
}

export default ClassComponent;
