import { DELETE_USER, GET_DATA_USER, SEARCH_USER } from "../action/userAction";

const UserInitialState = {
  userList: [],
};
export const User = (state = UserInitialState, action) => {
  switch (action.type) {
    case GET_DATA_USER:
      return {
        ...state,
        userList: action.payload,
      };
    case DELETE_USER:
      const finalRes = state.userList.filter(
        (user) => user.id != action.payload
      );
      return {
        ...state,
        userList: finalRes,
      };
    case SEARCH_USER:
      const searchRes = state.userList.filter((user) =>
        user.name.includes(action.payload)
      );
      return {
        ...state,
        userList: searchRes,
      };
    default:
      return state;
  }
};
