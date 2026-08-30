import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('profile')
  
  // Character data object
  const character = {
    name: "Athletic Woman",
    age: 25,
    description: "An athletic woman with long hair, sharp amber eyes, and a straight nose. She has a fit, curvy physique with an athletic build.",
    stats: {
      height: "5'7\"",
      weight: "135 lbs",
      measurements: "36-28-36",
      bodyType: "Athletic"
    },
    traits: ["Long Hair", "Amber Eyes", "Athletic Build", "Curvy"]
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Character Profile App</h1>
        <nav className="nav-tabs">
          <button 
            className={activeTab === 'profile' ? 'active' : ''}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={activeTab === 'stats' ? 'active' : ''}
            onClick={() => setActiveTab('stats')}
          >
            Statistics
          </button>
          <button 
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </nav>
      </header>

      <main className="content-area">
        {activeTab === 'profile' && (
          <div className="profile-section">
            <div className="character-avatar">
              <div className="avatar-placeholder">
                <span>👤</span>
              </div>
            </div>
            <h2>{character.name}</h2>
            <p className="age">Age: {character.age}</p>
            <div className="traits-grid">
              {character.traits.map((trait, index) => (
                <span key={index} className="trait-badge">{trait}</span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="stats-section">
            <h2>Physical Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Height</h3>
                <p>{character.stats.height}</p>
              </div>
              <div className="stat-card">
                <h3>Weight</h3>
                <p>{character.stats.weight}</p>
              </div>
              <div className="stat-card">
                <h3>Measurements</h3>
                <p>{character.stats.measurements}</p>
              </div>
              <div className="stat-card">
                <h3>Body Type</h3>
                <p>{character.stats.bodyType}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="about-section">
            <h2>About This Character</h2>
            <p>{character.description}</p>
            <div className="security-note">
              <h3>Security & Privacy</h3>
              <p>This application follows standard security protocols for navigation and data handling. All content is appropriate and respects privacy guidelines.</p>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
