import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import image from '../assets/images/desert.jpg'
import { Avatar } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col } from 'react-bootstrap';
function Data_grid_Profile() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState(null)
  const fetch_api = async () => {
    localStorage.setItem('name', 'asad')
    axios.get('https://fakestoreapi.com/products')
      .then(response => setData(response.data))
  }
  useEffect(() => {
    fetch_api()
  }, [])
  console.log(data, 'data')
  const columns = [
    {
      field: 'id', headerName: 'ID', width: 90,
      renderCell: (params) => {
        const data = params.row.id
        const id = params.row.id
        return (
          <div>

            <Link to={`/products/${data}`} style={{ textDecoration: 'none', color: 'black' }}>{id}</Link>
          </div>
        )
      }
    },
    {
      field: 'title',
      headerName: 'title',
      width: 150,
      editable: true,
      renderCell: (params) => {
        const data = params.row.id
        const title = params.row.title
        return (
          <div>

            <Link to={`/products/${data}`} style={{ textDecoration: 'none', color: 'black' }}>{title}</Link>
          </div>
        )
      }
    },
    {
      field: 'price',
      headerName: 'price',
      width: 150,
      editable: true,
      renderCell: (params) => {
        const data = params.row.id
        const price = params.row.price
        return (
          <div>

            <Link to={`/products/${data}`} style={{ textDecoration: 'none', color: 'black' }}>{price}</Link>
          </div>
        )
      }
    },
    {
      field: 'description',
      headerName: 'description',
      type: 'number',
      width: 110,
      editable: true,
      renderCell: (params) => {
        const data = params.row.id
        const description = params.row.description
        return (
          <div>

            <Link to={`/products/${data}`} style={{ textDecoration: 'none', color: 'black' }}>{description}</Link>
          </div>
        )
      }
    },
    {
      field: 'fullName',
      headerName: 'title + price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 250,
      valueGetter: (value, row) => `${row.title || ''} ${row.price || ''}`,
    },
    {
      field: 'category',
      headerName: 'category',
      width: 150,
      editable: true,
      renderCell: (params) => {
        const data = params.row.id
        const category = params.row.category
        return (
          <div>

            <Link to={`/products/${data}`} style={{ textDecoration: 'none', color: 'black' }}>{category}</Link>
          </div>
        )
      }
    },
    {
      field: 'image',
      headerName: 'image',
      width: 90,
      editable: true,
      renderCell: (params) => {
        const data = params.row.id
        const image = params.row.image
        return (
          <div>

            <Link to={`/products/${data}`} style={{ textDecoration: 'none', color: 'black' }}><Avatar src={image} width={200} /></Link>
          </div>
        )
      }

    },
    {
      field: 'rating',
      headerName: 'rating',
      width: 130,
      editable: true,
      renderCell: (params) => {
        const rate = params.row.rating && params.row.rating.rate
        // const rate = params.row.rating.rate
        return (
          <div>

            <Stack spacing={1}>
              {/* <Rating name="half-rating" defaultValue={rate} precision={0.5} /> */}
              <Rating name="half-rating-read" defaultValue={rate} precision={0.5} readOnly />
            </Stack>
          </div>
        )
      }
    },
    {
      field: 'Create',
      headerName: "Create",
      width: "150",
      editable: true,
      renderCell:()=>{
        return(
          <div>
            <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <input type='text' placeholder='please enter title' className='form-control' />
          <input type='text' className='form-control' />
          <input type='text' className='form-control' />
          <input type='text' className='form-control' />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
          </div>
        )
      }
    }
  ];


  return (
    <div>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <input type='text' placeholder='please enter title' className='form-control' />
          <input type='text' className='form-control' />
          <input type='text' className='form-control' />
          <input type='text' className='form-control' />
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Box>
      {/* <img src={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'} alt="" /> */}
    </div>
  )
}

export default Data_grid_Profile
