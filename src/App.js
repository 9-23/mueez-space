import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';

const videoId = 'tDal4cQzZh4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          mueezzzzzzzzzzzzzzzzzzzzzzzz 
        </p>
        <YouTube videoId={videoId} />
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=tDal4cQzZh4"
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
