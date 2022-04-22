import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="linkBlock">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/albums">Albums</Link>
    </div>
  );
}
