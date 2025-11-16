import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="layout">
          <aside className="sidebar">
            <header>
              <h1>Vinayaka Srinivas</h1>
            </header>
            
            <nav>
              <a href="#about">About</a>
              <a href="#technical">Technical</a>
              <a href="#nontechnical">Non-Technical</a>
            </nav>
            
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/vinny-s/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://x.com/vinnyeatscake" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </aside>
          
          <main>
          <section id="about">
            <h2>About</h2>
            <p>
              I'm Vinny. 

              I'm trying to document things that I think about that are more long-form than what would be nice on Twitter. I currently live in San Francisco and I work as an AI FDE at Snowflake. I was at Amazon JWO before, and was at Berkeley EECS before that. A lot of the stuff in the technical tab is a consequence of this, but the stuff in "Everything Else" has everything else. If there was one outcome of visiting this website, it's to follow me on Twitter @vinnyeatscake. 
            </p>
          </section>
          </main>
        </div>
        
        <footer>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}

export default App

