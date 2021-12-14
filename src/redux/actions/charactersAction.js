import axios from "axios";
import constants from "../../util/constants";

const edit = () => ({ type: "CHARACTER_EDIT" });

const changeDescription = (event) => ({
  type: "DESCRIPTION_CHANGED",
  payload: event.target.value,
});

const changeName = (event) => ({
  type: "NAME_CHANGED",
  payload: event.target.value,
});

const changesSearch = (event) => ({
  type: "SEARCH_CHANGED",
  payload: event.target.value,
});

const clear = () => [{ type: "SEARCH_CLEAR" }, request()];

const selectCharacter = (charData) => ({
  type: "CHARACTER_SELECTED",
  payload: charData,
});

const pageChange = (pageNumber) => [
  { type: "CHARACTERS_PAGECHANGE", payload: pageNumber },
];

const request = () => (dispatch, getState) => {
  const pageNumber = getState().character.pageNumber;
  const term = getState().character.term;
  const offset = pageNumber > 1 ? `offset=${(pageNumber - 1) * 20}` : "";
  const search = term ? `nameStartsWith=${term}&` : "";
  axios
    .get(constants.BASE_URL + offset + search + constants.AUTH)
    .then((resp) => {
      dispatch({ type: "CHARACTERS_SEARCHED", payload: resp.data.data });
    });
};

export {
  edit,
  changeName,
  changeDescription,
  clear,
  changesSearch,
  pageChange,
  selectCharacter,
  request,
};
