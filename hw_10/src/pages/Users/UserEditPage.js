import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "../../components/form/Form";
import { updateUserById } from "../../store/actions/usersAction";

export const UserEditPage = () => {
  const params = useParams();
  const id = params.userId;
  const dispatch = useDispatch();
  function handleUpdateUser(user) {
    dispatch(updateUserById(user));
  }
  const user = useSelector((state) =>
    state.users.find((user) => user.id === id)
  );

  return <Form user={user} handleUpdateUser={handleUpdateUser} />;
};
