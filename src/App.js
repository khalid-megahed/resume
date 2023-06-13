import React from 'react'
import { Route ,Routes ,  BrowserRouter}  from 'react-router-dom'
import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App