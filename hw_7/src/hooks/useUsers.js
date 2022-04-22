import { useEffect, useState } from "react";
import  getUsers  from "../services/usersService";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return { users };
}
