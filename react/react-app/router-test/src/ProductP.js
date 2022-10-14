import React from "react";
import {
  useParams,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

export default function Product() {
  const { id } = useParams(); // { id: 1 }

  const location = useLocation();

  let [searchParam, setSearchParam] = useSearchParams();

  let navigate = useNavigate();

  return (
    <>
      <h1>{id}번 상품페이지 입니다.</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
      <button
        onClick={() => {
          navigate(1);
        }}
      >
        앞으로 가기
      </button>
    </>
  );
}
