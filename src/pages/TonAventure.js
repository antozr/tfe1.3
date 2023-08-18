import React, { useEffect, useState } from "react";
import FirstSection from "../components/FirstSection";
import { createPortal } from "react-dom";
///img import
import BGFirstSection from "../assets/images/boatAdventure.webp";
import InterSectionBox from "../components/InterSectionBox";
import BGImg from "../assets/images/celte/backCelt2.webp";
import SerpentSvg from "../assets/images/svgs/oldSchool/serpent.svg";
import { loadDataMapAdventure } from "../logic/__mapStatus";
import TextColDroite from "../components/TextColDroite";
import BoutonNormal from "../components/BoutonComp";
import { Link } from "react-router-dom";
import dataDiscover from "../assets/data/AdventureData.json";
/// import des maps
import CarteNordic from "../assets/images/svgs/nordic.svg";
import CarteUS from "../assets/images/svgs/amerique.svg";
import CarteJapon from "../assets/images/svgs/japon.svg";
import CarteEu from "../assets/images/svgs/europe.svg";
import CarteRussie from "../assets/images/svgs/russie.svg";
import CarteBG from "../assets/images/svgs/celte.svg";

//// old
import Pinup from "../assets/images/oldamerica/pinup1.webp";
import Pinup2 from "../assets/images/oldamerica/pinup2.webp";
import Hirondelle from "../assets/images/oldamerica/hiro1.jpg";
import Ancre1 from "../assets/images/oldamerica/ancre1.jpg";
//// japon
import Ryu01 from "../assets/images/japon/compressed/dragon02-min.webp";
import Ryu02 from "../assets/images/japon/compressed/dragon2-min.webp";
import Koi02 from "../assets/images/japon/compressed/koi2-min.webp";
import Jigoku1 from "../assets/images/japon/compressed/jigoku1-min.webp";
//// nordic
import wyrdToile from "../assets/images/nordic/wyrd.webp";
import drakar from "../assets/images/nordic/vegvisir.webp";
import vigvizir from "../assets/images/nordic/vegvisir2.webp";
import yggdrazil from "../assets/images/nordic/ygdrazil2.webp";

//// russie
import Etoile1 from "../assets/images/russie/vierge1.webp";
import Prisonnier2 from "../assets/images/russie/etoile1.webp";
import Epaullette2 from "../assets/images/russie/epaullette2.webp";
import Vierge2 from "../assets/images/russie/vierge2.webp";

//// celtic
import triskel from "../assets/images/celte/triskel1.webp";
import horse from "../assets/images/celte/epona1.webp";
import dog from "../assets/images/celte/epona2.webp";
import triketra from "../assets/images/celte/TRIKETRA1.webp";
import ImgOpenbig from "../components/ImgFullScreen";

function TonAventure() {
  const tabDataNameUse = loadDataMapAdventure();
  const [dataImgActive, setDataImgActive] = useState([]);
  const [dataBoxInfo, setDataBoxInfo] = useState([]);
  const [mapLink, setMapLink] = useState([]);

  const [urlImgBox, seturlImgBox] = useState("#");
  const [showImg, setShowImg] = useState(false);
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

  let arrayListMapLink = [
    CarteUS,
    CarteJapon,
    CarteNordic,
    CarteEu,
    CarteRussie,
    CarteNordic,
    CarteBG,
  ];

  useEffect(() => {
    if (tabDataNameUse.length !== 0) {
      if (tabDataNameUse[0] === "Old school") {
        setDataBoxInfo([
          dataDiscover[0].name,
          dataDiscover[0].description,
          dataDiscover[0].land,
          dataDiscover[0].link,
        ]);
        setDataImgActive([
          Hirondelle,
          Pinup,
          Pinup2,
          Ancre1,
          "Hirondelle",
          "Pin-up",
          "Pin-up",
          "Bateau & ancre",
        ]);

        setMapLink(arrayListMapLink[0]);
      } else if (tabDataNameUse[0] === "Japon") {
        setDataBoxInfo([
          dataDiscover[1].name,
          dataDiscover[1].description,
          dataDiscover[1].land,
          dataDiscover[1].link,
        ]);
        setDataImgActive([
          Ryu02,
          Jigoku1,
          Koi02,
          Ryu01,
          "Dragon",
          "Jigoku",
          "Koi",
          "Ryu",
        ]);
        setMapLink(arrayListMapLink[2]);
      } else if (tabDataNameUse[0] === "Russie & prisons ") {
        setDataBoxInfo([
          dataDiscover[2].name,
          dataDiscover[2].description,
          dataDiscover[2].land,
          dataDiscover[2].link,
        ]);
        setDataImgActive([
          Vierge2,
          Epaullette2,
          Prisonnier2,
          Etoile1,
          "Vierge à l'enfant",
          "Epaulette",
          "Prisonnier",
          "Vierge",
        ]);
        setMapLink(arrayListMapLink[4]);
      } else if (tabDataNameUse[0] === "Celtes") {
        setDataBoxInfo([
          dataDiscover[3].name,
          dataDiscover[3].description,
          dataDiscover[3].land,
          dataDiscover[3].link,
        ]);
        setDataImgActive([
          dog,
          horse,
          triketra,
          triskel,
          "Chien",
          "Epona",
          "Triketra",
          "Triskel",
        ]);
        setMapLink(arrayListMapLink[6]);
      } else if (tabDataNameUse[0] === "Nordic ") {
        setDataBoxInfo([
          dataDiscover[4].name,
          dataDiscover[4].description,
          dataDiscover[4].land,
          dataDiscover[4].link,
        ]);
        setDataImgActive([
          drakar,
          yggdrazil,
          vigvizir,
          wyrdToile,
          "Drakkar",
          "Yggdrasil",
          "Vegvisir",
          "Wyrd",
        ]);
        setMapLink(arrayListMapLink[5]);
      } else {
        setDataBoxInfo(["Contenu non trouvable"]);
      }
    }
  });
  function openImgBox(e) {
    let srcImg = e.target.src;
    seturlImgBox(srcImg);
    setShowImg(true);
  }
  function closeImgBox(e) {
    let boxImgFull = document.querySelector(".sect__imgOpenBig");
    boxImgFull.classList.add("sect__imgOpenBig--anim");
    setTimeout(() => {
      setShowImg(false);
    }, 600);
  }

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
      <InterSectionBox
        WhitThext={true}
        textTitle={<>Souviens-toi&nbsp; du&nbsp;voyage</>}
        backImg={{ backgroundImage: `url(${BGImg})` }}
      />
      {/* Part with interaction with localStorage  */}

      <div
        className={
          tabDataNameUse.length === 0
            ? "sect__adventure sect__adventure--noCont"
            : "sect__adventure "
        }
      >
        {tabDataNameUse.length === 0 ? (
          <>
            <div
              className="adventure__boxInfo adventure__boxInfo--small"
              id="boxInfoGauche"
            >
              <div className="adventure__colBox">
                <TextColDroite
                  title1={<>Tu n'as encore rien&nbsp;visiter</>}
                  txt1={
                    "Choisis un pays sur la carte pour pouvoir commencer l'aventure et en apprendre plus sur son style de tatouage."
                  }
                />
              </div>
              <div className="adventure__boxImgCo">
                <BoutonNormal
                  linkBtn={"/styles"}
                  nameBtn={"Recherche un style "}
                  ClassColor={"sect__btn sect__btn--yellow"}
                />

                <img
                  src={SerpentSvg}
                  alt="Carte de pays ou d'une régions du monde. "
                  className="adventure__img adventure__img--noData"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="adventure__boxInfo " id="boxInfoGauche">
              <div className="adventure__colBox">
                <TextColDroite title1={dataBoxInfo[0]} txt1={dataBoxInfo[1]} />
              </div>
              <Link
                to={dataBoxInfo[3]}
                className="adventure__linkBox sect__txt"
                aria-label="Vers la carte"
              >
                <p className="sect__txt adventure__linkBoxP">Visite {dataBoxInfo[2]}</p>
                <img
                  src={mapLink}
                  alt="Carte de pays ou d'une régions du monde. "
                  className="adventure__img"
                />
              </Link>
            </div>
            {/* ADD IMG */}
            <div className="adventure__gridBox">
              <ul className="adventure__listImg">
                <li className="adventure__mobileEl">
                  <p className="sect__title sect__title--2 sect__title--jaune">
                    {dataImgActive[4]}
                  </p>
                  <img
                    src={dataImgActive[0]}
                    alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel."
                    className="adventure__imgSlider"
                    onClick={openImgBox}
                  />
                </li>
                <li className="adventure__mobileEl">
                <p className="sect__title sect__title--2 sect__title--jaune">
                    {dataImgActive[5]}
                  </p>
                  <img
                    src={dataImgActive[1]}
                    alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel."
                    className="adventure__imgSlider"
                    onClick={openImgBox}
                  />
                </li>
                <li className="adventure__mobileEl">
                <p className="sect__title sect__title--2 sect__title--jaune">
                    {dataImgActive[6]}
                  </p>
                  <img
                    src={dataImgActive[2]}
                    alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel."
                    className="adventure__imgSlider"
                    onClick={openImgBox}
                  />
                </li>
                <li className="adventure__mobileEl">
                <p className="sect__title sect__title--2 sect__title--jaune">
                    {dataImgActive[7]}
                  </p>
                  <img
                    src={dataImgActive[3]}
                    alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel."
                    className="adventure__imgSlider"
                    onClick={openImgBox}
                  />
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      {showImg &&
        createPortal(
          <ImgOpenbig closeModal={closeImgBox} urlImgBig={urlImgBox} />,
          document.body
        )}
    </>
  );
}

export default TonAventure;
