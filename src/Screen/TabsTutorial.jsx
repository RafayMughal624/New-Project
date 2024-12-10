import React, { useState } from 'react'
import '../assets/css/Data.css'
function TabsTutorial() {
    const [tab,setTab] = useState(0)
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-5 mt-5 d-flex justify-content-evenly bg-primary">
                        <button onClick={()=> setTab(0)} style={{borderBottom: tab == 0 ? "5px solid yellow" : ""}} className='btn btn-primary'>Home</button>
                        <button onClick={()=> setTab(1)} style={{borderBottom: tab == 1 ? "5px solid yellow" : ""}} className='btn btn-primary'>About</button>
                        <button onClick={()=> setTab(2)} style={{borderBottom: tab == 2 ? "5px solid yellow" : ""}} className='btn btn-primary'>Contact</button>
                    </div>
                    <div className={tab == 0 ? "col-12 text-center mt-5 show-content" : "content"}>
                        <h1>Home</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit debitis laborum libero sint culpa ea voluptates iusto excepturi dolorem? Harum suscipit delectus beatae vero. Sed maxime dolore aliquam voluptate facere unde, repellendus nam reprehenderit aspernatur eum inventore dolores suscipit corporis qui natus laudantium error explicabo asperiores quisquam? Qui quia porro officia aut libero! Officiis, sint suscipit reiciendis molestias, officia sapiente temporibus itaque a vitae veritatis aliquid neque laborum illo, soluta eligendi reprehenderit modi tempore qui inventore iste quo ipsam rerum exercitationem omnis. Natus excepturi, et veritatis vero voluptatem distinctio delectus atque fugit deserunt numquam eius cum architecto alias incidunt ducimus.</p>
                    </div>
                    <div className={tab == 1 ? "col-12 text-center mt-5 show-content" : "content"}>
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit debitis laborum libero sint culpa ea voluptates iusto excepturi dolorem? Harum suscipit delectus beatae vero. Sed maxime dolore aliquam voluptate facere unde, repellendus nam reprehenderit aspernatur eum inventore dolores suscipit corporis qui natus laudantium error explicabo asperiores quisquam? Qui quia porro officia aut libero! Officiis, sint suscipit reiciendis molestias, officia sapiente temporibus itaque a vitae veritatis aliquid neque laborum illo, soluta eligendi reprehenderit modi tempore qui inventore iste quo ipsam rerum exercitationem omnis. Natus excepturi, et veritatis vero voluptatem distinctio delectus atque fugit deserunt numquam eius cum architecto alias incidunt ducimus.</p>
                    </div>
                    <div className={tab == 2 ? "col-12 text-center mt-5 show-centent" : "content"}>
                        <h1>Contact</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit debitis laborum libero sint culpa ea voluptates iusto excepturi dolorem? Harum suscipit delectus beatae vero. Sed maxime dolore aliquam voluptate facere unde, repellendus nam reprehenderit aspernatur eum inventore dolores suscipit corporis qui natus laudantium error explicabo asperiores quisquam? Qui quia porro officia aut libero! Officiis, sint suscipit reiciendis molestias, officia sapiente temporibus itaque a vitae veritatis aliquid neque laborum illo, soluta eligendi reprehenderit modi tempore qui inventore iste quo ipsam rerum exercitationem omnis. Natus excepturi, et veritatis vero voluptatem distinctio delectus atque fugit deserunt numquam eius cum architecto alias incidunt ducimus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabsTutorial
