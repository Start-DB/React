import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Teste } from './pages/Teste'
import { Fotter } from './components/Fotter'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home'element = {<Home />}/>
      
      <Route path='/section'element = {<Teste />}/>
      
    </Routes>
    <Fotter/>
    </BrowserRouter>
  )
}

export default App;
