import React from "react";

export default function Sticky() {
  return (
    <>
      <div className="content-right">
        <div className="loginbox">
          <form className="formbox">
            <input placeholder="ID"></input>
            <input placeholder="PW"></input>
          </form>
          <div>
            <button>로그인</button>
          </div>
        </div>
        <div className="hitgall">
          <div>실시간</div>
          <ol>
            <a href="/product/1">
              <li>~갤러리</li>
            </a>
            <li>~~갤러리</li>
            <li>~~~갤러리</li>
            <li>~~~~갤러리</li>
            <li>~~~~~갤러리</li>
          </ol>
        </div>
      </div>
    </>
  );
}