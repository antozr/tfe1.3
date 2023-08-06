import React from "react";
import CardInfoStyle from "./CardInfoStyle";

function ListSectionCard({dataCard, dataInfo,titleSection, bgBlack, bgBlackF }) {
  /// function to change data card
  
  const cardList = dataCard.map((el) =>
    el.book.map((ell, key) => (
      <CardInfoStyle
        urlImg={ell.urlImg}
        author={ell.author}
        nameBook={ell.nameBook}
        urlTarget={ell.linkProduit}
        key={ell.id}
      />
    ))
  );

  const cardArtiste = dataCard.map((el) =>
    el.artiste.map((ell, key) => (
      <CardInfoStyle
        urlImg={ell.urlImg}
        author={ell.style}
        nameBook={ell.name}
        urlTarget={ell.linkInsta}
        key={ell.id}
      />
    ))
  );
  //// les video 

  const cardFilm = dataCard.map((el)=>
  el.film.map((ell, key)=>(
    <CardInfoStyle
    urlImg={ell.urlImg}
    author={ell.author}
    nameBook={ell.nameFilm}
    urlTarget={ell.linkVideo}
    key={ell.id}
    video={true}/>
  )))
  /// close part of info

  function closePartInfoList(e) {
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.classList.toggle(
      "stylePage__sect--small"
    );
    e.target.children[0].classList.toggle("stylePage__svgArrow--click");

    
  }


  return (
    <>
      <div className="stylePage__sect " style={bgBlack}>
        <div className={bgBlackF=== true ? "stylePage__boxTitle stylePage__boxTitle--black": "stylePage__boxTitle"}>
          <h2 className="sect__title sect__title--2">{titleSection}</h2>
          <p
            className="sect__txt stylePage__btnToggle"
            onClick={closePartInfoList}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stylePage__svgArrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#010101"
            >
              <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
            </svg>{" "}
            <span>Réduire</span>{" "}
          </p>
        </div>
        <ul className={bgBlackF=== true ? "stylePage__listBox stylePage__listBox--black": "stylePage__listBox"}>{
            dataInfo === "artist" ? <>{cardArtiste}</> : ""
        }
        {
            dataInfo === "book" ? <>{cardList}</> : ""
        }
        {
            dataInfo === "film" ? <>{cardFilm}</> : ""
        }</ul>
      </div>
    </>
  );
}

export default ListSectionCard;
