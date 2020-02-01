import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Banner">
        <div className="Container">
          <h1>
            <img src="https://vignette.wikia.nocookie.net/speed-city/images/1/1e/BlueCircleIMG.png/revision/latest?cb=20190304215308" width="60" height="20"></img>
          </h1>
          <nav class="Main-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <header className="App-header">
        <h1>SwampHacks 2020 App</h1>
        <h2>Description of What it Does</h2>
      </header>
      <p>Test</p>
    </div>
  );
}

export default App;
