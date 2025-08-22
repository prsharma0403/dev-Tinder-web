import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import Body from './component/Body'
import Login from './component/Login'
import Profile from './component/Profile'
import Feed from './component/Feed'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import appStore from './utils/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
      <Routes>

        <Route path="/" element={<Body />}>
         <Route path="/Feed" element={<Feed />}/>
          <Route path="/Login" element={<Login />}/>
           <Route path="/Profile" element={<Profile />}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </Provider>


     
    </>
  )
}

export default App
