import React, {useState, useEffect, createContext} from 'react';
import Header from './components/header/Header'
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer';

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
      <Projects />
      <Footer />
      </>
  )
}

export default App
