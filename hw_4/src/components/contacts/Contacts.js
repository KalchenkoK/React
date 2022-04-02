import { useEffect, useState } from "react";
import ContactList from "../contactList/ContactList";
import Form from "../form/Form";
import "./contacts.css";
import * as contactsServices from "../../services/contactsServices";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [isVisible, setVisible] = useState(true);
  const [newName, setName] = useState("");
  const [newSername, setSername] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    contactsServices.getContacts().then((data) => setContacts(data));
  }, []);

  const onButtonDelete = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    contactsServices.deleteContact(id).then(() => setContacts(newContacts));
  };

  const onChangeButton = () => {
    setVisible(!isVisible);
  };

  const onResetButton = () => {
    setVisible(!isVisible);
  };
  const onInputChangeName = (e) => {
    setName(e.target.value);
  };
  const onInputChangeSurname = (e) => {
    setSername(e.target.value);
  };
  const onInputChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    const newItem = {
      name: newName,
      sername: newSername,
      phone: phone,
    };
    contactsServices.createContact(newItem).then((data) => {
      setContacts([...contacts, data]);
      setVisible(!isVisible);
      setName("");
      setSername("");
      setPhone("");
    });
  };
  return (
    <>
      {isVisible && (
        <ContactList contacts={contacts} onButtonDelete={onButtonDelete} />
      )}
      {isVisible && (
        <button className="changeBtn" onClick={onChangeButton}>
          Add new contact
        </button>
      )}

      {!isVisible && (
        <Form
          onResetButton={onResetButton}
          onInputChangeName={onInputChangeName}
          onInputChangeSurname={onInputChangeSurname}
          onInputChangePhone={onInputChangePhone}
          onSubmitButtonClick={onSubmitButtonClick}
        />
      )}
    </>
  );
}
