import "./form.css";
export default function Form(props) {
  return (
    <>
      <form action="" className="form" id="qw">
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => {
            props.onInputChangeName(e);
          }}
        />
        <label>Surname</label>
        <input
          type="text"
          onChange={(e) => {
            props.onInputChangeSurname(e);
          }}
        />
        <label>Phone</label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={(e) => {
            props.onInputChangePhone(e);
          }}
        />
      </form>
      <button
        type="submit"
        form="64"
        className="button"
        onClick={(e) => {
          props.onSubmitButtonClick(e);
        }}
      >
        Save new contact
      </button>
      <button
        type="reset"
        onClick={() => {
          props.onResetButton();
        }}
      >
        Reset
      </button>
    </>
  );
}
