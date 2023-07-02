import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Summoner from "./Components/Summoner";
import Alert from "react-bootstrap/Alert";
import { element } from "prop-types";

function App() {
  let [name, setName] = useState(" ");
  let [history, setHistory] = useState([]);
  let [modal, setModal] = useState(false);
  let navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/summoner/${name}`);
      const store = localStorage.getItem("name");
      const storeArr = [...JSON.parse(store)];
      storeArr.push(name);
      localStorage.setItem(
        "name",
        JSON.stringify(Array.from(new Set(storeArr)))
      );
    }
  };

  const searchHistory = () => {
    const store = localStorage.getItem("name");
    const storeArr = [...JSON.parse(store)];
    setHistory(storeArr);
  };

  useEffect(() => {});

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
              onClick={() => {
                searchHistory();
                setModal(true);
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
          {modal === true
            ? history.map((history, i) => {
                return (
                  <div
                    key={i}
                    className="bg-slate-200 text-center p-2 hover:bg-violet-300"
                    style={{
                      width: "460px",
                      borderBottom: "1px solid white",
                      cursor: "pointer",
                    }}
                    onClick={(event) => {
                      navigate(`/summoner/${event.currentTarget.textContent}`);
                    }}
                  >
                    {history}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default App;

// 필요한 페이지 -> 메인 페이지, 전적 검색 결과창
