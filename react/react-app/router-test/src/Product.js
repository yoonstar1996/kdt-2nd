import React from "react";
import {
  useParams,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

export default function Product() {
  const { id, name } = useParams(); // { id: 1 }

  const location = useLocation();
  console.log(location);

  let [searchParam, setSearchParam] = useSearchParams();

  let navigate = useNavigate();

  console.log("searchParam : ", searchParam);

  return (
    <>
      <h1>{id}번 상품페이지 입니다.</h1>
      <h3>이름 : {name}</h3>
      <h4>{location.search}</h4>
      <h4>가격은 {searchParam.get("price")}</h4>

      <ul>
        <li><button onClick={()=>{ navigate(-2)}}>Go 2 pages back</button></li>
        <li><button onClick={()=>{ navigate(-1)}}>Go back</button></li>
        <li><button onClick={()=>{ navigate(1)}}>Go forward</button></li>
        <li><button onClick={()=>{ navigate(2)}}>Go 2 pages forward</button></li>
        <li><button onClick={()=>{ navigate('/')}}>Go Root</button></li>
      </ul>
    </>
  );
}