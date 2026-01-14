
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About.jsx'

import{BrowserRouter, Routes, Route} from 'react-router-dom'
function App(){
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/'element={<App/>}/>
       <Route path='/gallery'element={<App/>}/>
       <Route path='/about'element={<App/>}/>
     </Routes>
     </BrowserRouter>
     

    </>
  )
}

export default App
