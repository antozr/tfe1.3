import React from "react";
import FirstSectionStyles from "../components/FirstSectionStyles";

/// import images 

import HeartHolly from '../assets/images/svgs/coeur001.svg';
import InterSectionBox from "../components/InterSectionBox";
import PaternUS from "../assets/images/svgs/oldSchool/paternOldSchool.svg";
import AncreSvg from "../assets/images/svgs/oldSchool/ancre.svg";

function LayoutTattoo() {
  let allTitle = [
    <>L’old&nbsp;school</>,
    <>Américain</>,
    <>
      Vogue&nbsp;vers <br />la découverte
    </>,
    <>
    </>,
  ];
  let allTxt = [
    <>
      Une mode vieille comme le navire qui la porte. C’est un style qui est née
      avec les marins qui voguait d’un port à l’autre, en marquant leur amour du
      monde sur leur&nbsp;corps.
    </>,
    <></>,
    <></>,
    <></>,
  ];
  return (
    <>
      <FirstSectionStyles
        BTD1={allTitle[0]}
        BTD2={allTitle[1]}
        title={allTitle[2]}
        txt={allTxt[0]}
        Img01={HeartHolly}
        Img02={AncreSvg}
      />

      <InterSectionBox
  WhitThext={false}
  backImg={{ backgroundImage: `url(${PaternUS})` }}
  
      />
    </>
  );
}

export default LayoutTattoo;
