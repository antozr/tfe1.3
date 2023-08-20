import React, { useEffect, useState } from "react";
import FirstSection from "../components/FirstSection";
import InterSectionBox from "../components/InterSectionBox";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import dataStyle from "../assets/data/StylesData.json";
///import img
import BGFirstSection from "../assets/images/russie/prisonnier4.webp";
import BGBlackInter from "../assets/images/oldamerica/fondPeauNoir.webp";
import ListSectionCard from "../components/ListSectionCard";
import BGCelte from "../assets/images/celte/backCelt2.webp";

function PlusDInfo() {
  console.log("je suis olus info");
  const [navSecondActif, setNavSecondActif] = useState("Tous");
  const [dataCard, setDataCard] = useState(dataStyle);
  const [showTrans2, setShowTrans2] = useState(true);
  let allTitle = [
    <>
      <span className="sect__title--fontDruzokh ">Explore</span> <br />
      les styles
    </>,
    <>
      {" "}
      Prêt pour <br /> une exploration <br /> approfondie ?
    </>,
    <> </>,
  ];
  let allTxt = [
    <>
      Si tu cherches à en savoir plus, que tu souhaites avoir un complément
      d’informations ou tout simplement assouvir ta curiosité.{" "}
      <b>Alors tu es au bon endroit !</b>{" "}
    </>,
    <>
      {" "}
      Tu vas pouvoir choisir un style ou tous les prendre, et explorer l’univers
      qui est présent autour de ces styles.{" "}
    </>,
    <> </>,
  ];
  let allLink = [
    "Tous",
    "Japon",
    "Old-school",
    "Nordique",
    "Prison Russe",
    "Celtique",
  ];

  const linkLandEl = allLink.map((el) => (
    <li className="stylePage__el" onClick={changestatNavSecond} key={el}>
      <p className="stylePage__link sect__txt sect__txt--bold" title={el}>
        {el}
      </p>
    </li>
  ));
  //// set de la nav
  useEffect(() => {
    if (navSecondActif === "Tous") {
      let firstLink = document.querySelectorAll(".stylePage__link");
      firstLink[0].classList.add("stylePage__link--actif");
    }
  });

  function changestatNavSecond(e) {
    setNavSecondActif(e.target.title.toLowerCase());

    if (e.target.title === "Tous") {
      setDataCard(dataStyle);
    } else if (e.target.title === "Celtique") {
      setDataCard(
        dataStyle.filter((card) => card.name.toLowerCase() === "nordique")
      );
    } else {
      setDataCard(
        dataStyle.filter(
          (card) => card.name.toLowerCase() === e.target.title.toLowerCase()
        )
      );
    }

    let allLink = document.querySelectorAll(".stylePage__link");
    allLink.forEach((el) => {
      el.classList.remove("stylePage__link--actif");
    });
    e.target.classList.add("stylePage__link--actif");
  }

  /* add animation load page */

  // function endOpenAnim(){
  //   setShowTrans2(false)
  //   console.log(setShowTrans2);
  // }

  return (
    <>
      <div
        className="sect__animOpen"
      >
        <FirstSection
          BGImg={BGFirstSection}
          title1={allTitle[0]}
          txt1={allTxt[0]}
          span1={allTxt[1]}
          btnSwitch={true}
          nameBtn={"Voir les infos"}
          linkBtn={"#infoContent"}
          ClassColorBtn={"sect__btn sect__btn--yellow"}
          linkHrefbtn={true}
          h2Switch={true}
          h2Title={allTitle[1]}
          bgBlack={true}
        />
        <InterSectionBox backImg={{ backgroundImage: `url(${BGCelte})` }} />
        <section className="sect__contenu" id="infoContent">
          <div className="homepage__boxContent ">
            <h2 className="sect__title sect__title--center sect__title--big  sect__title--druzok">
              Choisis un style pour + d'infos
            </h2>
          </div>
          <div className="stylePage__boxLink ">
            <ul className="boxLink__ul">{linkLandEl}</ul>
          </div>

          <ListSectionCard
            dataCard={dataCard}
            dataInfo={"artist"}
            titleSection={"Des artistes :"}
            bgBlackF={true}
            bgBlack={{ backgroundImage: `url(${BGBlackInter})` }}
            firstBtnName={"Réduire"}
          />
          <ListSectionCard
            dataCard={dataCard}
            dataInfo={"film"}
            titleSection={"Des documentaires :"}
            smallB={true}
            firstBtnName={"Découvrir"}
          />
          <ListSectionCard
            dataCard={dataCard}
            dataInfo={"book"}
            titleSection={"Des ouvrages :"}
            bgBlackF={true}
            bgBlack={{ backgroundImage: `url(${BGBlackInter})` }}
            smallB={true}
            firstBtnName={"Découvrir"}
          />
        </section>
      </div>

      {showTrans2 &&
        createPortal(
          <>
            <div
               className="sect__transPage sect__transPage--animDown1"
              
            >
              
            </div>
          </>,
          document.body
        )}
    </>
  );
}

export default PlusDInfo;
