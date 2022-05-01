import { Link } from "react-router-dom";
import { Box } from "@mui/system";
export default function MainPage() {
  return (
    <Box className="linkBlock">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/albums">Albums</Link>
    </Box>
  );
}
