import { API_KEY, API_MATCH } from "../../API_Variable/API.mjs";
import { async } from "q";
import { useEffect, useState } from "react";
import MatchList from "./MatchList";

function Match({ matchID, puuID, setSummonerName }) {
  let [matchInfo, setMatchInfo] = useState([]);
  let [participants, setParticipants] = useState([]);
  let [team1, setTeam1] = useState([]);
  let [team2, setTeam2] = useState([]);
  let [myInfo, setMyInfo] = useState([]);

  const getMatch = async () => {
    const response = await fetch(`${API_MATCH}${matchID}?${API_KEY}`);
    const json = await response.json();
    setParticipants(json.info.participants);
    setTeam1(json.info.participants.slice(0, 5));
    setTeam2(json.info.participants.slice(5, 10));
    setMatchInfo(json.info);
    let info = json.info.participants.filter((match) => match.puuid === puuID);
    setMyInfo(info);
  };

  useEffect(() => {
    getMatch();
  }, [matchID]);

  return (
    <div>
      {myInfo.length !== 0 ? (
        <MatchList
          myInfo={myInfo[0]}
          matchInfo={matchInfo}
          team1={team1}
          team2={team2}
          setSummonerName={setSummonerName}
        ></MatchList>
      ) : null}
    </div>
  );
}

export default Match;
