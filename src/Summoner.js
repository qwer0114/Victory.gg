import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router";
import { API_KEY, API_NAME, API_PROFILE } from "./API_Variable/API.mjs";
import { async } from "q";
import Tier from "./Tier";
import MatchID from "./MatchID.js";

function Summoner() {
  let { name } = useParams();
  let [summonerInfo, setSummonerInfo] = useState([]);

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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-2/5">
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
        {summonerInfo.id === undefined ? null : <Tier id={summonerInfo.id} />}
      </div>
      <div className="match  w-2/5">
        {summonerInfo.puuid === undefined ? null : (
          <MatchID puuID={summonerInfo.puuid} />
        )}
      </div>
    </div>
  );
}

export default Summoner;
