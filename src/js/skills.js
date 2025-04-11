// js/skills.js
let skillsActivated = false;

export function handleSkillProgress() {
  const skillSection = document.querySelector('.skills');
  const skillSpans = document.querySelectorAll('.skill-progress span');

  if (
    !skillsActivated &&
    skillSection &&
    window.scrollY >= skillSection.offsetTop - 150
  ) {
    skillsActivated = true;
    skillSpans.forEach(span => {
      span.style.width = span.dataset.width;
    });
  }
}
