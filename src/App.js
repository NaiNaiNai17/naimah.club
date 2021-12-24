import React from 'react'
import './App.scss';
import MainRouter from './hoc/MainRouter'
import CssBaseline from '@mui/material/CssBaseline';


const App = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
    <div className="App">
      <MainRouter/>
    </div>
    </React.Fragment>
  )
}

export default App

