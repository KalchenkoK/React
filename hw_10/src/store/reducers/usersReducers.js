import { USERS_SET_USERS, USERS_REMOVE_USERS } from "../actions/usersAction";

const INITIAL_STATE = {
  users: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case USERS_SET_USERS:
      return { ...state, users: [...payload] };
    default:
      return state;
  }
}
