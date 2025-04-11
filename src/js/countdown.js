// js/countdown.js
export function startCountdown(endDate) {
    const countDown = new Date(endDate).getTime();
  
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = countDown - now;
  
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minuts").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
    }, 1000);
  }
  