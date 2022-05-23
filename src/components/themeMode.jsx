const themeSetter = (themeState) => {
  const date = new Date();
  const nightTime = date.getHours() >= 20 || date.getHours() <= 8;

  return themeState !== "auto"
    ? themeState
    : nightTime
    ? "dark"
    : "light";
};

export default themeSetter;
