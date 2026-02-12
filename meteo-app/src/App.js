import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard'; // On importe notre petite brique d'affichage

function App() {
  const [ville, setVille] = useState('');
  const [meteo, setMeteo] = useState(null);

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
      .catch(err => console.error("Erreur :", err));
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Ma Météo Dynamique 🌍</h1>

      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Entrez une ville..." 
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={chercherMeteo} style={{ padding: '10px 20px', marginLeft: '10px', cursor: 'pointer' }}>
          Rechercher
        </button>
      </div>

      {/* On utilise le composant WeatherCard et on lui passe les données reçues */}
      {meteo && <WeatherCard data={meteo} />}
    </div>
  );
}

export default App;