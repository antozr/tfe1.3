import React from 'react'
import './BoutonComp.scss'
import { Link } from 'react-router-dom'

function BoutonNormal({ nameBtn, linkBtn, ClassColor, linkHref }) {
  return (
    // <a href={linkBtn} className="sect__btn" >
    //     {nameBtn}
    // </a>
    <>
      {linkHref === true ? <>
        <a href={linkBtn} className={ClassColor} aria-label={nameBtn} >
          {nameBtn}
        </a>
      </> : <>
        <Link to={linkBtn} className={ClassColor} aria-label={nameBtn}>
          {nameBtn}
        </Link>
      </>}
    </>

  )
}

export default BoutonNormal