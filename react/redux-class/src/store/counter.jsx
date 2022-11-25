const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => {
  return {
    type: INCREASE,
  };
};
///위(increase)와 아래(decrease) 함수 모양만 다를 뿐 내용적으로 똑같음///
export const decrease = () => ({ type: DECREASE });

let initialState = {
  number: 0,
};
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };

    case DECREASE:
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
}
export default counter;
