// js/stats.js
let statsActivated = false;

function startCount(el) {
  const goal = parseInt(el.dataset.goal);
  let current = 0;

  const counter = setInterval(() => {
    el.textContent = ++current;
    if (current >= goal) clearInterval(counter);
  }, 20);
}

export function handleStatsCounter() {
  const statsSection = document.querySelector(".stats");
  const nums = document.querySelectorAll(".stat .num");

  if (
    !statsActivated &&
    statsSection &&
    window.scrollY >= statsSection.offsetTop - 150
  ) {
    statsActivated = true;
    nums.forEach(startCount);
  }
}
