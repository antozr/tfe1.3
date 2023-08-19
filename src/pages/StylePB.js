import React, { useState } from "react";
import FirstSection from "../components/FirstSection";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
//import image

import BGFirstSection from "../assets/images/japon/compressed/arrierePlanYakuza.webp";
import SmallCardList from "../components/SmallCardList";
import MapBox from "../components/MapBox";

function StylePB() {
  const [mapShox, setMapShow] = useState(false);
  const [showTrans, setShowTrans] = useState(false)

  let allTitle = [<>Explore les styles</>, <></>, <></>];

  let allTxt = [
    <>
      Choisis un style sur la carte ou bien dans la liste, et part à la
      découverte de l'histoire de ce dernier. Tu en sauras plus sur comment il
      est apparu dans sa région et bien plus encore.
    </>,
    <>Bonne exploration!</>,
    <></>,
  ];
  /**/ 
  let urlcourante = document.location.pathname; 
  console.log(urlcourante);
  /**/ 
  function changeMapShow(e) {
    if (e.target.innerText === "Mode carte") {
      setMapShow(false);
      setShowTrans(true)
    } else if (e.target.innerText === "Mode liste") {
      setMapShow(true);
      setShowTrans(true)
    } else {
      setMapShow(false);
    }
    let allLink = document.querySelectorAll(".styleTT__el");

    allLink.forEach((el) => {
      el.classList.remove("styleTT__elActif");
    });
    
    if(e.target.tagName === "P"){
      e.target.parentElement.classList.add("styleTT__elActif");
    }else{
      e.target.classList.add("styleTT__elActif");
    }
  }
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

      <section className="styleTT__sect ">
        <div className="styleTT__boxNav">
          <h2 className="sect__title sect__title--2">
            Vient décourvrir un style en visitant la carte ou simplement par les
            vignettes :{" "}
          </h2>
          <ul className="styleTT__ul">
            {window.innerWidth >= 600 ? <li
              className="styleTT__el styleTT__elActif"
              onClick={changeMapShow}
            >
              <p className="sect__txt styleTT__linkNav ">Mode carte</p>
            </li> : ""}
            <li className="styleTT__el" onClick={changeMapShow}>
              <p className="sect__txt styleTT__linkNav">Mode liste</p>
            </li>
          </ul>
        </div>

        {mapShox === false ? (
          <>{window.innerWidth > 900 ? <MapBox /> : <SmallCardList />}</>
        ) : (
          <>
            <SmallCardList />
          </>
        )}
      </section>
      
      {showTrans &&
        createPortal(
          <>
            <motion.div
              className="sect__transPage"
              initial={{ opacity:1, y:"60vh", zIndex:30}}
              animate={{ opacity:1 ,y:"-200vh", height:"200vh"}}
              exit={{opacity:0, y:"-300vh"}}
              transition={{duration:2.2,type: "tween",
              ease: "circIn",}}
              
            >
              
            </motion.div>
          </>,
          document.body
        )}
    </>
  );
}

export default StylePB;
