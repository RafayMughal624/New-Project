import React from 'react'

function Ternary() {
  const myname='ahmed'
  const myname2='asad'

  return (
    <div>
       <h1>Ternary Operator</h1>
       {myname=="ahmed"?'Yes my name is ahmed':'No my name is rafay'}
    </div>
  )
}
export default Ternary
