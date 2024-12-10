import React, { useState } from 'react'
import react from '../assets/react.svg'
import house from '../assets/images/house.jpg'
import about from '../assets/images/about.jpg'
import contact from '../assets/images/contact.jpg'
import pages from '../assets/images/pages.jpg'
import { Link } from 'react-router-dom'
import '../assets/css/Mapping.css'
function Sidebar() {
    const [data, setData] = useState(false)
    return (
        <div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-1">
                        <img src={react} height={'100px'} width={'100px'} onClick={() => setData(!data)} alt="" />
                    </div>
                    <div className={data ? 'sidebar rafay' : "sidebar"} style={{ height: '593px',position:'absolute',top:'0px' }}>
                        <div className="col-12 d-flex mt-5 ms-3">
                            <img src={react} height={"60px"} width={"60px"} onClick={() => setData(false)} className='mt-1' alt="" />
                            <h1 className='mt-2 ms-4' style={{ fontSize: "40px" }}>React JS</h1>
                        </div>
                        <div className="col-12 d-flex mt-5 ms-4">
                            <h3>React All Pages</h3>
                        </div>
                        <div className="col-12 d-flex mt-3 ms-4">
                            <img src={house} height={"40px"} style={{ backgroundColor: 'white' }} width={"40px"} className='mt-1' alt="" />
                            <h3 className='mt-2 ms-3'>Home</h3>
                        </div>
                        <div className="col-12 d-flex mt-2 ms-4">
                            <img src={about} height={"40px"} style={{ backgroundColor: 'white' }} width={"40px"} className='mt-1' alt="" />
                            <h3 className='mt-2 ms-3'>About</h3>
                        </div>
                        <div className="col-12 d-flex mt-2 ms-4">
                            <img src={contact} height={"40px"} style={{ backgroundColor: 'white' }} width={"40px"} className='mt-1' alt="" />
                            <h3 className='mt-2 ms-3'>Contact</h3>
                        </div>
                        <div className="col-12 d-flex mt-2 ms-4">
                            <img src={pages} height={"40px"} style={{ backgroundColor: 'white' }} width={"40px"} className='mt-1' alt="" />
                            <h3 className='mt-2 ms-3'>Pages</h3>
                        </div>
                        <div className="col-12 d-flex mt-5 ms-2">
                            <h3><Link style={{textDecoration:'none',color:'white'}} to={'https://icons.getbootstrap.com/'} target='_blank' className='mt-5 ms-3'>Icons Website</Link></h3>
                            <h5 style={{fontSize:'18px'}} className='mt-2 ms-3'><Link to={'https://getbootstrap.com/docs/5.3/getting-started/introduction/'} target='_blank' >Bootstrap.com</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
