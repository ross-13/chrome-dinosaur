import {
  getCustomPropery,
  incrementCustomProperty,
  setCustomeProperty,
} from "./utils/updateCustomProperty";
import { randomNumberBetween } from "./utils/random";

const SPEED = 0.05;
const CACTUS_INTERVAL_MIN = 500;
const CACTUS_INTERVAL_MAX = 2000;
const worldElem = document.querySelector("[data-world]") as HTMLElement;

let nextCactusTime: number;

export const createCactus = (): void => {
  const cactus = document.createElement("img") as any;
  cactus.dataset.cactus = true;

  cactus.src = `src/assets/cactus.png`;
  cactus.classList.add("cactus");
  setCustomeProperty(cactus, "--left", 100);
  worldElem.append(cactus);
};

export const setupCactus = (): void => {
  nextCactusTime = CACTUS_INTERVAL_MIN;
  document.querySelectorAll("[data-cactus]").forEach((cactus) => {
    cactus.remove();
  });
};

export const updateCactus = (delta: number, speedScale: number): void => {
  document.querySelectorAll("[data-cactus").forEach((cactus) => {
    incrementCustomProperty(
      cactus as HTMLElement,
      "--left",
      delta * speedScale * SPEED * -1
    );
    if (getCustomPropery(cactus as HTMLElement, "--left") <= -100) {
      cactus.remove();
    }
  });

  if (nextCactusTime <= 0) {
    createCactus();
    nextCactusTime =
      randomNumberBetween(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX) /
      speedScale;
  }

  nextCactusTime -= delta;
};
