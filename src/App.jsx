import React, { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about')
  
  return (
    <div className="app">
      <div className="container">
        <div className="layout">
          <aside className="sidebar">
            <header>
              <h1>Vinayaka Srinivas</h1>
            </header>
            
            <nav>
              <a onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About</a>
              <a onClick={() => setActiveTab('technology')} className={activeTab === 'technology' ? 'active' : ''}>Technology</a>
              <a onClick={() => setActiveTab('ai')} className={activeTab === 'ai' ? 'active' : ''}>AI</a>
              <a onClick={() => setActiveTab('fde-learnings')} className={activeTab === 'fde-learnings' ? 'active' : ''}>FDE Learnings</a>
              <a onClick={() => setActiveTab('math')} className={activeTab === 'math' ? 'active' : ''}>Math</a>
              <a onClick={() => setActiveTab('soul-and-spirit')} className={activeTab === 'soul-and-spirit' ? 'active' : ''}>Soul and Spirit</a>
            </nav>
            
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/vinny-s/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://x.com/vinnyeatscake" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </aside>
          
          <main>
          {activeTab === 'about' && (
            <section id="about">
              <p>
                I'm Vinny. 

                I'm trying to document things that I think about that are more long-form than what would be appropriate for Twitter. 
              </p>
              <p>
                I currently live in San Francisco and I work as an <a href="https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers" target="_blank" rel="noopener noreferrer">AI FDE</a> at Snowflake. I was at Amazon <a href="https://www.justwalkout.com/" target="_blank" rel="noopener noreferrer">Just Walk Out</a> before, and was at <a href="https://en.wikipedia.org/wiki/Oski_the_Bear" target="_blank" rel="noopener noreferrer">Berkeley EECS</a> before that. 
              </p>
              <p>
                If you had one takeaway of visiting this website, it would be for you to follow me on Twitter @vinnyeatscake. 
              </p>
            </section>
          )}
          
          {activeTab === 'technology' && (
            <section id="technology">
              <h2>Technology</h2>
              <a href="https://substack.com/home/post/p-139947761" target="_blank" rel="noopener noreferrer" className="article-card">
                <div className="article-header">
                  <h3>Businesses of Trust</h3>
                  <span className="article-date">Dec 20, 2023</span>
                </div>
                <p className="article-subtitle">Finding Value in a Post-AGI World</p>
                <p className="article-excerpt">
                  The advances in generative models have taken us many steps closer to AGI. This begs the question, "What jobs will not be replaced by AGI?" Investment banking offers a unique perspective on the value of trust in a world of automation...
                </p>
              </a>
            </section>
          )}
          
          {activeTab === 'ai' && (
            <section id="ai">
              <h2>AI</h2>
            </section>
          )}
          
          {activeTab === 'fde-learnings' && (
            <section id="fde-learnings">
              <h2>FDE Learnings</h2>
            </section>
          )}
          
          {activeTab === 'math' && (
            <section id="math">
              <h2>Math</h2>
            </section>
          )}
          
          {activeTab === 'soul-and-spirit' && (
            <section id="soul-and-spirit">
              <h2>Soul and Spirit</h2>
            </section>
          )}
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

