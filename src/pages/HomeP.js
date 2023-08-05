import React from "react";
import "./HomeP.scss";
import BoutonNormal from "../components/BoutonComp";
import FirstSection from "../components/FirstSection";

///img import
import BGFirstSection from "../assets/images/homeImg.webp";

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
    <></>,
  ];
  return (
    <>
      {/* <div className="homepage__sect1 homepage__sect1--bgImg sect">
        <div className="sect__boxImg--big sect__boxImg">
          <div className="sect__boxTxt ">
           
            <h1 className="sect__title sect__title--ecart">
            Tattoo<span className="sect__title--druzok ">Explore</span>
            </h1>
            <h2
              className=" sect__title sect__title--2 sect__title--ecart"
              style={{ fontSize: "28px" }}
            >
              Découvre les
              <br />
              tatouages du
              <br />
              <i>monde</i>
            </h2>
            <p className="sect__txt">
              Bienvenu dans cet univers, qui est de plus en plus visible de nos
              jours, mais qui reste, pour certain assez flou sur le fond. Car
              l’histoire derrière certains courants, mouvements, styles sont des
              histoires à part entière et celui qui connaît l’histoire verra ses
              œuvres d’un autre regard que l’Inculte.{" "}
            </p>
            <p className="sect__txt sect__txt--ecart sect__txt--italic sect__txt--thin">
              Alors je vous invite à voyager dans ses différents univers pour en
              apprendre plus sur les codes et les bases de ces styles venant des
              4 coins du monde.
            </p>

            <BoutonNormal
              nameBtn={"Voir la carte"}
              linkBtn={"#mapWorld"}
              ClassColor={"sect__btn sect__btn--yellow"}
              linkHref={true}
            />
          </div>
        </div>
      </div> */}
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
    </>
  );
}

export default HomeP;