import { API_URL } from "../api/api";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [isVisible, setVisible] = useState(true);
  const [newName, setName] = useState("");
  const [newSername, setSername] = useState("");
  const [phone, setPhone] = useState("");
  const [value, setValue] = useState("light");

  useEffect(() => {
    api.get().then(({ data }) => setContacts(data));
  }, []);
  const changeSelect = (e) => {
    setValue(e.target.value);
  };
  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    api.delete(id);
    setContacts(newContacts);
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
  const onChangeButton = () => {
    setVisible(!isVisible);
  };

  const onResetButton = () => {
    setVisible(!isVisible);
  };
  const createContact = () => {
    const newItem = {
      name: newName,
      sername: newSername,
      phone: phone,
    };

    api.post(API_URL, newItem).then(({ data }) => {
      setContacts((contacts) => [...contacts, data]);
      setVisible(!isVisible);
      setName("");
      setSername("");
      setPhone("");
    });
  };

  return {
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
  };
}
