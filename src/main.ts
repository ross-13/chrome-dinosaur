import "./style.css";
import { updateGround, setupGround } from "./ground";
import { updateDino, setupDino } from "./dino";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
const SPEED_SCALE_INCREASE = 0.0001; // TODO: Now it doesn't work

let lastTime: null | number;
let speedScale: number;
let score: number;

const worldElem = document.querySelector("[data-world") as HTMLElement;
const scoreElem = document.querySelector("[data-score]") as HTMLElement;
const startScreenElem = document.querySelector(
  "[data-start-screen]"
) as HTMLElement;

const setPixelToWorldScale = (): void => {
  let worldToPixelScale: number;

  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH;
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
};

const updateSpeedScale = (delta: number): void => {
  speedScale += delta * SPEED_SCALE_INCREASE;
};

const updateScore = (delta: number): void => {
  score += delta * 0.01;
  scoreElem.textContent = Math.floor(score) + "";
};

const update = (time: number): void => {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }
  const delta = time - lastTime;

  updateGround(delta, 1);
  updateDino(delta, 1);
  updateSpeedScale(delta);
  updateScore(delta);

  lastTime = time;
  window.requestAnimationFrame(update);
};

const start = () => {
  lastTime = null;
  speedScale = 1;
  score = 0;
  setupGround();
  setupDino();
  startScreenElem.classList.add("hide");
  window.requestAnimationFrame(update);
};

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);
window.addEventListener("keydown", start, { once: true });
