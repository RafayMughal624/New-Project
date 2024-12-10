import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import image from '../assets/images/desert.jpg'
import { Avatar } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link,useParams } from 'react-router-dom';
function Data_grid() {


  const [data, setData] = useState(null)
  const fetch_api = async () => {
    axios.get('https://fakestoreapi.com/users')
      .then(response => setData(response.data))
  }
  useEffect(() => {
    fetch_api()
  }, [])
  console.log(data, 'data')
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'username',
      width: 150,
      editable: true,
      renderCell:(params)=>{
        const data = params.row.id
        const username = params.row.username
        return(
          <div>
            
            <Link to={`/profile/${data}`} style={{textDecoration:'none',color:'black'}}>{username}</Link>
          </div>
        )
      }
    },
    {
      field: 'price',
      headerName: 'price',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'description',
      type: 'number',
      width: 110,
      editable: true,
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
    },
    {
      field: 'image',
      headerName: 'image',
      width: 150,
      editable: true,
      renderCell: (params) => {
        const image = params.row.image
        return (
          <div>
            <Avatar src={image} alt="" width={200} />
          </div>
        )

      }

    },
    {
      field: 'rating',
      headerName: 'rating',
      width: 150,
      editable: true,
      renderCell: (params) => {
        const rate = params.row.rating&&params.row.rating.rate
        // const rate = params.row.rating.rate
        return (
          <div>

            <Stack spacing={1}> 
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Rating name="half-rating-read" defaultValue={rate} precision={0.5} readOnly />
            </Stack>
          </div>
        )
      }
    },
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
      </Box>
      <img src={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'} alt="" />
    </div>
  )
}

export default Data_grid
