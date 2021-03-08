const ul = document.getElementById('saved-trips')

function saveTrip() {
    const li = document.createElement('li')
    li.innerHTML = document.getElementById('results').innerHTML;
    document.getElementById('save-delete').innerHTML = ""
    ul.appendChild(li)

    alert("Trip saved!")
    document.getElementById('results').innerHTML = ""
}

export { saveTrip }