import React, { useState } from 'react'
import '../assets/css/Tabs.css'
function Tabs() {
    const [toggle,setToggle] = useState(1)
    // function Rafay(id){
    //     setToggle(id)
    // }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-12 d-flex justify-content-center mt-5">
                <button className='btn btn-primary' onClick={()=> setToggle(1)}>Home</button>
                <button className='btn btn-primary' onClick={()=> setToggle(2)}>About</button>
                <button className='btn btn-primary' onClick={()=> setToggle(3)}>Contact</button>
                <button className='btn btn-primary' onClick={()=> setToggle(4)}>Pages</button>
            </div>
            <div className={toggle == 1 ? "col-12 mt-5 text-center show-content": 'content'}>
                <h1>Home</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit doloremque iure reprehenderit ipsam mollitia in, excepturi, sed incidunt vel ut delectus distinctio repellat perspiciatis, maiores deleniti suscipit debitis eius. Cum dignissimos fugiat, praesentium quam culpa unde, minus nam quod, beatae alias saepe sunt aliquid architecto totam sapiente inventore? Maiores omnis reprehenderit blanditiis illum cumque aliquam corrupti molestias repudiandae, delectus dignissimos nobis, harum beatae minima molestiae ullam quod quam quaerat praesentium. Totam, delectus fuga amet ad dolor voluptatum soluta, rerum odit, non eos fugiat nobis nisi debitis ipsa ullam alias illo laborum voluptate accusantium? Amet nihil praesentium tempora unde! Ullam.</p>
            </div>
            <div className={toggle == 2 ? "col-12 mt-5 text-center show-content": 'content'}>
                <h1>About</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit doloremque iure reprehenderit ipsam mollitia in, excepturi, sed incidunt vel ut delectus distinctio repellat perspiciatis, maiores deleniti suscipit debitis eius. Cum dignissimos fugiat, praesentium quam culpa unde, minus nam quod, beatae alias saepe sunt aliquid architecto totam sapiente inventore? Maiores omnis reprehenderit blanditiis illum cumque aliquam corrupti molestias repudiandae, delectus dignissimos nobis, harum beatae minima molestiae ullam quod quam quaerat praesentium. Totam, delectus fuga amet ad dolor voluptatum soluta, rerum odit, non eos fugiat nobis nisi debitis ipsa ullam alias illo laborum voluptate accusantium? Amet nihil praesentium tempora unde! Ullam.</p>
            </div>
            <div className={toggle == 3 ? "col-12 mt-5 text-center show-content": 'content'}>
                <h1>Contact</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit doloremque iure reprehenderit ipsam mollitia in, excepturi, sed incidunt vel ut delectus distinctio repellat perspiciatis, maiores deleniti suscipit debitis eius. Cum dignissimos fugiat, praesentium quam culpa unde, minus nam quod, beatae alias saepe sunt aliquid architecto totam sapiente inventore? Maiores omnis reprehenderit blanditiis illum cumque aliquam corrupti molestias repudiandae, delectus dignissimos nobis, harum beatae minima molestiae ullam quod quam quaerat praesentium. Totam, delectus fuga amet ad dolor voluptatum soluta, rerum odit, non eos fugiat nobis nisi debitis ipsa ullam alias illo laborum voluptate accusantium? Amet nihil praesentium tempora unde! Ullam.</p>
            </div>
            <div className={toggle == 4 ? "col-12 mt-5 text-center show-content": 'content'}>
                <h1>Pages</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit doloremque iure reprehenderit ipsam mollitia in, excepturi, sed incidunt vel ut delectus distinctio repellat perspiciatis, maiores deleniti suscipit debitis eius. Cum dignissimos fugiat, praesentium quam culpa unde, minus nam quod, beatae alias saepe sunt aliquid architecto totam sapiente inventore? Maiores omnis reprehenderit blanditiis illum cumque aliquam corrupti molestias repudiandae, delectus dignissimos nobis, harum beatae minima molestiae ullam quod quam quaerat praesentium. Totam, delectus fuga amet ad dolor voluptatum soluta, rerum odit, non eos fugiat nobis nisi debitis ipsa ullam alias illo laborum voluptate accusantium? Amet nihil praesentium tempora unde! Ullam.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs
