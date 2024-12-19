function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Adiciona um zero à esquerda se o número for menor que 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Atualiza os valores no HTML
    document.getElementById('hour').textContent = hours;
    document.getElementById('min').textContent = minutes;
    document.getElementById('sec').textContent = seconds;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função uma vez para definir o valor inicial
updateClock();