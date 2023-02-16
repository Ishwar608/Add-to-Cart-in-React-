import { CardContent, Typography } from '@mui/material'
import React from 'react'
import { ShowMoreDate } from './ShowMoreDate'

export default function CardContentItem({ title, description, price, qty }) {

    return (
        <CardContent>
            <Typography gutterBottom variant="h7" component="div">
                <ShowMoreDate helpText={title} />
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary">
                <ShowMoreDate helpText={description} />
            </Typography>
            <Typography
                variant="subtitle2"
                sx={{ m: 1 }}
            >
                Price : - {price} $
            </Typography>
            {
                qty ? <Typography
                    variant="subtitle2"
                    sx={{ m: 1 }}
                >
                    Qty : - {qty}
                </Typography> : ''
            }

        </CardContent>
    )
}
