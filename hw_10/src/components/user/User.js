import "./user.css";
import { Button, Grid } from "@mui/material/";
import { useNavigate } from "react-router-dom";

export default function User({ user, handleRemoveUser }) {
  const navigate = useNavigate();
  function handleDeleteUser(e) {
    e.preventDefault();
    handleRemoveUser(user.id);
  }
  function navi() {
    navigate(user.id.toString());
  }
  return (
    <>
      <Grid className="table">
        <Grid onClick={navi}>{user.name}</Grid>
        <Grid onClick={navi}>{user.surname}</Grid>
        <Grid onClick={navi}>{user.phone}</Grid>
        <Button variant="contained" display="flex" onClick={handleDeleteUser}>
          Delete
        </Button>
      </Grid>
    </>
  );
}
