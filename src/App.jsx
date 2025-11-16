import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>Your Name</h1>
        </header>
        
        <nav>
          <a href="#about">About</a> | 
          <a href="#essays">Essays</a> | 
          <a href="#projects">Projects</a> | 
          <a href="#contact">Contact</a>
        </nav>
        
        <main>
          <section id="about">
            <h2>About</h2>
            <p>
              This is a personal website in the style of Paul Graham and Nat Friedman.
              Simple, minimal, and focused on content.
            </p>
          </section>
          
          <section id="essays">
            <h2>Essays</h2>
            <ul>
              <li><a href="#">Essay Title 1</a></li>
              <li><a href="#">Essay Title 2</a></li>
              <li><a href="#">Essay Title 3</a></li>
            </ul>
          </section>
          
          <section id="projects">
            <h2>Projects</h2>
            <ul>
              <li><a href="#">Project 1</a></li>
              <li><a href="#">Project 2</a></li>
            </ul>
          </section>
          
          <section id="contact">
            <h2>Contact</h2>
            <p>
              You can reach me at: <a href="mailto:your.email@example.com">your.email@example.com</a>
            </p>
          </section>
        </main>
        
        <footer>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}

export default App

