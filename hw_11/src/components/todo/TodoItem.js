import "./todoItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function TodoItem(props) {
  const { title } = props.item;
  const { className, changeToggleOnClick, onDelete } = props;
  return (
    <Box className="table">
      <li className={className} onClick={() => changeToggleOnClick(props.item)}>
        {title}
      </li>

      <Button
        startIcon={<DeleteIcon />}
        variant="contained"
        onClick={() => onDelete(props.item.id)}
      >
        Delete
      </Button>
    </Box>
  );
}
