$(document).ready(function () {
  // Load the Countdown section
  const countdownHTML = `
    <div class="responsive-wrapper">
      <div class="countdown-container">
        <div class="countdown">
          <div class="time-box-wrapper">
            <div class="time-box">
              <span class="number" id="days"></span>
            </div>
            <span class="time-label">Days</span>
          </div>
          <div class="time-box-wrapper">
            <div class="time-box">
              <span class="number" id="hours"></span>
            </div>
            <span class="time-label">Hours</span>
          </div>
          <div class="time-box-wrapper">
            <div class="time-box">
              <span class="number" id="minutes"></span>
            </div>
            <span class="time-label">Minutes</span>
          </div>
          <div class="time-box-wrapper">
            <div class="time-box">
              <span class="number" id="seconds"></span>
            </div>
            <span class="time-label">Seconds</span>
          </div>
        </div>
        <div class="message">New Lab video on Friday!</div>
      </div>
    </div>
    `;
  $("#countdown-section-placeholder").append(countdownHTML);

  countdown(); // Initialize the countdown once after all HTML is loaded
});

function countdown() {
  const now = new Date();
  const target = new Date();

  target.setHours(7, 0, 0, 0);

  if (now.getDay() === 5 && now.getHours() < 7) {
    target.setDate(now.getDate());
  } else {
    target.setDate(now.getDate() + ((5 + 7 - now.getDay()) % 7));
  }

  let diff = target - now;

  // Reset the countdown if it's Friday after 7am
  if (diff < 0) {
    target.setDate(target.getDate() + 7); // add 7 days to the target
    diff = target - now;
  }

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
