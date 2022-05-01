import { useParams, useNavigate } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import { Button, Input, Box } from "@mui/material/";

export default function Form(props) {
  const {
    onInputChangeName,
    onInputChangeUsername,
    onInputChangeEmail,
    setUserToUpdate,
  } = useUsers();

  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    setUserToUpdate(params.id);
    navigate("/users");
  };
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <form
        action=""
        className="form"
        id="qw"
        onSubmit={(e) => onSubmitButtonClick(e)}
      >
        <Box
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
        >
          <Input
            placeholder="Name"
            required="bool"
            color="secondary"
            type="text"
            onChange={(e) => {
              onInputChangeName(e);
            }}
          />

          <Input
            placeholder="UserName"
            required="bool"
            color="secondary"
            type="text"
            onChange={(e) => {
              onInputChangeUsername(e);
            }}
          />

          <Input
            placeholder="Email"
            required="bool"
            color="secondary"
            type="text"
            onChange={(e) => {
              onInputChangeEmail(e);
            }}
          />
        </Box>
        <Button variant="contained" type="submit" className="button">
          Save new user
        </Button>

        <Button
          variant="contained"
          type="reset"
          onClick={() => {
            navigate("/users");
          }}
        >
          Reset
        </Button>
      </form>
    </>
  );
}
