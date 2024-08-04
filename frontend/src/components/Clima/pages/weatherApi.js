export const fetchWeatherData = (lat, lon) => {
  const apiKey = "44cf67d92b7a7db10e1c7cc20e3b0d6b";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=44cf67d92b7a7db10e1c7cc20e3b0d6b&units=metric`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      throw error;
    });
};
