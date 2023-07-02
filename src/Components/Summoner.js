import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router";
import { API_KEY, API_NAME, API_PROFILE } from "../API_Variable/API.mjs";
import { async } from "q";
import { useNavigate } from "react-router-dom";
import Tier from "./Tier";
import MatchID from "./Match/MatchID";

function Summoner() {
  let { name } = useParams();
  let [summonerInfo, setSummonerInfo] = useState([]);
  let [summonerName, setSummonerName] = useState(" ");
  let [inputVal, setInputVal] = useState(" ");
  let navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSummonerName(inputVal);
      navigate(`/summoner/${inputVal}`);
      event.target.value = " ";
    }
  };

  const getSummoner = async () => {
    const response = await fetch(`${API_NAME}${name}?${API_KEY}`)
      .then((response) => response.json())
      .then((json) => setSummonerInfo(json))
      .catch((err) => {
        window.location.href = "/";
        alert("존재하지 않는 소환사명입니다!");
      });
  };
  useEffect(() => {
    getSummoner();
  }, [summonerName]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="navBar"
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <div
          style={{ width: "8%", float: "left" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={require("../img/logo.png")}></img>
        </div>
        <input
          type="text"
          placeholder="소환사 명을 입력하세요"
          onChange={(event) => {
            setInputVal(event.target.value);
          }}
          onKeyDown={(event) => {
            handleKeyDown(event);
          }}
          style={{
            backgroundColor: "#07093c",
            height: "40px",
            width: "260px",
            color: "white",
            float: "right",
            marginRight: "10px",
            marginTop: "30px",
          }}
          className="rounded-lg"
        ></input>
      </div>
      <div className="profile flex flex-col w-2/5">
        <div className="flex">
          <img
            src={`${API_PROFILE}${summonerInfo.profileIconId}.png `}
            className="rounded-lg "
            style={{ width: "15%" }}
          ></img>
          <div className="pl-3">
            <div className="font-bold text-2xl">{summonerInfo.name}</div>
            <div>{summonerInfo.summonerLevel}Lv</div>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        {summonerInfo.id === undefined ? null : (
          <Tier id={summonerInfo.id} summonerName={summonerName} />
        )}
      </div>
      <div className="match  w-2/5">
        {summonerInfo.puuid === undefined ? null : (
          <MatchID
            puuID={summonerInfo.puuid}
            setSummonerName={setSummonerName}
          />
        )}
      </div>
    </div>
  );
}

export default Summoner;
