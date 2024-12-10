import React, { useState } from 'react'
import {data} from '../Screen/Data'
function SecondTabs() {
    const [tab,setTab] = useState(1)
    const ActiveButtons = (tabNumber) => {
        setTab(tabNumber)
    }
    const mobiles = data.filter((product) => product.item === "Mobile")
    const shirts = data.filter((product) => product.item === "Shirt")
    const pants = data.filter((product) => product.item === "Pant")
    const items = tab === 1 ? mobiles : tab === 2 ? shirts : tab === 3 ? pants : null
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-5 d-flex bg-primary" style={{height:'50px',justifyContent:'space-around'}}>
                <button type="button" onClick={()=> ActiveButtons(1)} style={{borderBottom: tab === 1 ? "5px solid red" : ""}} className="btn btn-outline-link text-white">Mobiles</button>
                <button type="button" onClick={()=> ActiveButtons(2)} style={{borderBottom: tab === 2 ? "5px solid red" : ""}} className="btn btn-outline-link text-white">Shirts</button>
                <button type="button" onClick={()=> ActiveButtons(3)} style={{borderBottom: tab === 3 ? "5px solid red" : ""}} className="btn btn-outline-link text-white">Paints</button>
            </div>
        </div>
        {
            items && items.map((value)=>{
                return(
                    <div className='d-flex justify-content-center mt-5'>
                        <button className='btn btn-outline-primary  btn btn-lg'>{value.item}</button>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default SecondTabs
