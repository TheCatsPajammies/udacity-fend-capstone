const getWeatherBitData = async (longitude, latitude) => {
    const location = document.getElementById('location').value;
    const weatherBitAPICall = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${WEATHERBIT_API_KEY}`);
    const pixaBayAPICall = await fetch(`https://pixabay.com/api/?&q=${location}&key=${PIXABAY_API_KEY}&image_type=photo`);
    
    try {
  
      const pictureData = await pixaBayAPICall.json();
      const forecastData = await weatherBitAPICall.json();
      let pictureURL = pictureData.hits[0].webformatURL;
      let weatherDesc = forecastData.data[0].weather.description;
      let temp = JSON.stringify(forecastData.data[0].temp);
  
      let weatherBitData = {};
      weatherBitData.temp = temp;
      weatherBitData.desc = weatherDesc;
      weatherBitData.picURL = pictureURL;
      postData('/add', { date: newDate, temp: weatherBitData.temp, desc: weatherBitData.desc, picURL: weatherBitData.picURL  });
      return weatherBitData;
  
  
    } catch (error) {
      console.log("error", error);
    }
}

export { getWeatherBitData }