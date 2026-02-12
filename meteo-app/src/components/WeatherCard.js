import React from 'react';

function WeatherCard({ data }) {
  return (
    <div style={{ 
      background: '#f9f9f9', 
      padding: '20px', 
      borderRadius: '15px', 
      display: 'inline-block',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
      marginTop: '20px'
    }}>
      <h2>{data.name}</h2>
      <p style={{ fontSize: '2.5rem', margin: '10px 0', fontWeight: 'bold' }}>
        {Math.round(data.main.temp)}°C
      </p>
      <p style={{ textTransform: 'capitalize', color: '#555' }}>
        {data.weather[0].description}
      </p>
      <img 
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
        alt="icône météo" 
      />
    </div>
  );
}

export default WeatherCard;