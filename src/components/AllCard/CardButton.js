import { Button, CardActions } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../../action/productAction';

export let cartLength = 0;

export default function CardButton({ index }) {
    const data = useSelector(y => y.productData);
    const disData = useDispatch();
    
    const cartItem = (pindex) => {
       let d = data[index]
      disData(AddToCart(d));
    }
    // console.log(addCartItem);
    return (
        <CardActions sx={{ justifyContent: 'center' }}>
            <Button size="small" variant='contained' onClick={() => cartItem(index)} >+ Add Card</Button>
        </CardActions>
    )
}
