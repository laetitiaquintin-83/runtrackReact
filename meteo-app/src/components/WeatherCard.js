import React from 'react';

function WeatherCard({ data }) {
    return (
        <div className="weather-card">
            <h2>{data.name}</h2>
            <p style={{ fontSize: '3.5rem', margin: '15px 0', fontWeight: 'bold' }}>
                {Math.round(data.main.temp)}°C
            </p>
            <p style={{ textTransform: 'capitalize', fontSize: '1.2rem', opacity: 0.9 }}>
                {data.weather[0].description}
            </p>
            <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                alt="icône météo"
                style={{ width: '120px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', fontSize: '0.9rem' }}>
                <span>💧 {data.main.humidity}%</span>
                <span>🌬️ {Math.round(data.wind.speed * 3.6)} km/h</span>
            </div>
        </div>
    );
}

export default WeatherCard;