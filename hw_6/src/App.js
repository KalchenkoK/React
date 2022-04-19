import "./App.css";
import Contacts from "./components/contacts/Contacts";
import { ThemeProvider } from "./context/themeContext";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Contacts />
      </ThemeProvider>
    </div>
  );
}

export default App;
