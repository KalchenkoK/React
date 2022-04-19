import Contact from "../contact/Contact";
import Form from "../form/Form";
import "./contacts.css";
import useContacts from "../../hooks/useContacts";
import { useContext } from "react";
import themeContext from "../../context/themeContext";
import Select from "../select/select";
export default function Contacts() {
  const {
    contacts,
    deleteContact,
    createContact,
    onInputChangeName,
    onInputChangeSurname,
    onInputChangePhone,
    onChangeButton,
    onResetButton,
    isVisible,
    changeSelect,
    value,
  } = useContacts();

  function onButtonDelete(contact) {
    deleteContact(contact);
  }
  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    createContact();
  };
  const { dark, light } = useContext(themeContext);

  return (
    <>
      <Select changeSelect={changeSelect} />
      {isVisible &&
        contacts.map((el) => {
          return (
            <div style={value === "light" ? light : dark}>
              <Contact state={el} key={el.id} onButtonDelete={onButtonDelete} />
            </div>
          );
        })}
      {isVisible && (
        <button className="changeBtn" onClick={onChangeButton}>
          Add new contact
        </button>
      )}
      {/* {value} */}
      {!isVisible && (
        <div style={value === "light" ? light : dark}>
          <Form
            onResetButton={onResetButton}
            onInputChangeName={onInputChangeName}
            onInputChangeSurname={onInputChangeSurname}
            onInputChangePhone={onInputChangePhone}
            onSubmitButtonClick={onSubmitButtonClick}
          />
        </div>
      )}
    </>
  );
}
