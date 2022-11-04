import React, {useState, useEffect, createContext} from 'react';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Experience from './components/experience/Experience';
import Header from './components/header/Header'

export const ThemeContext = createContext(null);
export const UpdateThemeContext = createContext(null)

const defaultTheme = 'dark'

const App = () => {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    let theme = localStorage.getItem('theme') || defaultTheme;
    setTheme(theme);
}, []);

  function toggleTheme() {
    if(theme==='dark') {
      setTheme('light')
      localStorage.setItem('theme','light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme','dark')
    }
  }
  return (
    <>
    <link rel="stylesheet" type="text/css" href={`./css/${theme}.css`} />
    <ThemeContext.Provider value={theme==='light' }>
      <UpdateThemeContext.Provider value={toggleTheme}>
        <Header/>
      </UpdateThemeContext.Provider>
      </ThemeContext.Provider>
      <Intro />
      <Skills />
      <Experience />
      <Footer />
      </>
  )
}

export default App
