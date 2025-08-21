import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Body from './Body'
import Login from './Login'
import Profile from './Profile'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter basename='/'>
      <Routes>

        <Route path="/" element={<Body />}>
          <Route path="/Login" element={<Login />}/>
           <Route path="/Profile" element={<Profile />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  


     
    </>
  )
}

export default App
