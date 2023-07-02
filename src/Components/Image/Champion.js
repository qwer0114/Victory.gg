import {
  API_KEY,
  API_NAME,
  API_PROFILE,
  API_TIER,
  API_MATCHID,
  API_MATCH,
  API_CHAMPION,
  API_ITEM,
} from "../../API_Variable/API.mjs";
function Champion({ championName, width, height }) {
  return (
    <img
      src={`${API_CHAMPION}${championName}.png`}
      className={`rounded-lg ${width} ${height} mr-1`}
    ></img>
  );
}

export default Champion;
