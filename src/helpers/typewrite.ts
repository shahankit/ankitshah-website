import getRandom from "./getRandom";

export default function typewrite(node: HTMLElement, text: string) {
  let renderedTextLength = 0;
  node.classList.add("cursor-animation");
  function animate() {
    renderedTextLength += 1;
    node.textContent = text.substr(0, renderedTextLength);

    if (renderedTextLength !== text.length) {
      const delta = getRandom(100, 200);
      setTimeout(() => window.requestAnimationFrame(animate), delta);
    } else {
      node.classList.remove("cursor-animation");
    }
  }

  setTimeout(() => window.requestAnimationFrame(animate), 500);
}
