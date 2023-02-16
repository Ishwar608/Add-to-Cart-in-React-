import React from 'react'
import {Webmenu} from '../../data/menudata';
import ProfileMenuItem from './ProfileMenuItem';
export default function ProfileMenuItems({handleMenuClose}) {
  return (
    <>{

        Webmenu.map((value,index)=> {

            return (<ProfileMenuItem key={index} name={value} handleMenuClose={handleMenuClose}></ProfileMenuItem>)
        })
    }
    </> 
  )
}
