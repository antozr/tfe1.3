import React from "react";
import FirstSection from "../components/FirstSection";


///import img
import BGFirstSection from '../assets/images/russie/prisonnier4.webp'

function PlusDInfo() {
  console.log("je suis olus info");

  let allTitle=[
    <><span className="sect__title--fontDruzokh ">Explore</span> <br/>les
    styles</>,
    <> Prêt pour <br /> une exploration <br /> approfondie ?</>,
    <> </>
  ];
  let allTxt=[
    <>Si tu cherches à en savoir plus, que tu souhaites avoir un
    complément d’informations ou tout simplement assouvir ta
    curiosité. <b>Alors tu es au bon endroit !</b> </>,
    <> Tu vas pouvoir choisir un style ou tous les prendre, et explorer
    l’univers qui est présent autour de ces styles. </>,
    <> </>
  ]
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
    </>
  );
}

export default PlusDInfo;
