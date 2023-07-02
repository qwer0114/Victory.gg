import { async } from "q";
import { useEffect, useState } from "react";
import {
  API_KEY,
  API_NAME,
  API_PROFILE,
  API_TIER,
  API_MATCHID,
  API_MATCH,
} from "../../API_Variable/API.mjs";
import Match from "./Match";

// 매치에서 필요한 정보 킬 데스 어시 cs 챔피언
function MatchID({ puuID, setSummonerName }) {
  let [matchID, setMatchID] = useState([]);

  const getMatchID = async () => {
    const response = await fetch(
      `${API_MATCHID}${puuID}/ids?start=0&count=18&${API_KEY}`
    );
    const json = await response.json();
    setMatchID(json);
  };

  useEffect(() => {
    getMatchID();
  }, [puuID]);

  return matchID.length !== 0
    ? matchID.map((matchID, i) => (
        <Match
          matchID={matchID}
          puuID={puuID}
          setSummonerName={setSummonerName}
          key={i}
        ></Match>
      ))
    : null;
}

export default MatchID;
