var countDownDate = new Date("Jan 31, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in the 'countdown' element
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is over, display a message and clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000); // Update every 1 second
