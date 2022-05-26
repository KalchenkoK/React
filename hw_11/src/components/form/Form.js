import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { createNewTodo } from "../../store/actions/todosAction";
import { useDispatch } from "react-redux";

// https://whimsical-klepon-633f23.netlify.app/
export const Form = ({ open, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({ defaultValues: "" });
  const dispatch = useDispatch();
  function handleAddTodo(todo) {
    
    dispatch(createNewTodo(todo));
    handleClose();
  }

  const [completed, setCompleted] = useState("");

  const handleChange = (e) => {
    setCompleted(e.target.value);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid sx={style}>
        <form onSubmit={handleSubmit(handleAddTodo)}>
          <TextField
            label="Title"
            fullWidth
            {...register("title", {
              required: "The field is required",
              maxLength: { value: 25, message: "Max length 255 symbols" },
            })}
            error={errors.title && errors.title.message !== ""}
            helperText={errors.title && errors.title.message}
          ></TextField>
          <FormControl fullWidth>
            <InputLabel id="input_label">Completed</InputLabel>
            <Select
              fullWidth
              labelId="input_label"
              value={completed}
              {...register("completed")}
              onChange={handleChange}
            >
              <MenuItem value={true}>Done</MenuItem>
              <MenuItem value={false}>Not done</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            style={{ margin: "50px 10px" }}
            disabled={!isDirty}
          >
            Save
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </form>
      </Grid>
    </Modal>
  );
};
