function fetchData() {
    fetch('http://192.168.1.100')
    .then(Response => Response.json())
    .then(data => {
        document.getElementById('temperature').textContent = data.temperature;
        document.getElementById('humidity').textContent = data.humidity;
        document.getElementById('wind').textContent = data.wind;
        document.getElementById('soil').textContent = data.soil;
    })
    .catch(error => {
        console.error('Error saat mengambil data!', error);
    });
}

setInterval(fetchData, 1000);
fetchData();