import User from "../user/User";
import useUsers from "../../hooks/useUsers";
import { Link } from "react-router-dom";

import "../../App.css";
export default function Users() {
  const { users } = useUsers();

  return (
    <>
      <div className="linkBlock">
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>

      {users.map((el) => (
        <User users={el} key={el.id} />
      ))}
    </>
  );
}
