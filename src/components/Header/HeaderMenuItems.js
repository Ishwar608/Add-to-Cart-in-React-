import IconButton from '@mui/material/IconButton';
import React from 'react';


export default function HeaderMenuItems({ items }) {
  return (
    <div>{items.map((value, index) => {

      return (<>
        <IconButton key={index} size="large"  aria-label={value.helpText} color="inherit">
          {value.child}
        </IconButton>

      </>)
    })

    }</div>
  )
}
