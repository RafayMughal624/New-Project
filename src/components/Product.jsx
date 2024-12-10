import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import desert from '../assets/images/desert.jpg'
import mountain from '../assets/images/mountain.jpg'
import rose from '../assets/images/rose.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
function Product() {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const localstorage=localStorage.getItem('name','rafay')

    const single_data = async () => {


        axios.get('https://fakestoreapi.com/products/' + id)
            .then(single => setData(single.data))
    }
    useEffect(() => {
        // localStorage.removeItem('name','asad')
        !localstorage?single_data():[]
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className='navbar'>
                            <h1 className='mb-3 heading-1'>Logo</h1>
                            <ul className='unordered-list mt-1'>
                                <a href=""><li>Home</li></a>
                                <a href=""><li>About</li></a>
                                <a href=""><li>Buy</li></a>
                                <a href=""><li>Contact</li></a>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-6">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={data && data.image} height={'400px'} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    <div className="col-6 text-center">
                        <h1>Product {data && data.id} Title</h1>
                        <h3 className='mt-4 text-danger'>{data && data.price}</h3>
                        <p className='mt-4'>{data && data.description}</p>
                        <h3 className='mt-4 text-danger d-flex justify-content-center'>
                        <Stack spacing={1}> 
              {/* <Rating name="half-rating " defaultValue={data && data.rating.rate} precision={0.5} /> */}
              <Rating name="half-rating-read" value={data && data.rating.rate} precision={0.5} readOnly />
            </Stack>
            </h3>
                        <button className='btn btn-outline-dark btn-lg mt-2'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
