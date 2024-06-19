const timeLeft = document.getElementById('time-left');
const birthday = new Date('2024-06-30T00:00:00'); // Corrected date format (YYYY-MM-DD)

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function countDown() {
    const today = new Date();
    const timeSpan = birthday - today;

    if (timeSpan <= -day) {
        timeLeft.innerHTML = 'Hope you had a nice Birthday!!';
        clearInterval(timerId);
        return;
    }

    if (timeSpan <= 0) {
        timeLeft.innerHTML = 'Happy Birthday!!';
        clearInterval(timerId);
        return;
    }

    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    timeLeft.innerHTML = `
        <div class="time-section"><span>${days}</span> days</div>
        <div class="time-section"><span>${hours}</span> hrs</div>
        <div class="time-section"><span>${minutes}</span> mins</div>
        <div class="time-section"><span>${seconds}</span> secs</div>
    `;
}

timerId = setInterval(countDown, second);
