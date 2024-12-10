import React, { useState } from 'react'
import Sidebar from './Sidebar'

function TernaryAssignment() {
    const [data,setData] = useState(false)
  return (
    <div>
      {
        data ? <Sidebar/> : null
      }
      <button onClick={()=> setData(!data)} className='btn btn-primary'>Sidebar Show</button>
      {data}
    </div>
  )
}

export default TernaryAssignment
