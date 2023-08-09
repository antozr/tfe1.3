import React from 'react'
import { Outlet } from 'react-router'


function StyleLayout() {



  let urlcourante = document.location.pathname; 
  
  console.log(urlcourante);
  

  return (
    <>
   
    <Outlet/>
    </>
  )
}

export default StyleLayout