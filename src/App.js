import {React, useContext} from 'react'
import { ThemeContext} from './context/theme'
import './App.scss';
import MainRouter from './hoc/MainRouter'


const App = () => {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
  console.log('theme', theme)
  return (
    
    <div className="App app" style={{backgroundColor: theme.backgroundColor, color: theme.color, height: theme.height}}>
      <button type="button" onClick={toggleTheme}>{isDark ? "Dark" : "light"}</button>
      <MainRouter/>
    </div>
    
  )
}

export default App

