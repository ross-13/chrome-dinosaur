import "./style.css";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldElem = document.querySelector("[data-world") as HTMLElement;

const setPixelToWorldScale = () => {
  let worldToPixelScale;

  if ( window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`

}

setPixelToWorldScale();
window.addEventListener('resize', setPixelToWorldScale)