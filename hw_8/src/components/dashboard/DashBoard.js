import { Link } from "react-router-dom";
import "../../App.css";
import { Box } from "@mui/system";
export default function DashBoard() {
  return (
    <Box className="linkBlock">
      <Link to={"/users"}>Users</Link>
      <Link to={"/albums"}>Albums</Link>
    </Box>
  );
}
