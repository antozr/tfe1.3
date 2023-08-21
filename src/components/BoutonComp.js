import React from "react";
import "./BoutonComp.scss";
import { Link, useNavigate } from "react-router-dom";

function BoutonNormal({ nameBtn, linkBtn, ClassColor, linkHref, funChangeP , withAnim}) {
  const navigate = useNavigate();
  function goToStyle() {
   if(withAnim === false ){
    
   }else{
    window.scrollTo(0, 0);
    let layoutStyleB = document.querySelector(".sect__layoutAnim");

    layoutStyleB.classList.add("sect__layoutAnim--close");
    setTimeout(() => {
      //setLocationNod(linkBtn)
      navigate(linkBtn);
    }, 800);
   }
  }
  return (
    // <a href={linkBtn} className="sect__btn" >
    //     {nameBtn}
    // </a>
    <>
      {linkHref === true ? (
        <>
          <a
            href={funChangeP === true ? "#" : linkBtn}
            className={ClassColor}
            aria-label={nameBtn}
            
            onClick={goToStyle}
          >
            {nameBtn}
          </a>
        </>
      ) : (
        <>
          <Link to={linkBtn} className={ClassColor} aria-label={nameBtn}>
            {nameBtn}
          </Link>
        </>
      )}
    </>
  );
}

export default BoutonNormal;
