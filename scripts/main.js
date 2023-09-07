function countdown() {
  const now = new Date();
  const target = new Date();

  target.setHours(7, 0, 0, 0);

  if (now.getDay() === 5 && now.getHours() < 7) {
    target.setDate(now.getDate());
  } else {
    target.setDate(now.getDate() + ((5 + 7 - now.getDay()) % 7));
  }

  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(countdown, 1000);
