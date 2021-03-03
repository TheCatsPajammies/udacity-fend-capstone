

const GEONAMES_API_KEY = "thecatspajammies";
const PIXABAY_API_KEY = "20113405-27d003039b5b454452468ea3e";
const WEATHERBIT_API_KEY = "40f1362e73ec49da95974fd37b7ffdcd";

function getCoordinatesandPicture(e) {
    e.preventDefault()

    let location = document.getElementById("location").value
    
    fetch(`http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=${GEONAMES_API_KEY}`)
    .then(res => res.json)
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res
        console.log("You pressed the button!");
        document.getElementById("location").reset();
    })
}

export { getCoordinatesandPicture }
/*
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('location').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res.message
        document.getElementById('name').reset();
    })
}
*/