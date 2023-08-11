import React from "react";
import FirstSectionStyles from "../components/FirstSectionStyles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/// import images

import HeartHolly from "../assets/images/svgs/coeur001.svg";
import InterSectionBox from "../components/InterSectionBox";
import PaternUS from "../assets/images/svgs/oldSchool/paternOldSchool.svg";
import AncreSvg from "../assets/images/svgs/oldSchool/ancre.svg";
import DarkSkin from '../assets/images/oldamerica/fondPeauNoir.webp'
import AnimColGauche from "../components/AnimColGaucheUs";
import HistoryLandRow from "../components/HistoryLandRow";
import TextColDroite from "../components/TextColDroite";
import SectHoriFull from "../components/SectMaitreHori";

function LayoutTattoo({ USColG, styleNum }) {
  gsap.registerPlugin(ScrollTrigger);

  let allTitle = [
    [
      <>L’old&nbsp;school</>,
      <>Américain</>,
      <>
        Vogue&nbsp;vers <br />
        la découverte
      </>,
      <>Un style qui</>,
      <>se démarque</>,
      <>Les&nbsp;artistes</>,
      <>Les hirondelles</>,
      " Les Pin-up",
      "Les ancres & navires",
      "Sailor Jerry",
      " Don Ed Hardy",
    ],
  ];
  let allTxt = [
    [
      <>
        Une mode vieille comme le navire qui la porte. C’est un style qui est
        née avec les marins qui voguait d’un port à l’autre, en marquant leur
        amour du monde sur leur&nbsp;corps.
      </>,
      <>
        Le style se compose de contours noirs épais avec des couleurs limitées
        avec les couleurs primaires{" "}
        <span className="sect__txt--thin sect__txt--italic">
          ( Jaune - Rouge - Bleu - Vert )
        </span>{" "}
        avec peut d’ombrage mais bien marqué. Avec une iconographie venue en
        partie de l’univers de la marine, on retrouve les motifs sous forme de
        FLASH. <br /> <br />
      </>,
      <>
        On peut situer ces premières apparitions en tant que point d’influence
        dès le début du 20 siècles & principalement aux US,
        <span className="sect__txt--thin sect__txt--italic">
          {" "}
          comme à Honolulu, San Francisco, New-York ,mais aussi à Bristol.
        </span>{" "}
        <br /> <br /> <br />
      </>,
      <>
        <span>
          On peut noter que certains artistes ont permis de faire naître cet
          effort ainsi que montrer cet art au grand public, pour ce faire on
          retrouve <b> Sailor Jerry </b> qui va faire évoluer le style en y
          intégrant des iconographies japonaises en plus d’un retravaille des
          anciennes iconographies. On lui doit aussi une amélioration des
          techniques de tatouage notamment avec l’intégration de celle-ci pour
          en améliorer. Avec son apprenti,<b> Don Ed Hardy</b>, qui va
          populariser le style au grand public dans les années 70-80, tout en y
          intégrant une plus grande iconographie japonaise. On peut retrouver
          certaines collaborations avec des marques de textile & une marque de
          rhum pour Sailor Jerry.
        </span>
      </>,
      <>
        On retrouve comme artistes qui ont fait la renommée et ont propagé ce
        style, on retrouve donc Sailor Jerry, Don Ed Hardy,  et bien d'autres.
        On peut leur donner comme point d’orgue qu’ils ont su apporter une
        nouvelle vague de design dans un univers qui était déjà riche, mais
        aussi leur ouverture à une autre caste de personnes en dehors des marins
        / motards et autres personnes, ils ont su faire croître leur popularité
        jusqu'à maintenant en maintenant l'authenticité des motifs et de
        l’esprit de liberté que beaucoup font ressortir.{" "}
      </>,
      <>
        <br />
        <br />
        <span className="sect__txt--thin sect__txt--italic">
          Si aujourd’hui bien des styles existent, un bon nombre de personnes
          apprécient encore leur travail et se le font encrer. {" "}
        </span>{" "}
      </>,
      <>
        <span className="sect__txt--thin sect__txt--italic sect__txt--smallLength">
          "A tattoo is an affirmation: that this body is yours to have and to
          enjoy while you're here.
          <br />
          <br /> Nobody else can control what you do with it."
        </span>
      </>,
      <>
        Une présence essentielle dans l’iconographie & tradition de la marine,
        on se la fait tatouer sur une aux{" "}
        <span className="sect__txt--italic sect__txt--bold">
          {" "}
          5000 milles marins
        </span>{" "}
        et une seconde aux{" "}
        <span className="sect__txt--italic sect__txt--bold">
          {" "}
          10.000 milles marins
        </span>
        .Elles représentent les voyages et les expériences de ces derniers dans
        leur aventure sur les mers. Partant sur de longues traversées, mais
        revenant toujours à leur point de départ, ces oiseaux représentent le
        retour chez soi malgré les problèmes et la distance. 
      </>,
      <>
        On retrouve bon nombre de flashs avec des femmes, sous forme de sirènes,
        pin-up, elles ont pris un fort élan depuis la seconde guerre mondiale où
        bon nombre de ces dernières étaient peintes sur la carlingue des
        appareils et certains blousons des membres d’équipage. Pour représenter
        le but de leur combat et de porte bonheur, elles sont devenues des
        emblèmes de ceux partis loin de chez eux et de leur amour.{" "}
      </>,
      <>
        Elle a une connotation forte à la marine, car étant une partie du
        bâtiment, elle sert à marquer son point d'ancrage quelque part, un point
        de stabilité et de repos. Servant à amarrer un navire dans les flot,
        elle montrera son attachement à une personne, à un lieu, jusqu’au
        prochain départ. Ainsi le Navire permet de donner une vision de la
        liberté, un goût de l’aventure.
      </>,
    ],
    [],
  ];
 
  /**/
  return (
    <>
      <FirstSectionStyles
        BTD1={allTitle[styleNum][0]}
        BTD2={allTitle[styleNum][1]}
        title={allTitle[styleNum][2]}
        txt={allTxt[styleNum][0]}
        Img01={HeartHolly}
        Img02={AncreSvg}
      />

      <InterSectionBox
        WhitThext={false}
        backImg={{ backgroundImage: `url(${PaternUS})` }}
      />
      {USColG === true ? (
        <>
          <div className="sect sect__firstContenut sect--rowReverse sect--snapChild">
            <div className="sect__colGauche">
              <AnimColGauche />
            </div>
            <div className="sect__colDroite ">
              <TextColDroite
                title1={allTitle[styleNum][3]}
                title2={allTitle[styleNum][4]}
                txt1={allTxt[styleNum][1]}
                txt2={allTxt[styleNum][2]}
                txt3={allTxt[styleNum][3]}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <HistoryLandRow />
        </>
      )}

      <div className="sect--heigth100 sect--snapChild">
        <SectHoriFull
          BigTitle1={allTitle[styleNum][5]}
          BigTitle12={"artists"}
          BigTitle2={allTitle[styleNum][6]}
          imgArtiste1={""}
          imgArtiste2={""}
          textcol1={allTxt[styleNum][4]}
          textcol2={allTxt[styleNum][5]}
          textcol3={""}
          textcol4={allTxt[styleNum][6]}
          textcol5={""}
          textcol6={""}
          smallTitle1={allTxt[styleNum][7]}
          smallTitle2={""}
          smallTitle3={"L'apprenti "}
          smallTitle4={"du marin"}
        />
      </div>
      <InterSectionBox WhitThext={true} textTitle={"Les motifs amblematiques"} backImg={{ backgroundImage: `url(${DarkSkin})` }} />
    </>
  );
}

export default LayoutTattoo;
