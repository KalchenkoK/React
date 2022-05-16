import {
  getUsers,
  deleteUser,
  updateUser,
  createUser,
} from "../../services/usersService";

export const USERS_SET_USERS = "USERS_SET_USERS";
export const USERS_REMOVE_USERS = "USERS_REMOVE_USERS";
export const USERS_ADD_USER = "USERS_ADD_USER";

export const setUsers = (todos) => ({
  type: USERS_SET_USERS,
  payload: todos,
});

export const fetchUsers = () => {
  return function (dispatch) {
    getUsers().then((users) => dispatch(setUsers(users)));
  };
};

export const removeUserById = (id) => {
  return function (dispatch, getState) {
    deleteUser(id).then(() => {
      const { users } = getState();
      const updatedUsers = users.filter((user) => user.id !== id);
      dispatch(setUsers(updatedUsers));
    });
  };
};

export const updateUserById = (finedUser) => {
  return function (dispatch, getState) {
    const { users } = getState();

    updateUser(finedUser).then(() => {
      const updatedUsers = users.map((user) =>
        user.id === finedUser.id ? finedUser : user
      );
      dispatch(setUsers(updatedUsers));
    });
  };
};

export const addUser = (user) => ({
  type: USERS_ADD_USER,
  payload: user,
});

export const createNewUser = (user) => {
  return function (dispatch) {
    createUser(user).then(() => {
      dispatch(addUser(user));
    });
  };
};
