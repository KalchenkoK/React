import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = ({ user, handleUpdateUser, handleAddUser }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ ...user });
  useEffect(() => {
    setFormState(user);
  }, [user]);
  function onInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  function onSaveUser(e) {
    e.preventDefault();
    if (user.id) {
      handleUpdateUser(formState);
    } else {
      handleAddUser(formState);
    }
    navigate("/");
  }
  return (
    <>
      <form action="" className="form" id="qw" onSubmit={onSaveUser}>
        <Box
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
        >
          <TextField
            name="name"
            value={formState.name}
            onChange={onInputChange}
          />

          <TextField
            value={formState.surname}
            name="surname"
            color="secondary"
            type="text"
            onChange={onInputChange}
          />

          <TextField
            value={formState.phone}
            name="phone"
            color="secondary"
            type="text"
            onChange={onInputChange}
          />
        </Box>
        <Button variant="contained" type="submit" className="button">
          Save new user
        </Button>

        <Button
          variant="contained"
          type="reset"
          onClick={() => {
            navigate("/");
          }}
        >
          Reset
        </Button>
      </form>
    </>
  );
};
