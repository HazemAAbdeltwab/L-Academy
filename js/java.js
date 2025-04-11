let scroller = document.querySelector(".scoller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}% `;
});

let targetScroll = document.querySelector("div.skills");
let targetSpan = document.querySelectorAll("div.skill-progress span");
window.onscroll = function () {
  if (window.scrollY >= targetScroll.offsetTop - 150) {
    // Corrected typo in offsetTop
    console.log("scroll");
    targetSpan.forEach((span) => {
      span.style.width = span.dataset.width; // Corrected typo in dataset and camelCase
    });
  }
  if (window.scrollY >= targetScroll.offsetTop - 150) {
    // Corrected typo in offsetTop
    console.log("scroll");
    targetSpan.forEach((span) => {
      span.style.width = span.dataset.width; // Corrected typo in dataset and camelCase
    });
  }
};

let countDown = new Date("DEC 31 ,2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dataNow = new Date().getTime();
  let dataDiff = countDown - dataNow;

  let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuts = Math.floor((dataDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dataDiff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minuts").innerHTML = minuts;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

let nums = document.querySelectorAll(".stat .num");
let numSection = document.querySelector("div .stats");

function startCount(el) {
  let goal = parseInt(el.dataset.goal); // Parsing the goal to an integer
  let current = parseInt(el.textContent); // Parsing the current value to an integer
  let increment = Math.ceil((goal - current) / 100); // Calculate the increment per step
  let count = setInterval(() => {
    current += increment; // Increment the current value
    el.textContent = current; // Update the text content
    if (current >= goal) {
      // Check if the goal is reached
      clearInterval(count); // Clear the interval
    }
  }, 20); // Reduced the interval to 20 milliseconds for smoother animation
}

nums.forEach(startCount); // Apply startCount to each element
