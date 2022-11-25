import {
  Box2Container,
  Box3Container,
  Box4Container,
} from "../containers/BoxesContainer";

export function Box1() {
  return (
    <>
      <div>
        <h2>Box1 컴포넌트</h2>
        <Box2Container />
      </div>
    </>
  );
}

export function Box2() {
  return (
    <>
      <div>
        <h2>Box2 컴포넌트</h2>
        <Box3Container />
      </div>
    </>
  );
}

export function Box3({ number }) {
  return (
    <>
      <div>
        <h2>Box3 컴포넌트 {number}</h2>
        <Box4Container />
      </div>
    </>
  );
}

export function Box4({ onIncrease, onDecrease }) {
  return (
    <>
      <div>
        <h2>Box4 컴포넌트</h2>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  );
}
