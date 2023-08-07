import React from "react";
import FirstSection from "../components/FirstSection";

//import image

import BGFirstSection from '../assets/images/japon/compressed/arrierePlanYakuza.webp';
import SmallCardList from "../components/SmallCardList";
function StylePB() {

  let allTitle=[
    <>Explore les styles</>,
    <></>,
    <></>
  ];

  let allTxt=[
    <>Choisis un style sur la carte ou bien dans la liste, et part à
    la découverte de l'histoire de ce dernier. Tu en sauras plus sur
    comment il est apparu dans sa région et bien plus encore.</>,
    <>Bonne exploration!</>,
    <></>,
  ]
  return (
    <>
      <FirstSection
        BGImg={BGFirstSection}
        title1={allTitle[0]}
        txt1={allTxt[0]}
        span1={allTxt[1]}
        btnSwitch={false}       
        h2Switch={false}
        bgBlack={true}
      />

      <SmallCardList

      />

    </>
  );
}

export default StylePB;
