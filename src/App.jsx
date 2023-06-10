import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import { routes } from './routes/routes';


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>
        
        </BrowserRouter>
      </div>
  )
}

export default App
