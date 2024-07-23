import React from 'react';
import './App.css';

function App() {
  const name = "Rohan Sarikonda";
  const bio = "A passionate highschooler with experience in various programming languages.";
  const skills = ["JavaScript", "React", "Node.js", "Python"];

  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>{bio}</p>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;