import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const city = "Paris";

    // On construit l'adresse pour parler à l'API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Réponse de l'API :", data);
        if (data.cod === 200) {
          alert(`Connexion réussie ! Il fait ${data.main.temp}°C à ${data.name}.`);
        } else {
          alert(`Erreur de l'API : ${data.message}`);
        }
      })
      .catch(error => console.error("Erreur de connexion :", error));
  }, []);

  return (
    <div className="App">
      <h1>Test de connexion Météo</h1>
      <p>Regarde l'alerte ou la console (F12) pour voir le résultat.</p>
    </div>
  );
}

export default App;