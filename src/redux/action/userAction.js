import axios from "axios";

export const GET_DATA_USER = "GET_DATA_USER";
export const DELETE_USER = "DELETE_USER";
export const SEARCH_USER = "SEARCH_USER";

export const getUser = (data) => {
  return {
    type: GET_DATA_USER,
    payload: data,
  };
};
export const deleteUser = (data) => {
  return {
    type: DELETE_USER,
    payload: data,
  };
};
export const searchUser = (data) => {
  return {
    type: SEARCH_USER,
    payload: data,
  };
};
export const getUserThunk = () => async (dispatch) => {
  const res = await axios.get("https://api.github.com/users/defunkt/repos");
  const data = res.data;
  dispatch(getUser(data));
};
