import React from "react";

//* import des images */
import backImgjap02 from "../assets/images/japon/compressed/arrierePlanYakuza.webp";
import pinup from "../assets/images/oldamerica/pinup2.webp";
import celteImg from "../assets/images/celte/TRIKETRA1.webp";
import nordicimg from "../assets/images/nordic/vikingHome.webp";
import russeImg from "../assets/images/russie/Caste.webp";
import nextImg from "../assets/images/oldamerica/fondPeauNoir.webp";
import {  Link, useNavigate } from "react-router-dom";

function SmallCardList() {

  let allLink = [
    {
      link: "/styles/japon",
      img: backImgjap02,
      name: "Japon, l'irezumi",
    },
    {
      link: "/styles/oldschool",
      img: pinup,
      name: "Old-school Américain",
    },
    {
      link: "/styles/celtic",
      img: celteImg,
      name: "Classique celte",
    },
    {
      link: "/styles/russie",
      img: russeImg,
      name: "Prison Russe & tatouage",
    },
    {
      link: "/styles/nordic",
      img: nordicimg,
      name: "Classique nordique",
    },
    {
      link: "/styles",
      img: nextImg,
      name: "Bientôt du nouveau contenu",
    },
  ];



  function goToStyle() {
    window.scrollTo(0, 0);
    let layoutStyleB = document.querySelector(".sect__layoutAnim");

    layoutStyleB.classList.add("sect__layoutAnim--close");
   }
  const allBoxLink = allLink.map((el) => (
    <li
      className="styleTT__boxEL"
      style={{ backgroundImage: `url(${el.img})` }}
    >
      {el.link === "/styles" ? <><p className="sect__txt styleTT__link" style={{cursor:"auto"}}><span> {el.name}</span></p> </> : <Link
        to={el.link}
        aria-label="direction vers un style de tattoo"
        className="sect__txt styleTT__link"
        onClick={goToStyle}
      > <span> {el.name}</span>
      </Link>}
       
    </li>
  ));

  return (
    <>
      <div className="styleTT__boxTitle">
        <h2 className="sect__title sect__title--2">
          Choisis ton style
          <br /> <span style={{color:"#f9b949",margin:"0 0 0 -40px"}}>&</span>
           Parts à la découverte !
        </h2>
      </div>
      <div className="styleTT__box">
        <ul className="styleTT__boxUL">{allBoxLink}</ul>
      </div>

      </>
  );
}

export default SmallCardList;
