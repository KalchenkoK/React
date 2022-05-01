import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard/DashBoard";
import Users from "./components/users/Users";
import MainPage from "./components/mainPage/MainPage";
import Albums from "./components/albums/Albums";
import Form from "./components/form/Form";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/form" element={<Form />} />
        <Route path={"/users/newuser"} element={<Form />} />
        <Route path={"/users/:id"} element={<Form />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
