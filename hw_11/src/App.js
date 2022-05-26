import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./components/todos/TodoList";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList status={false} />} />
          <Route path="/form" element={<TodoList status={true} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
