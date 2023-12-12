import { React, useState } from 'react'
import {Buttons, Screen} from './components'

const App = () => {
  const [getVal, setVal] = useState("0")
  const [getEquation, setEquation] = useState("")
  return (
    <div className='app__wrapper'>
        <div className='calcContainer'>
            <Screen
              getEquation = {getEquation}
              getVal = {getVal}
            />
            <Buttons
              getEquation = {getEquation}
              setEquation = {setEquation}
              getVal = {getVal}
              setVal = {setVal}
            />
        </div>
    </div>
  )
}

export default App