// js/main.js
import { handleScrollProgress } from './scroller.js';
import { handleSkillProgress } from './skills.js';
import { startCountdown } from './countdown.js';
import { handleStatsCounter } from './stats.js';
// main.js
import articles from './articles.js';
import teamMembers from './teaMembers.js';
import testiMonialsData from './testimonials.js';

document.addEventListener('DOMContentLoaded', () => {
  // Create the articles on the page using the function from articles.js
  articles.createArticles();
  teamMembers.createMembers();
  testiMonialsData.createTestimonialBox();
});

window.addEventListener('scroll', () => {
  handleScrollProgress();
  handleSkillProgress();
  handleStatsCounter();
});

startCountdown('Dec 31, 2025 23:59:59');
