function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();
