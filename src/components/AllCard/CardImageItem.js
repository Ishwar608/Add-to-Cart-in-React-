import { CardMedia } from '@mui/material'
import React from 'react'

export default function CardImageItem({images}) {
    return (
        <CardMedia
            
            component="img"
            alt="green iguana"
            sx={{ width : '243px', height: '262px',objectFit : 'revert' }}
            image={images}
        />
    )
}   
