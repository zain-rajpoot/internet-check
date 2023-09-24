import logo from './logo.svg';
import './App.css';
// INSTALL FOR NETWORK DETECTION
// npm install react-detect-offline
import Detect from './Detect.js';


function App() {
  return (
    <Detect>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Try to Offline and Online the internet connection</p>
          <p>Try to Offline and Online the internet connection</p>
        </header>
      </div>
    </Detect>
  );
}

export default App;
