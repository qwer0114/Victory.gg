import { API_TIER, API_KEY } from "../API_Variable/API.mjs";
import { useEffect, useState } from "react";

const tier = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
};

function Tier({ id, summonerName }) {
  let [summonerTier, setSummonerTier] = useState([]);
  let [summonerFlexTier, setSummonerFlexTier] = useState([]); // 자유랭

  const getTier = async () => {
    const response = await fetch(`${API_TIER}${id}?${API_KEY}`);
    const json = await response.json();
    console.log(json);
    if (json.length > 1) {
      setSummonerFlexTier(json[0]);
      setSummonerTier(json[1]);
    } else {
      setSummonerTier(json[0]);
      setSummonerFlexTier([]);
    }
  };

  useEffect(() => {
    getTier();
  }, [id]);

  return (
    <div>
      {summonerTier.length !== 0 ? ( // 솔로 랭크
        <div className="solo-rank flex items-center ">
          <img
            src={
              summonerTier.tier !== undefined
                ? require(`../img/${summonerTier.tier}.png`)
                : ""
            }
            style={{ width: "25%" }}
          ></img>
          <div className="font-bold w-1/4">
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
                (summonerTier.wins /
                  (summonerTier.wins + summonerTier.losses)) *
                  100
              )}
              %
            </div>
          </div>
        </div>
      ) : null}
      {summonerFlexTier.length !== 0 ? ( // 자유 랭크
        <div className="flex-rank flex items-center ">
          <img
            src={
              summonerFlexTier.tier !== undefined
                ? require(`../img/${summonerFlexTier.tier}.png`)
                : ""
            }
            style={{ width: "25%" }}
          ></img>
          <div className="font-bold w-1/4">
            {summonerFlexTier.tier}
            <span> {tier[summonerFlexTier.rank]}</span>
            <div className="text-sm text-slate-500">
              {summonerFlexTier.leaguePoints}LP
            </div>
          </div>

          <div className="flex-rank text-sm text-slate-500 pl-10">
            <div>
              {summonerFlexTier.wins}승{summonerFlexTier.losses}패
            </div>
            <div>
              승률
              {Math.floor(
                (summonerFlexTier.wins /
                  (summonerFlexTier.wins + summonerFlexTier.losses)) *
                  100
              )}
              %
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Tier;
