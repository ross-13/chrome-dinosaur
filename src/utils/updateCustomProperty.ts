export const getCustomPropery = (elem: HTMLElement, prop: string): number => {
  return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0;
};

export const setCustomeProperty = (
  elem: HTMLElement,
  prop: string,
  value: number
): void => {
  elem?.style.setProperty(prop, value as unknown as string);
};

export const incrementCustomProperty = (
  elem: HTMLElement,
  prop: string,
  inc: number
): void => {
  setCustomeProperty(elem, prop, getCustomPropery(elem, prop) + inc);
};
