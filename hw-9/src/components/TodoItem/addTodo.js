import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
export default function AddTodo(props) {
  const { onChangeInput, onAddButtonClick, valueInput } = props;

  return (
    <Box className="input">
      <TextField
        label="Enter new todo"
        variant="outlined"
        value={valueInput}
        type="text"
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <Button variant="contained" onClick={() => onAddButtonClick(valueInput)}>
        ADD
      </Button>
    </Box>
  );
}
