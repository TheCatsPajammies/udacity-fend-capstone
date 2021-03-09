 const tripData = {};

 let savedTrips = [];

function handleSubmit(event) {
    event.preventDefault()
    
    const GEONAMES_API_KEY = "thecatspajammies";
    const PIXABAY_API_KEY = "20113405-27d003039b5b454452468ea3e";
    const WEATHERBIT_API_KEY = "40f1362e73ec49da95974fd37b7ffdcd";

    // check what text was put into the form field
    let location = document.getElementById('location').value;
    let depDateText = document.getElementById('trip-date').value;
    // count down variables
    let timeStamp = (new Date(depDateText).getTime()) / 1000;
    let timeStampNow = (Date.now()) / 1000;
    let daysUntilTrip = Math.round((timeStamp - timeStampNow) / 86400);

    console.log("Location submitted!")
    // calls Geonames
    //fetch('http://localhost:8080/test')
    fetch(`http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=${GEONAMES_API_KEY}`)
    .then(res => res.json())
    .then(function(res) {
        let destination = res.geonames[0].toponymName
        let latitude = res.geonames[0].lat
        let longitude = res.geonames[0].lng
        
        console.log(longitude, latitude, destination)
        
        // calls Weatherbit with info from Geonames 
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${WEATHERBIT_API_KEY}`)
        .then(res1 => res1.json())
        .then(function(res1) {
            let weatherDesc = res1.data[daysUntilTrip].weather.description
            let temp = res1.data[daysUntilTrip].temp
            let date = res1.data[daysUntilTrip].datetime
            console.log(res1.data[daysUntilTrip].weather.description)
            console.log(JSON.stringify(res1.data[daysUntilTrip].weather.description))
            console.log(res1.data[daysUntilTrip])
            
            
            // calls Pixabay using the location from the form input gets a picture
            fetch(`https://pixabay.com/api/?&q=${location}&key=${PIXABAY_API_KEY}&image_type=photo`)
            .then(res2 => res2.json())
            .then(function(res2) {
            let pictureURL = res2.hits[0].webformatURL
            // Dynamically adds a trip card to the results div
            
            console.log(destination)
            console.log(temp)
            console.log(weatherDesc)
            console.log(pictureURL)
            
            tripData.city = destination
            tripData.temperature = temp
            tripData.weather = weatherDesc
            tripData.pic = pictureURL
            tripData.departDate = daysUntilTrip
            
            console.log(tripData);

            document.getElementById('save-delete').innerHTML = `<div  class="submit-holder">
                                                                    <button id="save" onclick="Client.saveTrip()">Save Trip</button>
                                                                    <button id="delete" onclick="Client.deleteTrip()">Delete Trip</button>
                                                                </div>`
            
            document.getElementById('results').innerHTML = `<div class="picture-container">
                                                                    
                                                                <div class="polaroid image1">
                                                                    <img src=${pictureURL} alt="${destination}">
                                                                    

                                                                    <div class="caption-holder">
                                                                        <p>Your trip to ${destination} is ${daysUntilTrip} days from now.</p>
                                                                        
                                                                        <p>${destination}'s weather forecast for ${date} is 
                                                                        ${temp} degrees Celsius with ${weatherDesc}.</p>
                                                                    </div>


                                                                </div>
                                                                </div>
                                                                
                                                            </div>`
        })
        //document.getElementById('results').innerHTML = `<p>Destination = ${destination}<br>Latitude = ${latitude}<br>Longitude = ${longitude}</p>`
        
    })
})}


export { handleSubmit }
