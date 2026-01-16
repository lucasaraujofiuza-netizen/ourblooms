
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './components/Home.jsx'

import{BrowserRouter, Routes, Route} from 'react-router-dom'
function App(){
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/'element={<Home/>}> </Route>
       <Route path='/gallery'element={<Gallery/>}> </Route>
       <Route path='/about'element={<About/>}> </Route>
     </Routes>
     </BrowserRouter>
     

    </>
  )
}

export default App
