import {BrowserRouter,Routes,Route} from 'react-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

export default function App() {
  return (
 <BrowserRouter>
  <Routes>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/Signin' element={<Signin/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/Profile' element={<Profile/>}></Route>
  </Routes>
 </BrowserRouter>
  )
}
   