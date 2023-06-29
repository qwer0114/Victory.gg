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
function Item({ item }) {
  return item !== 0 ? (
    <img src={`${API_ITEM}${item}.png`} className="rounded-lg w-6 h-6"></img>
  ) : null;
}

export default Item;
