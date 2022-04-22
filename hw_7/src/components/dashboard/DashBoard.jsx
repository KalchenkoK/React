import { Link } from "react-router-dom";
import "../../App.css";

export default function DashBoard() {
  return (
    <div className="linkBlock">
      <Link to={"/users"}>Users</Link>
      <Link to={"/albums"}>Albums</Link>
    </div>
  );
}
