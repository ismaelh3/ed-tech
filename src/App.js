import logo from './logo.svg';
import './App.css';

// react apps are made out of components, for example a button
function App() {
  return (
    <div className = "App">
      <header className = "App-header">
        <img src = {logo} className = "App-logo" alt = "logo"/>
        <p> Hello World!! </p>
        <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer">
          Nice to See You! -_- 
        </a>
      </header>
    </div>
  );
}

export default App;