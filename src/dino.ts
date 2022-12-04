import {
  getCustomPropery,
  incrementCustomProperty,
  setCustomeProperty,
} from "./utils/updateCustomProperty";

const dinoElem = document.querySelector("[data-dino]") as HTMLImageElement;
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping: boolean;
let dinoFrame: number;
let currentFrameTime: number;
let yVelocity: number;

export const setupDino = (): void => {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  yVelocity = 0;
  setCustomeProperty(dinoElem, "--bottom", 0);
  document.removeEventListener("keydown", onJump);
  document.addEventListener("keydown", onJump);
};
export const updateDino = (delta: number, speedScale: number): void => {
  handleRun(delta);
  handleJump(delta, speedScale);
};

export const handleJump = (delta: number, speedScale: number): void => {
  if (isJumping) {
    dinoElem.src = `/images/dino-stationary.png`;
    return;
  }
  if (currentFrameTime >= FRAME_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
    dinoElem.src = `/images/dino-run-${dinoFrame}.png`;
    currentFrameTime -= FRAME_TIME;
  }

  currentFrameTime += delta * speedScale;
};

export const getDinoRect = (): DOMRect => {
  return dinoElem.getBoundingClientRect();
};

export const setDinoLose = (): void => {
  dinoElem.src = `/images/dino-lose.png`;
};

export const handleRun = (delta: number): void => {
  if (!isJumping) return;

  incrementCustomProperty(dinoElem, "--bottom", yVelocity * delta);

  if (getCustomPropery(dinoElem, "--bottom") <= 0) {
    setCustomeProperty(dinoElem, "--bottom", 0);
    isJumping = false;
  }

  yVelocity -= GRAVITY * delta;
};

export const onJump = (e: any): void => {
  //TODO: find appropriate type
  if (e.code !== "Space" || isJumping) return;

  yVelocity = JUMP_SPEED;
  isJumping = true;
};
