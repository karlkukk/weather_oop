class UI {
    constructor() {
        this.cityName = document.querySelector('#w-city');
        this.temp = document.querySelector('#w-temp');
        this.desc = document.querySelector('#w-desc');
        this.hum = document.querySelector('#w-hum');
    }

    print(cityWeather) {
        this.cityName.textContent = cityWeather.name;
        const celcius = Math.round(parseFloat(cityWeather.main.temp) - 273.15);
        this.temp.innerHTML = `${celcius} &deg;C`;
        this.desc.textContent = cityWeather.weather[0].description;
        this.hum.innerHTML = `${cityWeather.main.humidity}%`;
    }
}