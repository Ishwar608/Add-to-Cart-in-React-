import { styled, useTheme } from '@mui/material/styles';
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardContentItem from '../AllCard/CardContentItem';
import CardImageItem from '../AllCard/CardImageItem';
import { RemoveToItem } from '../../action/productAction';

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



export default function CartList({ open ,inpt}) {
  const addCatLit = useSelector(y => y.addToData)
  const disData = useDispatch();

  const removeItem = (index) =>{
    disData(RemoveToItem(index))
  }

  // console.log(addCatLit);
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
          addCatLit.filter((ele)=>{
            return ele.title.toLowerCase().includes(inpt)
          }).map((item, index) => {
            return (
              <Card key={index} sx={{ maxWidth: 250, m: 1 }}>
                <CardImageItem images={item.image} />
                <CardContentItem description={item.description} title={item.title} price={item.price * item.qty} qty={item.qty} />
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button size="small" variant='contained' onClick={() => removeItem(index)} >Remove</Button>
                </CardActions>
              </Card>
            )
          })
        }

      </Stack>
    </Main>
  )
}
