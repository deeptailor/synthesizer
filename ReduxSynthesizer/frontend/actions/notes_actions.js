export const KEY_PRESSED = "KEY_PRESSED";
export const KEY_RELEASED = "KEY_RELEASED";

export const keyPressed = (key) => {
  return {
    type: KEY_PRESSED,
    key: key
  };
};

export const keyReleased = (key) => {
  return {
    type: KEY_RELEASED,
    key: key
  };
};
