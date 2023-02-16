import { Box, Drawer, Typography } from '@mui/material'
import React, { useState } from 'react'
import SidenavItems from './SidenavItems'

export default function Sidenav({mobileOpen , handleDrawerToggle}) {
   
   console.log(mobileOpen);
   
    return (
        <Box
            component="nav"
            sx={{ width: { sm: 250 }}}
            aria-label="mailbox folders"        
        >
          
            <Drawer
                // container={container}
                
                variant="persistent"
                anchor='left'
                open={mobileOpen}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      width: 240,
                      marginTop : '75px',
                      boxSizing: 'border-box',
                    }
                  }}
            >
                <SidenavItems />
                
            </Drawer>
        </Box>
    )
}
