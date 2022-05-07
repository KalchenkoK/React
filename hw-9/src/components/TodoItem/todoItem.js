import "./todoItem.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export default function TodoItem(props) {
  const { title } = props.item;
  const { className, changeToggleOnClick, deleteEl } = props;
  return (
    <Box className="table">
      <li className={className} onClick={() => changeToggleOnClick(props.item)}>
        {title}
      </li>
      <Button variant="contained" onClick={() => deleteEl(props.item)}>
        Delete
      </Button>
    </Box>
  );
}
