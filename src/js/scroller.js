// js/scroller.js
export function handleScrollProgress() {
  const scroller = document.querySelector('.scoller');
  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollTop = document.documentElement.scrollTop;
  if (scroller) {
    scroller.style.width = `${(scrollTop / pageHeight) * 100}%`;
  }
}
