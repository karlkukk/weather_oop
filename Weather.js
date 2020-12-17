class Weather {
    constructor(city) {
        this.city = city;
        this.key = 'd247062a732e8a5820e09dd05e663e76L';
    }

    // data from API
    async weatherData() {
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + this.key);
        const data = await resp.json();
        return data;
    }
}