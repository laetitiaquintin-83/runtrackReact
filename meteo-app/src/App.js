import React, { useState } from 'react';
import './App.css';

function App() {
  const [ville, setVille] = useState(''); // Ce que l'utilisateur tape
  const [meteo, setMeteo] = useState(null); // Les résultats de l'API

  const chercherMeteo = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.cod === 200) {
          setMeteo(data);
        } else {
          alert("Ville non trouvée !");
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Ma Météo Dynamique 🌍</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Entrez une ville..."
          value={ville}
          onChange={(e) => setVille(e.target.value)} // Met à jour le texte au fur et à mesure
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={chercherMeteo} style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}>
          Rechercher
        </button>
      </div>

      {meteo && (
        <div className="weather-card" style={{ background: '#f0f0f0', padding: '20px', borderRadius: '15px', display: 'inline-block' }}>
          <h2>{meteo.name}</h2>
          <p style={{ fontSize: '2rem' }}>{Math.round(meteo.main.temp)}°C</p>
          <p>{meteo.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`} alt="icon" />
        </div>
      )}
    </div>
  );
}

export default App;