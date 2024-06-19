import './assets/custom.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Homepage from './components/pages/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>


      </Routes>
    </BrowserRouter>
    
  )
}

export default App
