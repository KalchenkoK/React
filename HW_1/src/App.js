import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <header>
      <h1>My first React App</h1>
    </header>
  )
}

function Container(){
  return(
    <div>
      <div>
        <p>Here is main content</p>
      </div>
    </div>
  )
}
function Footer(){
  return(
    <footer>
      <p>Designed by Konstantin Kalchenko</p>
      <div>
        <p>Our contacts</p>
        <p><a href="https://facebook.com">Facebook </a></p>
        <p><a href="https://instagram.com">Instagram</a></p>
        <p><a href="https://linkedin.com">Linkedin</a></p>

        
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Container/>
      <Footer/>      
    </div>
  );
}

export default App;
