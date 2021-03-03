function handleSubmit(event) {
    event.preventDefault()
    const GEONAMES_API_KEY = "thecatspajammies";
    const PIXABAY_API_KEY = "20113405-27d003039b5b454452468ea3e";
    const WEATHERBIT_API_KEY = "40f1362e73ec49da95974fd37b7ffdcd";

    // check what text was put into the form field
    let location = document.getElementById('location').value

    console.log("Location submitted!")
    fetch('http://localhost:8080/test')
    fetch(`http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=${GEONAMES_API_KEY}`)
    .then(res => res.json())
    .then(function(res) {
        let destination = res.geonames[0].toponymName
        let latitude = res.geonames[0].lat
        let longitude = res.geonames[0].lng
        
        console.log(longitude, latitude, destination)

        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${WEATHERBIT_API_KEY}`)
        .then(res1 => res1.json())
        .then(function(res1) {
            let weatherDesc = res1.data[0].weather.description
            let temp = res1.data[0].temp
            console.log(res1.data[0].weather.description)
            console.log(JSON.stringify(res1.data[0].weather.description))
            fetch(`https://pixabay.com/api/?&q=${location}&key=${PIXABAY_API_KEY}&image_type=photo`)
            .then(res2 => res2.json())
            .then(function(res2) {
            let pictureURL = res2.hits[0].webformatURL
            
            document.getElementById('results').innerHTML = `<div class="picture-container">

                                                                <div class="polaroid image1" polaroid-caption="The weather in ${destination} is currently
                                                                ${temp} degrees Celsius with ${weatherDesc}">
                                                                <div  class="submit-holder">
                                                                    <button id="save">Save Trip?</button>
                                                                    <button id="delete" onclick="Client.deleteTrip()">Delete Trip!</button>
                                                                </div>
                                                                    <img src=${pictureURL} alt="${destination}">
                                                                    
                                                                </div>
                                                                
                                                            </div>`
        })
        //document.getElementById('results').innerHTML = `<p>Destination = ${destination}<br>Latitude = ${latitude}<br>Longitude = ${longitude}</p>`
        document.getElementById('location').reset()
    })
})}


export { handleSubmit }
