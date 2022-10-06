import PropTypes from "prop-types";

const FunctionComponent = (props) => {
  let { title, children } = props;
  return (
    <>
      <div>제목 : {title}</div>
      <div>이름 : {props.name}</div>
      <div>안녕</div>
      <div>{children}</div>
    </>
  );
};

FunctionComponent.defaultProps = {
  title: "기본 제목",
  name: "기본 이름",
  children: "기본 자식",
};

FunctionComponent.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  func: PropTypes.func,
};

export default FunctionComponent;
