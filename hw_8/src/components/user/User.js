import "./user.css";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material/";

export default function User(props) {
  const user = props.user;

  return (
    <Grid className="table">
      <Grid>{user.name}</Grid>
      <Grid>{user.username}</Grid>
      <Grid>{user.email}</Grid>

      <Link to={String(user.id)}>
        <Button variant="contained">Update</Button>
      </Link>
      <Button variant="contained" onClick={() => props.onButtonDelete(user.id)}>
        Delete
      </Button>
    </Grid>
  );
}
