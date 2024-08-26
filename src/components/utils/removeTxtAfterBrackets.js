export const removeTxtAfterBrackets = (text) => {
  return text.split(" (").shift();
};
