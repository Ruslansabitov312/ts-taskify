import React, { FC } from 'react'
import './App.css'
import InputField from './components/InputField'

const App: FC = () => {
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField />
    </div>
  )
}

export default App
