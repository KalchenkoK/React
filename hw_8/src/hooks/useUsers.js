import { useEffect, useState } from "react";
import {
  getUsers,
  deleteUser,
  addUser,
  updateUser,
} from "../services/usersService";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [newName, setName] = useState();
  const [newUserName, setUserName] = useState("");
  const [newEmail, setEmail] = useState("");

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  function setUserToUpdate(id) {
    const newUser = {
      name: newName,
      username: newUserName,
      email: newEmail,
      id: id,
    };

    if (id) {
      updateUser(newUser).then((data) => {
        setUsers((users) =>
          users.map((el) => (el.id === data.id ? newUser : el))
        );
      });
    } else {
      addUser(newUser).then((data) => {
        setUsers((users) => [...users, data]);
        setName("");
        setUserName("");
        setEmail("");
      });
    }
  }

  function removeUser(id) {
    deleteUser(id).then(() => setUsers(users.filter((user) => user.id !== id)));
  }
  const onInputChangeName = (e) => {
    setName(e.target.value);
  };
  const onInputChangeUsername = (e) => {
    setUserName(e.target.value);
  };
  const onInputChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return {
    users,
    removeUser,
    onInputChangeName,
    onInputChangeUsername,
    onInputChangeEmail,
    setUserToUpdate,
  };
}
