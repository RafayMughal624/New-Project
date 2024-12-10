import React from 'react'

function Sidebar1({open}) {
  return (
    <div>
      <div className={open?'sidebar rafay':'sidebar'}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Product</li>
            <li>Services</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar1
