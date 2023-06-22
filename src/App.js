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
          LEAVE ME ALONE! DING! AHHHHHHHHHHHH! AKIRA AKIRA AKIRA!.
        </p>
        <YouTube videoId={videoId} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          wkadaklsdmaklsmda
        </a>
      </header>
    </div>
  );
}

export default App;
