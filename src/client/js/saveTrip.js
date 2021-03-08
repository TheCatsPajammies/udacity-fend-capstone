const ul = document.getElementById('saved-trips')

function saveTrip() {
    const li = document.createElement('li');
    li.setAttribute('id', 'upcoming-trip');
    li.innerHTML = document.getElementById('results').innerHTML;
    document.getElementById('save-delete').innerHTML = ""
    ul.appendChild(li)
    document.getElementById('results').innerHTML = ""
    alert("Trip saved!")
}

function deleteFromList() {
    alert("marked!")
}

export { saveTrip }
