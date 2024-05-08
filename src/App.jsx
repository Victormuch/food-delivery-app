import React from 'react'
import NavBar from './components/NavBar'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'

function App() => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        < Routes path= '/' element= {<Home/>} />
      </Routes path= '/cart' element={<cart/>}/>
      < Routes path ='/order' elements={<PlaceOrder/>}>

      </Routes>
    </div>
  );
}

export default App;
