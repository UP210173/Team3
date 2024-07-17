window.addEventListener('load', () => {
  let lon
  let lat

  let temperaturaValor = document.getElementById('temperatura-valor')
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

  let ubicacion = document.getElementById('ubicacion')
  let iconoAnimado = document.getElementById('icono-animado')

  let vientoVelocidad = document.getElementById('viento-velocidad')


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicion => {
      //console.log(posicion.coords.latitude)
      lon = posicion.coords.longitude
      lat = posicion.coords.latitude
      //ubicación actual    
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=44cf67d92b7a7db10e1c7cc20e3b0d6b&units=metric`

      fetch(url)
        .then(response => { return response.json() })
        .then(data => {
          //console.log(data)

          let temp = Math.round(data.main.temp)
          //console.log(temp)
          temperaturaValor.textContent = `${temp} ° C`

          //console.log(data.weather[0].description)
          let desc = data.weather[0].description
          temperaturaDescripcion.textContent = desc.toUpperCase()
          ubicacion.textContent = data.name

          vientoVelocidad.textContent = `${data.wind.speed} m/s`

          //para iconos estáticos
          //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
          //icono.src = urlIcon
          //console.log(data.weather[0].icon)

          //para iconos dinámicos
          console.log(data.weather[0].main)
          switch (data.weather[0].main) {
            case 'TORMENTA':
              iconoAnimado.src = 'IMG_API/thunder.svg'
              console.log('TORMENTA');
              break;
            case 'LLOVIZNA':
              iconoAnimado.src = 'IMG_API/rainy-2.svg'
              console.log('LLOVIZNA');
              break;
            case 'LLUVIA':
              iconoAnimado.src = 'IMG_API/rainy-7.svg'
              console.log('LLUVIA');
              break;
            case 'NIEVE':
              iconoAnimado.src = 'IMG_API/snowy-6.svg'
              console.log('NIEVE');
              break;
            case 'LIMPIO':
              iconoAnimado.src = 'IMG_API/day.svg'
              console.log('LIMPIO');
              break;
            case 'ATMOSFERA':
              iconoAnimado.src = 'IMG_API/weather.svg'
              console.log('ATMOSFERA');
              break;
            case 'NUBES':
              iconoAnimado.src = 'IMG_API/cloudy-day-1.svg'
              console.log('NUBES');
              break;
            default:
              iconoAnimado.src = 'IMG_API/cloudy-day-1.svg'
              console.log('por defecto');
          }

        })
        .catch(error => {
          console.log(error)
        })
    })

  }
})
