import React from "react";
import FirstSection from "../components/FirstSection";

///img import
import BGFirstSection from "../assets/images/boatAdventure.webp";

function TonAventure() {
  let allTitle = [
    <>
      Ton aventure <br />
      <span className="sect__title--italic sect__title--thin">
        Tes explorations
      </span>
    </>,
    <></>,
    <></>,
  ];

  let allTxt = [
    <>
      Tu retrouvera ici le suivis de ton aventure, entre les différents pays que
      tu auras visité. Viens y jeter un coup d’œil pour avoir un avis sur ce que
      tu as déjà vus, tu verras quelque exemples de motifs présents dans leur
      univers.
    </>,
    <>Bonne aventure !</>,
    <></>,
  ];
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
        h2Switch={false}
        
        bgBlack={true}
      />
    </>
  );
}

export default TonAventure;
