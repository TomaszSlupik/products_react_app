import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Addproducts.scss'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import 'animate.css';
import PropTypes from 'prop-types';

export default function Addproducts({products, setProducts}) {
    const [numberRef, setNumberRef] = useState('')
    const [addproduct, setAddProduct] = useState('')
    const [addcity, setAddCity] = useState('')
    const [addprice, setAddPrice] = useState('')
    


    const style = {
        input: {fontFamily: 'Montserrat'}, 
        edit: {
            cursor: 'pointer', color: '#1976d2', marginLeft: '0.5em'
        },
        btn: {marginLeft: '1em'}
    }

  

    const firstAdd = (e) => {
        setNumberRef(e.target.value)
    }

    const secondAdd = (e) => {
        setAddProduct (e.target.value)
    }

    const thirdAdd = (e) => {
        setAddCity (e.target.value)
    }

    const fourthAdd = (e) => {
        setAddPrice (e.target.value)
    }
    


    const isNumber = (e) => {
        const errorRef = document.querySelector('.addproduct__box-errorRef')
        if (isNaN(parseInt(e.key, 10))) {
            e.preventDefault()
            errorRef.innerHTML = '“Please, input number”'    
        }
        else {
            errorRef.innerHTML = ''
            return true
        }
    }

    const isNumberorFloat = (e) => {
        const errorRef = document.querySelector('.addproduct__box-errorRef')

        if (e.key === "." || e.key === ",") {
            errorRef.innerHTML = ''
           return true 
           
       }
     
       else if (isNaN(parseInt(e.key, 10))) {
           e.preventDefault()
           errorRef.innerHTML = '“Please, input number: Integer or Float”'    
       }
     
       else {
           errorRef.innerHTML = ''
           return true
       }
    }

    const addProductToList = (e) => {
        e.preventDefault()
        const newProduct = {
            id: numberRef,
            name: addproduct, 
            city: addcity, 
            price: addprice
        }
        const allProducts = [
            ...products, newProduct
        ]

        setProducts(allProducts)
        
    }

    const boxAcceptEdit = () => {
        const editItem = document.querySelector('.boxAcceptEdit')
        editItem.style.display= 'flex'
    }

    const boxAcceptEditNone = () => {
        const editItem = document.querySelector('.boxAcceptEdit')
        editItem.style.display= 'none'
    }


    const deleteProductToList =  (e) => {
        e.preventDefault()
        // const listofProducts = products.map (el => el.name)
        // console.log(addproduct)
        // console.log(listofProducts)
        // const allProducts = [...products].filter(addproduct => addproduct !== listofProducts)
        // setProducts(allProducts)
        // console.log(products)

        setProducts([])
        boxAcceptEditNone()

    }

  return (
    <div>
        <div className="addproduct">
            <div className="addproduct__text">Add Product to List</div>
            <div className="addproduct__box">
            <Box sx={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                <Grid style={style.grid} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} sm={2}>
                    <TextField 
                    onChange={firstAdd}
                    onKeyPress={e=>isNumber(e)}
                    style={style.input} id="outlined-basic" label="Ref" variant="outlined" size='small' />
                    </Grid>
                    <Grid item xs={6} sm={2}>
                    <TextField 
                    onChange={secondAdd}
                    style={style.input} id="outlined-basic" label="Product" variant="outlined" size='small' />
                    </Grid>
                    <Grid item xs={6} sm={2}>
                    <TextField 
                    onChange={thirdAdd}
                    style={style.input} id="outlined-basic" label="City" variant="outlined" size='small' />
                    </Grid>
                    <Grid item xs={6} sm={2}>
                    <TextField 
                    onKeyPress={e=> isNumberorFloat(e)}
                    onChange={fourthAdd}
                    style={style.input} id="outlined-basic" label="Price" variant="outlined" size='small' />
                    </Grid>
                    <Grid item xs={6} sm={2}>
                    <Button 
                    onClick={addProductToList}
                    variant="contained">Add</Button>
                    <DeleteIcon 
                    onClick={boxAcceptEdit}
                    style={style.edit}/>
                    </Grid>

                </Grid>
                </Box>
                <div className='addproduct__box-errorRef'></div>
            </div>
            <div className="boxAcceptEdit animate__animated animate__zoomInDown">
            <div className="boxAcceptEdit__text">Do you want to delete all Products?</div>
            <div className="boxAcceptEdit__row">
            <Button 
            onClick={deleteProductToList}
            variant="contained" color='success'>Yes</Button>
            <Button 
            onClick={boxAcceptEditNone}
            style={style.btn} variant="contained" color='error'>No</Button>
            </div>
            </div>
        </div>
    </div>
  )
}

Addproducts.propTypes = {
    numberRef: PropTypes.number.isRequired,
    addproduct: PropTypes.string.isRequired,
    addcity: PropTypes.string.isRequired,
}