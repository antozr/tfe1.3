import React from "react";
import FirstSection from "../components/FirstSection";

//import image

import BGFirstSection from ''

function StylePB() {
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

export default StylePB;
