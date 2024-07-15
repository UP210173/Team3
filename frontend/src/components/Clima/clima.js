import React from 'react';
import './clima.css';

// Obtener la ubicación del usuario
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeatherData(latitude, longitude);
}

function error() {
    console.error('No se pudo obtener la ubicación');
}

function getWeatherData(lat, lon) {
    const apiKey = 'TU_API_KEY_DE_OPENWEATHERMAP'; // Reemplaza con tu API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('weatherChart').getContext('2d');
            const chartData = {
                labels: ['Temperatura'],
                datasets: [{
                    label: 'Clima Actual',
                    data: [data.main.temp],
                    backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                    borderColor: ['rgba(75, 192, 192, 1)'],
                    borderWidth: 1
                }]
            };
            const weatherChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error al obtener los datos del clima:', error));
}
