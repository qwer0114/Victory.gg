import { API_SPELL } from "../../API_Variable/API.mjs";
function Spell({ spell1, spell2 }) {
  const spell = {
    1: "SummonerBoost",
    3: "SummonerExhaust",
    4: "SummonerFlash",
    6: "SummonerHaste",
    7: "SummonerHeal",
    11: "SummonerSmite",
    12: "SummonerTeleport",
    13: "SummonerMana",
    14: "SummonerDot",
    21: "SummonerBarrier",
    30: "SummonerPoroRecall",
    31: "SummonerPoroThrow",
    32: "SummonerSnowball",
    39: "SummonerSnowURFSnowball_Mark",
  };

  return (
    <div>
      <img
        src={`${API_SPELL}${spell[spell1]}.png`}
        className="rounded-lg w-6 h-6 mb-0.5"
      ></img>
      <img
        src={`${API_SPELL}${spell[spell2]}.png`}
        className="rounded-lg w-6 h-6"
      ></img>
    </div>
  );
}

export default Spell;
