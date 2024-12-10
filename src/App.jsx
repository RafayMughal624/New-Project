import React, { useState } from 'react'
// import Header from './components/Header'
// import Sidebar1 from './components/Sidebar1'
// import MappingAssignment from './Screen/MappingAssignment'
// import Sidebar from './components/Sidebar'
// import Backdrop from './components/Backdrop'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
// import TernaryAssignment from './components/TernaryAssignment'
// import Navigation from './Screen/Navigation'
// import Solutions from './Screen/Solutions'
// import Mapping from './Screen/Mapping'
// import Tabs from './Screen/Tabs'
// import SecondTabs from './Screen/SecondTabs'
// import TabsTutorial from './Screen/TabsTutorial'
// import Dashboard from './Screen/Dashboard'
// import DataGridDemo from './Screen/Data_grid'
import Data_grid from './Screen/Data_grid'
import Api from './Screen/Api'
import Profile from './components/Profile'
import Product from './components/Product'
import Data_grid_Profile from './Screen/Data_grid_Profile'
import React_Bootstrap from './Screen/React_Bootstrap'
import ReactAssignemnt from './Screen/ReactAssignemnt'
import ReactBootstrap from './Screen/ReactBootstrap'
import ApexCharts from './Screen/ApexCharts'
function App() {
  // const [open,setOpen] = useState(false)
  // const handleclick=()=>{
  //   setOpen(!open)
  // }
  // const domContainer = document.querySelector('#app');
  //     ReactDOM.render(<ApexChart />, domContainer);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Api/>} />
        <Route path='/table' element={<Data_grid/>} />
        <Route path='/table1' element={<Data_grid_Profile/>} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/react' element={<React_Bootstrap/>} />
        <Route path='/react1' element={<ReactAssignemnt/>} />
        <Route path='/assignment' element={<ReactBootstrap/>} />
        <Route path='/apexcharts' element={<ApexCharts/>} />
      </Routes>
      </BrowserRouter>
      
      {/* <Header click={handleclick}/>
      <Backdrop click={handleclick} open={open}/>
      <Sidebar1 open={open}/> */}
    </div>
  )
}

export default App
