import React from "react";
import "./HomeP.scss";

// import BoutonNormal from "../components/BoutonComp";
import FirstSection from "../components/FirstSection";
import { motion } from "framer-motion";
///img import
import BGFirstSection from "../assets/images/homeImg.webp";
import BateauHome from "../assets/images/oldamerica/bateauHome.webp";
import MusicHome from "../assets/images/oldamerica/musicHome.webp";
import BoutonNormal from "../components/BoutonComp";
import BGImg from "../assets/images/japon/compressed/newHoroshi-min.webp";
import { Link } from "react-router-dom";
import TextColDroite from "../components/TextColDroite";
import MapBox from "../components/MapBox";
import SmallCardList from "../components/SmallCardList";
import InterSectionBox from "../components/InterSectionBox";
import Foot from "../components/Foot";

function HomeP() {

  let allTitle = [
    <>
      Tattoo<span className="sect__title--druzok ">Explore</span>
    </>,
    <>
      Découvre les
      <br />
      tatouages du
      <br />
      <i>monde</i>
    </>,
    <>Comment visiter le&nbsp;monde&nbsp;? </>,
    <>Un&nbsp;plus musical</>,
    <></>,
  ];
  let allTxt = [
    <>
      Bienvenu dans cet univers, qui est de plus en plus visible de nos jours,
      mais qui reste, pour certain assez flou sur le fond. Car l’histoire
      derrière certains courants, mouvements, styles sont des histoires à part
      entière et celui qui connaît l’histoire verra ses œuvres d’un autre regard
      que l’Inculte
    </>,
    <>
      Alors je vous invite à voyager dans ses différents univers pour en
      apprendre plus sur les codes et les bases de ces styles venant des 4 coins
      du monde.
    </>,
    <>
      Rends-toi sur la carte du monde pour choisir un pays que tu aimerais
      visiter, que tu connais l’histoire ou bien que tu veux en savoir un peu
      plus sur lui, je te propose de le visiter et d’en découvrir la culture du
      pays en lien avec le tatouage. De la naissance, l’évolution ainsi que les
      répercussions sur la vision du tatouage. Viens découvrir cela en étayant
      ta curiosité, pour avoir une vision des motifs emblématiques.{" "}
    </>,
    <>
      <br />
      <br />
      <span
        className="sect__txt--thin sect__txt--italic"
        style={{ display: "inline-block" }}
      >
        Tu pourras aussi suivre le suivi de tes explorations dans la page, “
        <span>
          <Link
            to="mon-aventure"
            className=""
            style={{ cursor: "pointer", color: "inherit" }}
            aria-label="Vers la carte"
          >
            <b>Ton explorations</b>
          </Link>
        </span>
        “, et venir découvrir si tu as découvert tous les motifs d’une région.{" "}
      </span>{" "}
    </>,
    <>
      Agrémentez votre expérience par une touche musicale, en ayant des musiques
      qui sont en lien avec les styles de tatouage que vous pourrez rencontrer.
      Si vous le souhaitez, alors explorez ceci en musique.
    </>,
    <></>,
  ];
  return (
    <>
  <div className="sect__animOpen sect__layoutAnim"  >

 
      <FirstSection
        BGImg={BGFirstSection}
        title1={allTitle[0]}
        txt1={allTxt[0]}
        span1={allTxt[1]}
        btnSwitch={true}
        nameBtn={"Voir la carte"}
        linkBtn={"#mapWorld"}
        ClassColorBtn={"sect__btn sect__btn--yellow"}
        linkHrefbtn={true}
        h2Switch={true}
        h2Title={allTitle[1]}
      />

      <div className="homepage__boxContent">
        <div className="homepage__boxTxt">
          <h2 className="sect__title  sect__title--druzokh ">{window.innerWidth < 600? allTitle[2] : <>Comment&nbsp;visiter le&nbsp;monde&nbsp;?</>}</h2>
          <div className="homepage__colTxt">
            <TextColDroite
              // title1={titleArray[0]}
              txt1={allTxt[2]}
              txt3={allTxt[3]}
            />
          </div>
        </div>
        <div className="homepage__boxImgRow">
          <motion.img
            src={BateauHome}
            initial={{ x: 0, opacity: 0.8 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="homepage__imgBox"
            alt="Tatouage old school sur la musique "
          ></motion.img>
          {window.innerWidth >= 900 ? (
            <motion.img
              src={MusicHome}
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "ease", delay: 0.6 }}
              className="homepage__imgBox"
              alt="Tatouage old school sur la musique "
            ></motion.img>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="homepage__boxContent homepage__boxContent--reverse">
        <h2 className="sect__title  sect__title--druzokh homepage__titleHome">
          {allTitle[3]}
        </h2>
        <div className="homepage__colTxt">
          <TextColDroite txt1={allTxt[4]} />
          <BoutonNormal
            linkHref={true}
            nameBtn={"Tous en musique"}
            linkBtn={
              "https://open.spotify.com/playlist/5bdQoZomjCWxHB5wbNYM4w?si=5f7fea90088f4991"
            }
            ClassColor={"sect__btn sect__btn--yellow sect__btn--small"}
          />
        </div>
      </div>
      <InterSectionBox backImg={{ backgroundImage: `url(${BGImg})` }} />
      {window.innerWidth > 900 ? <MapBox withBG={true} /> : <SmallCardList />}
     <Foot/>
     </div>
    </>
  );
}

export default HomeP;
