import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Aboute from './pages/Aboute'
import Contect from './pages/Contect'
import Error from './pages/Error'


function App() {

const navme = useNavigate()
function handleNavme(){
  navme("/you can put here any url");
}
  return (
    <>
    <div className='container'>
    <ul className='navbar'>
      <li><Link  to='/'>Home</Link></li>
      <li><Link  to='/aboute'>Aboute</Link></li>
      <li><Link  to='/contect'>Contect</Link></li>
    </ul>
    </div>
    
    <button className='submit-error' onClick={handleNavme}>go to error page</button>
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/aboute' element={<Aboute />}/>
      <Route path='/contect' element={<Contect/>}/>
      <Route path='/*' element={<Error/>}/>
      


    </Routes>
    
    </>
  )
}

export default App
