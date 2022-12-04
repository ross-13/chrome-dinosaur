export const getCustomPropery = (elem: HTMLElement, prop: string): number => {
  return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0;
};

export const setCustomeProperty = (
  elem: HTMLElement,
  prop: string,
  value: string
): void => {
  elem.style.setProperty(prop, value);
};

export const incrementCustomProperty = (
  elem: HTMLElement,
  prop: string,
  inc: string
): void => {
  setCustomeProperty(elem, prop, getCustomPropery(elem, prop) + inc);
};
