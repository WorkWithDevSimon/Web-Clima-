let api_key = '7ce4dc12135c9d6ff169686aa5fe4b7c';
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    let cityName = document.getElementById('ciudadEntrada').value
    if (cityName) {
        fetchDatosClimas(cityName)
    }
})
function fetchDatosClimas(ciudad) {
    //Fetch en español es Buscar
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(respuesta => respuesta.json())
        .then(respuesta => monstrarDatosClima(respuesta))
        .catch(error => console.error('Error:', error));
}
function monstrarDatosClima(respuesta) {
    // console.log(respuesta)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''
    const ciudadNombre = respuesta.name
    const paisNombre = respuesta.sys.country
    const temperatura = respuesta.main.temp
    const descripcion = respuesta.weather[0].description
    // Creamos un elemento que va a ser un h2 que es un div de h2
    const ciudadTitulo = document.createElement('h2')
    //Y luego le asiganmos a ese h2 un tululo ecual es ciudadNombre
    ciudadTitulo.textContent = `${ciudadNombre},${paisNombre}`;
    // ------------------------------------------------------------------------------------------------------
    // Lo mismo hacemos aqui que es basicamente lo que trae con // const temperatura=respuesta.main.temp
    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temeperatura es:${Math.floor(temperatura - difKelvin)}°c`
    // ------------------------------------------------------------------------------------------------------
    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion metereologica es:${descripcion}`
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
}