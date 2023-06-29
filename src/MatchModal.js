import Champion from "./Champion";
import Spell from "./Spell";
import Item from "./Item";
function MatchModal({ team1, team2 }) {
  console.log(team1);
  return (
    <div>
      <div className="bg-slate-200 h-8">
        <ul className="flex text-xs items-center  h-8">
          <li className="w-1/5">챔피언</li>
          <li className="w-1/5 pl-5">KDA</li>
          <li className="w-1/5 pl-14">피해량</li>
          <li className="w-1/5 pl-10">아이템</li>
        </ul>
      </div>
      {team1.map((team, i) => {
        return (
          <div
            key={i}
            className="team1 flex pb-0.5 items-center "
            style={
              team.win === true
                ? { backgroundColor: "#a9e1fa" }
                : { backgroundColor: "#fad1df" }
            }
          >
            <div className="flex items-center w-1/4 ">
              <Champion
                championName={team.championName}
                width={"w-10"}
                height={"h-10"}
              ></Champion>
              <Spell
                spell1={team.summoner1Id}
                spell2={team.summoner2Id}
              ></Spell>
              <span className="summonerName text-xs">
                <div>{team.summonerName}</div>
                <div className="text-slate-500">{team.individualPosition}</div>
              </span>
            </div>
            <div className="KDA text-xs font-bold text-slate-500 w-1/4">
              {" "}
              {team.kills}/<span style={{ color: "red" }}>{team.deaths}</span>/
              {team.assists}
            </div>
            <div className="damage text-xs font-bold text-slate-500 text-left w-1/6">
              {team.totalDamageDealtToChampions}
            </div>
            <div className="item flex items-start">
              <Item item={team.item0}></Item>
              <Item item={team.item1}></Item>
              <Item item={team.item2}></Item>
              <Item item={team.item3}></Item>
              <Item item={team.item4}></Item>
              <Item item={team.item5}></Item>
              <Item item={team.item6}></Item>
            </div>
          </div>
        );
      })}
      <div className="bg-slate-200 h-8">
        <ul className="flex text-xs items-center  h-8">
          <li className="w-1/5">챔피언</li>
          <li className="w-1/5 pl-5">KDA</li>
          <li className="w-1/5 pl-14">피해량</li>
          <li className="w-1/5 pl-10">아이템</li>
        </ul>
      </div>
      {team2.map((team, i) => {
        return (
          <div
            key={i}
            className="team1 flex pb-0.5 items-center"
            style={
              team.win === true
                ? { backgroundColor: "#a9e1fa" }
                : { backgroundColor: "#fad1df" }
            }
          >
            <div className="flex items-center w-1/4">
              <Champion
                championName={team.championName}
                width={"w-10"}
                height={"h-10"}
              ></Champion>
              <Spell
                spell1={team.summoner1Id}
                spell2={team.summoner2Id}
              ></Spell>
              <span className="summonerName w-30 text-xs">
                <div>{team.summonerName}</div>
                <div className="text-slate-500">{team.individualPosition}</div>
              </span>
            </div>
            <div className="KDA text-xs font-bold text-slate-500 w-1/4">
              {" "}
              {team.kills}/<span style={{ color: "red" }}>{team.deaths}</span>/
              {team.assists}
            </div>
            <div className="damage text-xs font-bold text-slate-500 text-left w-1/6">
              {team.totalDamageDealtToChampions}
            </div>
            <div className="item flex items-start">
              <Item item={team.item0}></Item>
              <Item item={team.item1}></Item>
              <Item item={team.item2}></Item>
              <Item item={team.item3}></Item>
              <Item item={team.item4}></Item>
              <Item item={team.item5}></Item>
              <Item item={team.item6}></Item>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MatchModal;
