import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import CardButton from './CardButton'
import CardImageItem from './CardImageItem';
import CardContentItem from './CardContentItem';
import { Card } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { GetproductData } from '../../action/productAction';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${250}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);


export default function CradItems({ open ,inpt}) {
  const data = useSelector(y => y.productData)
  const disData = useDispatch();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(y => {
        disData(GetproductData(y.data))
      })
  }, [])
  return (
    <Main open={open}>
      <Stack

        direction="row"
        flexWrap='wrap'
        justifyContent='right'
        alignItems='center'
        marginTop='10px'

      >
        {
          data.filter((ele)=>{
            return ele.title.toLowerCase().includes(inpt)
          }).map((item, index) => {
            return (
              <Card key={index} sx={{ maxWidth: 250, m: 1 }}>
                <CardImageItem images={item.image} />
                <CardContentItem description={item.description} title={item.title} price={item.price} />
                <CardButton index={index} />
              </Card>
            )
          })
        }

      </Stack>
    </Main>
  )
}
