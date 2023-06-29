import {
  API_KEY,
  API_NAME,
  API_PROFILE,
  API_TIER,
} from "./API_Variable/API.mjs";
import { useEffect, useState } from "react";

const tier = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
};

function Tier({ id }) {
  let [summonerTier, setSummonerTier] = useState([]);

  const getTier = async () => {
    const response = await fetch(`${API_TIER}${id}?${API_KEY}`);
    const json = await response.json();
    console.log(json);
    setSummonerTier(json[0]);
  };

  useEffect(() => {
    getTier();
  }, []);

  return (
    <div>
      <div className="flex items-center ">
        <img
          src={
            summonerTier.tier !== undefined
              ? require(`./img/${summonerTier.tier}.png`)
              : ""
          }
          style={{ width: "25%" }}
        ></img>
        <div className="font-bold">
          {summonerTier.tier}
          <span> {tier[summonerTier.rank]}</span>
          <div className="text-sm text-slate-500">
            {summonerTier.leaguePoints}LP
          </div>
        </div>

        <div className="text-sm text-slate-500 pl-10">
          <div>
            {summonerTier.wins}승{summonerTier.losses}패
          </div>
          <div>
            승률
            {Math.floor(
              (summonerTier.wins / (summonerTier.wins + summonerTier.losses)) *
                100
            )}
            %
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tier;
