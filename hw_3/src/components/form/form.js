import { Component } from "react";
import "./form.css";
export default class Form extends Component {
  render() {
    const {
      isVisible,
      onResetButton,
      onInputChangeName,
      onInputChangeSurname,
      onInputChangePhone,
      onSubmitButtonClick,
    } = this.props;
    return (
      <>
        {!isVisible && (
          <div>
            <form action="" className="form" id="qw">
              <label>Name</label>
              <input
                type="text"
                onChange={(e) => {
                  onInputChangeName(e);
                }}
              />
              <label>Surname</label>
              <input
                type="text"
                onChange={(e) => {
                  onInputChangeSurname(e);
                }}
              />
              <label>Phone</label>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e) => {
                  onInputChangePhone(e);
                }}
              />
            </form>
            <button
              type="submit"
              form="64"
              className="button"
              onClick={(e) => {
                onSubmitButtonClick(e);
              }}
            >
              Save new contact
            </button>
            <button
              type="reset"
              onClick={() => {
                onResetButton();
              }}
            >
              Reset
            </button>
          </div>
        )}
      </>
    );
  }
}
