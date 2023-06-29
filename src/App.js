import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Summoner from "./Summoner";
import Alert from "react-bootstrap/Alert";

function App() {
  let [name, setName] = useState(" ");
  let navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/summoner/${name}`);
    }
  };

  return (
    <>
      <div style={{ width: "30%", margin: "0 auto" }}>
        <img src={require("./img/logo.png")} style={{ width: "70%" }}></img>
      </div>
      <div>
        <div style={{ width: "35%", margin: "0 auto" }}>
          <form>
            <input
              type="text"
              placeholder="소환사 명을 입력하세요"
              onChange={(event) => {
                setName(event.target.value);
              }}
              onKeyDown={(event) => {
                handleKeyDown(event);
              }}
              style={{
                backgroundColor: "#07093c",
                height: "50px",
                width: "460px",
                color: "white",
                marginRight: "10px",
              }}
              className="rounded-lg"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

// 필요한 페이지 -> 메인 페이지, 전적 검색 결과창
