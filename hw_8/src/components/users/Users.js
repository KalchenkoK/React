import User from "../user/User";
import useUsers from "../../hooks/useUsers";
import { Link } from "react-router-dom";
import "../../App.css";
import { Button, Box, Grid } from "@mui/material/";
export default function Users() {
  const { users, removeUser } = useUsers();

  function onButtonDelete(id) {
    removeUser(id);
  }

  return (
    <>
      <Box className="linkBlock">
        <Link to={"/dashboard"}>Dashboard</Link>
      </Box>
      <Grid>
        {users.map((el) => (
          <User user={el} key={el.id} onButtonDelete={onButtonDelete} />
        ))}
      </Grid>
      <Link to={"/users/newuser"}>
        {" "}
        <Button variant="contained" style={{ margin: "20px 0 0 500px" }}>
          Add user
        </Button>
      </Link>
    </>
  );
}
