
const themeSetter = (themeState, setTheme) => {
    // const date = new Date();
    // const nightTime = date.getHours() >= 20 || date.getHours() <= 8;

    themeState !== 'auto' ? setTheme(themeState)
    :setTheme('dark');

      
  return null
}

export default themeSetter
