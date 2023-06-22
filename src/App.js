import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';

const videoId = 'CKgWQAX89U8';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          THIS IS MUEEZ SPACE!!! 
        </p>
        <YouTube videoId={videoId} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          okay mueez okay
        </a>
      </header>
    </div>
  );
}

export default App;
