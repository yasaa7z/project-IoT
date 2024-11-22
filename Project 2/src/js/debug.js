function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateValues() {
    const humidityElement = document.getElementById('humidity');
    const temperatureElement = document.getElementById('temperature');
    const soilElement = document.getElementById('soil');
    const windElement = document.getElementById('wind');

    humidityElement.textContent = getRandomValue(30, 90);
    temperatureElement.textContent = getRandomValue(15, 35);
    soilElement.textContent = getRandomValue(10, 100);
    windElement.textContent = getRandomValue(1, 100);
}

function statusSensor() {
    const statusText = document.getElementById('status');
    const statusDot = document.getElementById('status-dot');

    let random = getRandomValue(0, 1);

    if (random == 1) {
        statusText.textContent = 'Online';
        statusDot.style.backgroundColor = 'green';  // Dot berwarna hijau   // Latar belakang tetap
    } else {
        statusText.textContent = 'Offline';
        statusDot.style.backgroundColor = 'red';    // Dot berwarna merah   // Latar belakang berubah
    }
}

setInterval(updateValues, 500);
setInterval(statusSensor, 500);