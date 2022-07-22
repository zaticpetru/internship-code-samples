const switcher = document.querySelector('#theme-switcher')
const colorThemeChanger = document.querySelector('#change-color-theme')

const doc = document.firstElementChild

if(switcher) 
  switcher.addEventListener('input', e =>
    setTheme(e.target.value))

if(colorThemeChanger) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    colorThemeChanger.checked = true
  }
  colorThemeChanger.addEventListener('input', e =>
    setTheme(e.target.checked ? 'dark' : 'light'))
}

const setTheme = theme =>
  doc.setAttribute('color-scheme', theme)