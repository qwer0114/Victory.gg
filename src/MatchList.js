import {
  API_KEY,
  API_NAME,
  API_PROFILE,
  API_TIER,
  API_MATCHID,
  API_MATCH,
  API_CHAMPION,
  API_ITEM,
} from "./API_Variable/API.mjs";
import Item from "./Item";
import Champion from "./Champion";
import Spell from "./Spell";
import MatchModal from "./MatchModal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const gameMode = {
  CLASSIC: "솔랭",
  ARAM: "무작위 총력전",
};

function MatchList({ myInfo, matchInfo, team1, team2 }) {
  let [modal, setModal] = useState(false);
  const timeChange = (time) => {
    if (time > 10000) {
      let date = new Date(time);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return `${year}/${month}/${day}`;
    } else {
      let minute = Math.floor(time / 60);
      let second = time % 60;
      return `${minute}분${second}초`;
    }
  };
  return (
    <>
      <div
        className="match border-1 flex justify-start w-full h-24 mb-2 rounded-lg"
        style={
          myInfo.win === true
            ? { backgroundColor: "#a9e1fa" }
            : { backgroundColor: "#fad1df" }
        }
      >
        <div className="timeStamp flex pr-4 w-1/6 text-xs self-center text-slate-500">
          <div className="flex flex-col justify-evenly ">
            <div>{gameMode[matchInfo.gameMode]}</div>
            <div className="py-2">{timeChange(matchInfo.gameEndTimestamp)}</div>
            <div>{timeChange(matchInfo.gameDuration)}</div>
          </div>
        </div>
        <div className="myInfo flex flex-wrap flex-col w-1/2">
          <div className="flex pb-2">
            <Champion
              championName={myInfo.championName}
              width={"w-12"}
              height={"h-12"}
            ></Champion>
            <Spell
              spell1={myInfo.summoner1Id}
              spell2={myInfo.summoner2Id}
            ></Spell>
            <div className="KDA pl-2">
              <div className="text-lg font-bold ">
                {myInfo.kills}/
                <span style={{ color: "red" }}>{myInfo.deaths}</span>/
                {myInfo.assists}
              </div>
              <div className="text-slate-500 text-xs">
                KDA:
                {((myInfo.kills + myInfo.assists) / myInfo.deaths).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="item flex">
            <Item item={myInfo.item0}></Item>
            <Item item={myInfo.item1}></Item>
            <Item item={myInfo.item2}></Item>
            <Item item={myInfo.item3}></Item>
            <Item item={myInfo.item4}></Item>
            <Item item={myInfo.item5}></Item>
            <Item item={myInfo.item6}></Item>
          </div>
        </div>
        <div className="team flex">
          <div className="team1 pr-8">
            {team1.map((team, i) => {
              return (
                <div className="flex pb-0.5" key={i}>
                  <Champion
                    championName={team.championName}
                    width={"w-4"}
                    height={"h-4"}
                  ></Champion>
                  <span className="truncate w-16 text-xs">
                    {team.summonerName}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="team2">
            {team2.map((team, i) => {
              return (
                <div className="flex pb-0.5" key={i}>
                  <Champion
                    championName={team.championName}
                    width={"w-4"}
                    height={"h-4"}
                  ></Champion>
                  <span className="truncate w-16 text-xs">
                    {team.summonerName}
                  </span>
                </div>
              );
            })}
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="self-end pb-2 pl-5 text-slate-500"
            onClick={() => {
              setModal(!modal);
            }}
          />
        </div>
      </div>
      {modal === true ? (
        <MatchModal team1={team1} team2={team2}></MatchModal>
      ) : null}
    </>
  );
}

export default MatchList;
