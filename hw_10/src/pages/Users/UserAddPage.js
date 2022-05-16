import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "../../components/form/Form";
import { createNewUser } from "../../store/actions/usersAction";

export const UserAddPage = () => {
  const dispatch = useDispatch();
  function handleAddUser(user) {
    dispatch(createNewUser(user));
  }
  const user = {
    name: "",
    surname: "",
    phone: "",
  };
  return <Form user={user} handleAddUser={handleAddUser} />;
};
