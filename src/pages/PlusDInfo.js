import React from "react";
import FirstSection from "../components/FirstSection";
import InterSectionBox from "../components/InterSectionBox";

import dataStyle from "../assets/data/StylesData.json";
///import img
import BGFirstSection from "../assets/images/russie/prisonnier4.webp";
import BGBlackInter from "../assets/images/oldamerica/fondPeauNoir.webp";
import ListSectionCard from "../components/ListSectionCard";

function PlusDInfo() {
  console.log("je suis olus info");

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
    <li className="stylePage__el" onClick={console.log('hello')} key={el}>
      <p className="stylePage__link sect__txt sect__txt--bold" title={el}>
        {el}
      </p>
    </li>
  ));
  
  return (
    <>
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
      <InterSectionBox backImg={{ backgroundImage: `url(${BGBlackInter})` }} />
      <section className="sect__contenu" id="infoContent">
        <div className="homepage__boxContent ">
          <h2 className="sect__title sect__title--center sect__title--big  sect__title--druzok">
            Choisis un style pour + d'infos
          </h2>
        </div>
        <div className="stylePage__boxLink">
              <ul className="boxLink__ul">{linkLandEl}</ul>
            </div>

            <ListSectionCard  
  dataCard={dataStyle}
  dataInfo={"artist"}
  titleSection={"Des ouvrages :"}
  bgBlack={{backgroundImage :`url(${BGBlackInter})` }}
            />
            <ListSectionCard  
  dataCard={dataStyle}
  dataInfo={"film"}
  titleSection={"Des ouvrages :"}
            />
            <ListSectionCard  
  dataCard={dataStyle}
  dataInfo={"book"}
  titleSection={"Des ouvrages :"}
  bgBlack={{backgroundImage :`url(${BGBlackInter})` }}
            />
      </section>

    </>
  );
}

export default PlusDInfo;
