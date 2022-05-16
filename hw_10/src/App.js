import "./App.css";
import { Users } from "./components/users/Users";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserEditPage } from "./pages/Users/UserEditPage";
import { UserAddPage } from "./pages/Users/UserAddPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/newuser" element={<UserAddPage />} />
          <Route path="/:userId" element={<UserEditPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
