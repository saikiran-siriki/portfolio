import React, {useState, createContext} from 'react';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Experience from './components/experience/Experience';
import Header from './components/header/Header'

export const ThemeContext = createContext(null);


const App = () => {
  const [theme, setTheme] = useState('dark')
  function toggleTheme() {
    return theme==='dark'? setTheme('light'): setTheme('dark')
  }
  return (
    <ThemeContext.Provider value={toggleTheme}>
    <link rel="stylesheet" type="text/css" href={`./css/${theme}.css`} />
      <Header toggleTheme={toggleTheme}/>
      <Intro />
      <Skills />
      <Experience />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
