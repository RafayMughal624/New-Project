import React, { useEffect, useState } from 'react'
import image from '../assets/images/dashboard.jpg'
import person from '../assets/images/person.jpg'
import mobile from '../assets/images/mobile.jpg'
import payment from '../assets/images/payment.png'
import complaints from '../assets/images/complaints.png'
import support from '../assets/images/support.jpg'
import time from '../assets/images/time.jpg'
import bell from '../assets/images/bell.jpg'
import human from '../assets/images/human.jpg'
import { Avatar } from '@mui/material'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Profile() {
const {id}=useParams()
    const [data, setData] = useState(null)
    const fetch_api = async () => {
        axios.get(`https://fakestoreapi.com/users/`+id)
            .then(response => setData(response.data))
    }
    useEffect(() => {
        fetch_api()
    }, [])
    console.log(data, 'data')
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3" style={{ height: '593px', backgroundColor: '#fff' }}>
                        <div className="col-12 d-flex justify-content-center mt-4">
                            <img src={time} className='mt-5' height={'60px'} width={'70px'} alt="" />
                        </div>
                        <div className="col-12 d-flex mt-4">
                            <img src={image} height={'40px'} width={'40px'} className='ms-4' alt="" />
                            <h4 className='mt-1 ms-3'>My dashboard</h4>
                        </div>
                        <div className="col-12 d-flex mt-4">
                            <img src={person} height={'40px'} width={'40px'} className='ms-4' alt="" />
                            <h4 className='mt-1 ms-3'>Accounts</h4>
                        </div>
                        <div className="col-12 d-flex mt-4">
                            <img src={mobile} height={'40px'} width={'40px'} className='ms-4' alt="" />
                            <h4 className='mt-1 ms-3'>Mobilo</h4>
                        </div>
                        <div className="col-12 d-flex mt-4">
                            <img src={payment} height={'40px'} width={'40px'} className='ms-4' alt="" />
                            <h4 className='mt-1 ms-3'>Payments</h4>
                        </div>
                        <div className="col-12 d-flex mt-4">
                            <img src={complaints} height={'40px'} width={'40px'} className='ms-4' alt="" />
                            <h4 className='mt-1 ms-3'>Complaints</h4>
                        </div>
                        <div className="col-12 d-flex mt-4">
                            <img src={support} height={'40px'} width={'40px'} className='ms-4' alt="" />
                            <h4 className='mt-1 ms-3'>Supports</h4>
                        </div>
                    </div>
                    <div className="col-9 mt-5 d-flex">
                        <div className='mt-5 ms-5' style={{ height: '400px', width: '400px', backgroundColor: '#fff' }}>
                            <div className="col-12 d-flex justify-content-center">
                                <img src={human} height={'200px'} width={'200px'} alt="" />
                            </div>
                            <div className="col-12 mt-2 d-flex justify-content-center">
                                <h4>My profile Picture</h4>
                            </div>
                            <div className="col-12 text-center">
                                <p>My number</p>
                                <p>{data&&data.phone}</p>
                            </div>
                            <div className="col-12 text-center">
                                <p>My Email</p>
                                <p>{data&&data.email}</p>
                            </div>
                        </div>
                        <div className='mt-5 ms-5 col-12' style={{ height: '190px', width: '250px', backgroundColor: '#fff' }}>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <div className="col-12 text-center">
                                        <h4>My Name</h4>
                                        <p>Johnd</p>
                                        <h4>My Password</h4>
                                        <p>m38rmF$</p>
                                    </div>
                                </div>
                                <div className='mt-5 ms-3 col-12 me-2' style={{ height: '190px', width: '250px', backgroundColor: '#fff', position: 'relative', top: '7px', left: '-3px' }}>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h4>My City</h4>
                                            <p>kilcoole</p>
                                            <h4>My Street</h4>
                                            <p>new road</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex" style={{ backgroundColor: '#fff', height: '70px', position: 'absolute', top: '0px' }}>
                        <div className="col-9 text-center">
                            <h3>My finance dashboard</h3>
                            <p className='me-5 ms-1'>Welcome to xPay payment portal</p>
                        </div>
                        <div className="col-3 d-flex justify-content-center mt-3 me-5">
                            <img src={bell} height={'30px'} className='mt-2' width={'30px'} alt="" style={{ position: 'relative', right: '30px' }} />
                            <Avatar className='me-5 mt-1 ms-4' src={human} height={'40px'} style={{ position: 'relative', right: '30px' }} width={'40px'} alt="" />
                            <select name="" id="" className='me-5 form-select border-0 mb-2' style={{ position: 'relative', right: '70px' }}>
                                <option value="1">Hello Sami</option>
                                <option value="2">Hello Rafay</option>
                                <option value="3">Hello Gull Ra</option>
                                <option value="4">Hello Ahmed Bhai</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12" style={{ backgroundColor: '#fff', height: '70px', position: 'absolute', bottom: '0px' }}>

                    </div>
                    <div className="col-1" style={{ backgroundColor: '#fff', height: '530px', position: 'absolute', right: '0px' }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
