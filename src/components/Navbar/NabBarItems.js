import React from 'react'
import { navitems } from '../../data/menudata';
import NavBarItem from './NavBarItem';

export default function NabBarItems() {
  return (
    <>
      {
        navitems.map((value,index) => {

          return (<NavBarItem key={index} item={value}> </NavBarItem>)
        })

      }

    </>
  )
}
