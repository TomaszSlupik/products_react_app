import React, { useState } from 'react'
import './Products.scss'
import Addproducts from '../Addproducts/Addproducts'
import { DataGrid } from '@mui/x-data-grid';



export default function Products() {


  const columns = [
    { field: 'id', headerName: 'Ref', width: 70, editable: true},
    { field: 'name', headerName: 'Name products', width: 130, editable: true },
    { field: 'city', headerName: 'City', width: 130, editable: true },
    { field: 'price',headerName: 'Price',minWidth: 50,align: 'right',format: (value) => value.toFixed(2),sortable: false, editable: true
  }
   
  ];
  
  const [products, setProducts] = useState([
    { id: 1, name: 'Coffee', city: 'Poland', price: 9.54, },
    { id: 2, name: 'Tea', city: 'France', price: 4.32 },
    { id: 3, name: 'Cups', city: 'Albania', price: 10 },
    { id: 4, name: 'Television', city: 'Norway', price: 3456.87 },
    { id: 5, name: 'Watch', city: 'Portugal', price: 2342 },
    { id: 6, name: 'Flat', city: 'Switzerland', price: 7692024 },
    { id: 7, name: 'Phone', city: 'Italy', price: 3400 },
    { id: 8, name: 'Computer', city: 'Germany', price: 7273 },
    { id: 9, name: 'Xbox', city: 'Estonia', price: 1950 },
    {id: 10, name: 'Smartwatch', city: 'Czech Republic', price: 3773},
    {id: 11, name: 'Bike', city: 'Bulgaria', price: 6479},
    {id: 12, name: 'Shoes', city: 'Belgium', price: 242.87},
    {id: 13, name: 'Suit', city: 'Maroko', price: 1709.99},
    {id: 14, name: 'Motorhome', city: 'Luxembourg', price: 923768},
    {id: 15, name: 'Holiday', city: 'Austria', price: 4300},
  ])

  const style = {
    grid: {border: '1px solid #1976d2', boxShadow: '1px 1px 2px #1976d2', margin: '1em'}
  }

  return (
    <div>

      <Addproducts products={products} setProducts={setProducts}/>

    <div>
      <div className="products">
          <div className='products__box'>
          <div className="products__box-text">List of products</div>
          
          <DataGrid
            columns={columns}
            style={style.grid}
            rows={products}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowId={(row) => row.name}  
          />
        </div>
      </div>
    </div>
    </div>
  )
}
