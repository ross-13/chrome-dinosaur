import "./style.css";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
// let speedScale;
// let score;

const worldElem = document.querySelector("[data-world") as HTMLElement;

const setPixelToWorldScale = ():void => {
  let worldToPixelScale: number;

  if ( window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`

}

let lastTime:null | number;
const update = (time: number):void => {
  if (lastTime == null ) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;  
  }
  const delta = time - lastTime;
  console.log(delta);

  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);

setPixelToWorldScale();
window.addEventListener('resize', setPixelToWorldScale)