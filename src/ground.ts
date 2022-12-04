import {
  getCustomPropery,
  incrementCustomProperty,
  setCustomeProperty,
} from "./utils/updateCustomProperty";

const groundElems = document.querySelectorAll("[data-ground") as any; // TODO:
const SPEED = 0.05;
export const setupGround = (): void => {
  setCustomeProperty(groundElems[0], "--left", 0);
  setCustomeProperty(groundElems[1], "--left", 300);
};

export const updateGround = (delta: number, speedScale: number): void => {
  groundElems.forEach((ground: HTMLElement) => {
    incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1);
    if (getCustomPropery(ground, "--left") <= -300) {
      incrementCustomProperty(ground, "--left", 600);
    }
  });
};
