function fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('animalPicture').src = data.message;
        })
        .catch(error => console.error('Error fetching dog image:', error));
}

function fetchCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            document.getElementById('animalPicture').src = data[0].url;
        })
        .catch(error => console.error('Error fetching cat image:', error));
}
