import React, { useEffect } from "react";
import { Button, Grid } from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import User from "../user/User";
import { fetchUsers, removeUserById } from "../../store/actions/usersAction";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  function handleRemoveUser(id) {
    dispatch(removeUserById(id));
  }

  return (
    <>
      <Grid>
        {users.map((el) => (
          <User user={el} key={el.id} handleRemoveUser={handleRemoveUser} />
        ))}
      </Grid>{" "}
      <Button
        variant="contained"
        style={{ margin: "30px 0 0 370px" }}
        onClick={() => {
          navigate("/newuser");
        }}
      >
        Add user
      </Button>
    </>
  );
};
