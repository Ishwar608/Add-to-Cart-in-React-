import * as React from 'react';

import IconButton from '@mui/material/IconButton';

import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';


export default function NavBarItem(props) {
  return (
    <div>
      <MenuItem>
        <IconButton size="large" aria-label={props.item.helptext} color="inherit">
          <Badge badgeContent={props.item.badgeItem} color="error">
            {props.item.icone}
          </Badge>
        </IconButton>
        <p>{props.item.title}</p>
      </MenuItem>

    </div>
  )
}
