import React from 'react';
import './App.css';
import jobs from './config/jobs.json';
import JobCard from './components/JobCard.js';

function App() {
  return (
    <div className="App">
      <header className="Banner">
        <div className="Container">
          <h1>
            <span className="Circle"></span>
          </h1>
          <nav className="Main-nav">
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
        <h1>Open Source Bounty Hunter</h1>
        <h2>Solve Problems. Hunt Bugs. Collect Bounties.</h2>
        {/*TODO: Link to autoscroll to actual app*/}
      </header>
      <p>Testing the spacing of the words in ths section so that it 
        actually looks like a block of text that someone would type. 
        Here is a shorter sentence.</p>

      <div className="CardPool">
        {jobs.map((job, index) => (
						<JobCard 
            site = {job.url}
            image = {job.photo}
            title = {job.name}
            text = {job.description}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
