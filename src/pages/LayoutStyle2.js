import React from "react";
import FirstSection from "../components/FirstSection";
import InterSectionBox from "../components/InterSectionBox";
import HistoryLandRow from "../components/HistoryLandRow";
import SectHoriFull from "../components/SectMaitreHori";
import FirstSectionStyles from "../components/FirstSectionStyles";
import BoxMotif from "../components/BoxMotif";
import BoxMessageEnd from "../components/BoxMessageEnd";

/// import img japon
import imgBg from "../assets/images/japon/compressed/irezumiBack2-min.webp";
import backImgjap02 from "../assets/images/japon/compressed/arrierePlanYakuza.webp";
import Ryu01 from "../assets/images/japon/compressed/dragon02-min.webp";
import Ryu02 from "../assets/images/japon/compressed/dragon2-min.webp";
import Koi01 from "../assets/images/japon/compressed/koi1-min.webp";
import Koi02 from "../assets/images/japon/compressed/koi2-min.webp";
import Jigoku1 from "../assets/images/japon/compressed/jigoku1-min.webp";
import Jigoku2 from "../assets/images/japon/compressed/jigoku2-min.webp";

/// nordic image

function LayoutStyle2({ styleNum }) {
  let allTitle = [
    [
      "日本",
      "L'irezumi",
      <>
        Transmission
        <br />
        par le sumi
      </>,
      <>Les&nbsp;artistes</>,
      "芸術家",
      "Horishi ",
      " Horiyoshi III",
      "Des conteurs ",
      "d'histoires...",
      <>La&nbsp;beauté&nbsp;des&nbsp;femmes</>,
      <>La&nbsp;répression sous&nbsp;Meiji</>,
      <>L’ouverture&nbsp;au&nbsp;monde, l’ère&nbsp;des&nbsp;Horishi</>,
      <>La&nbsp;traditions&nbsp;dans un&nbsp;monde&nbsp;moderne</>,
      " Le dragon, Ryu",
      " Le Koi",
      <>
        Jigoku dayu, <br />
        la courtisane de l'enfer.{" "}
      </>,
      "Les 108 héros",
    ],
    [
      <>Peuple&nbsp;nordique</>,
      "voyage",
      <>Voyage dans les plaines&nbsp;nordiques</>,
      <>La&nbsp;technique</>,
      <>ᛚᚨ ᛏᛖᚲᚾᛁᚲᛖ</>,
      <>Des motifs</>,
      "Du point fait main",
      "Des motifs ",
      "riche de mythologie",
      <>Les origines</>,
      <>L’explorateur et historien Ahmad Ibn Fadlan </>,
      <>Les poèmes nordiques</>,
      <>La momie de sibérie</>,
      <>La toile de Wyrd </>,
      <>Yggdrasil</>,
      <>Vegvisir</>,
    ],
  ];

  let allTxt = [
    [
      <>
        Le tatouage traditionnel japonais ou plus communément appelé :{" "}
        <b>Irezumi</b>. L’art de pratiquer le tatouage en transmettant les rites
        et légendes de la culture nippone, en couvrant le corps de son porteur.
      </>,
      <>
        <br />
        <br />{" "}
        <span className="sect__txt--ecart">
          Son premier contact avec les tatouages fut dans les années 50-60 dans
          des onsens, où il aperçut des Yakuzas ayant le corps couvert de motifs
          et c’est à l’âge de 21 ans qu’il décide de devenir tatoueur. Il
          rencontre maître Horiyoshi I, il est d'abord son client et à l’âge de
          25 ans, il devient son apprenti, où il recevra le titre d’Hori (
          maître ) à ses 33 ans. Il forme plusieurs apprentis à son tour comme
          l’allemand <b>Hori Kitsune</b> sur une période de +/- 15 ans, ainsi
          que son fils . Il tatoue de manière traditionnelle, au tebori, mais
          avec la rencontre et correspondance de son ami Don Ed Hardy, il
          utilisera les dermographes pour faire ses contours.
        </span>{" "}
      </>,
      <>
        {" "}
        Il est un symbole de protection, de sagesse, de sérénité ainsi qu’une
        représentation de l’empereur du Japon. On le retrouve dans différents
        pays d’Asie, mais selon la tradition plus le dragon s’éloigne plus de la
        Chine, plus il perd de doigts, c’est pour ça qu’il a 3 doigts au Japon.
        <br />
        <br />
        <span className="sect__txt--thin">
          Il est composé d’une tête de chameau, de bois de cerf, des yeux de
          lièvre, oreilles de taureau, crête de phénix, un corps de serpent
          couvert d’écaille de poisson avec des pattes de tigre aux griffes
          d’aigles.{" "}
        </span>{" "}
      </>,
      <>
        <br />
        <br />{" "}
        <span className="sect__txt--ecart">
          Son premier contact avec les tatouages fut dans les années 50-60 dans
          des onsens, où il aperçut des Yakuzas ayant le corps couvert de motifs
          et c’est à l’âge de 21 ans qu’il décide de devenir tatoueur. Il
          rencontre maître Horiyoshi I, il est d'abord son client et à l’âge de
          25 ans, il devient son apprenti, où il recevra le titre d’Hori (
          maître ) à ses 33 ans. Il forme plusieurs apprentis à son tour comme
          l’allemand <b>Hori Kitsune</b> sur une période de +/- 15 ans, ainsi
          que son fils . Il tatoue de manière traditionnelle, au tebori, mais
          avec la rencontre et correspondance de son ami Don Ed Hardy, il
          utilisera les dermographes pour faire ses contours.
        </span>{" "}
      </>,
      "",
      <>
        On peut retrouver des traces de tatouages allant vers la préhistoire
        jusqu’à l’ère Meiji dans certaines archipels. Où les femmes se faisaient
        tatouer les mains, bras pour signifier des moments clés dans leur vie,
        et pour leur apporter une beauté tout autre, avec une célébration pour
        la personne, une fois que les motifs furent finis. Les motifs changent
        d’une région à une autre, comme avec les Aïnous, qui mettaient leurs
        lèvres en valeur par un tatouage autour, le but était de se mettre en
        valeur, d’être plus belle même si cette coutume a commencé à se dissiper
        pour être remplacée par d’autres critères de beauté comme avec des
        parfums et des vêtements. <br />
        <br />
        <br />{" "}
        <span className="sect__txt--thin">
          Ainsi la beauté se perpétue par des rythmes différents et des coutumes
          se font absoudre par des lois répressives.{" "}
        </span>
      </>,
      "",
      <>
        Avec l’ouverture sur le monde à partir de 1868, le gouvernement veut
        construire son pays comme les autres grandes nations industrielles. En
        recevant les voyageurs et émissaires du monde entier, elle fit interdire
        ses mœurs pour correspondre à une image d’un pays comme les autres. De
        ce fait l’irezumi fut interdit, comme le fait de devoir s’habiller pour
        sortir, mais le fait de devoir se couvrir va donner un nouvel essor pour
        le tatouage en le rendant invisible aux yeux de tous mais en perpétuant
        la tradition en la cachant sous un voile. Le fait d’avoir voulu faire
        disparaître cette coutume va dépeindre cet art de mystère, d’une beauté
        renouvelée, mais aussi d'une spiritualité nouvelle, par la main de
        quelque maître artisan tatoueur{" "}
        <span className="sect__txt--boldsect__txt--italic">
          qu’on nomme Horishi
        </span>
        .{" "}
      </>,
      "",
      <>
        L’ombre apportée sur cet art va être mis en lumière par quelque que
        grand maître par le tatouage de certains grands monarques, comme le tsar
        Nicolas II lors de leur séjour au pays du soleil levant. Cette activité
        se faisant dans les ports ou bien dans des demeures, caché aux yeux de
        tous, pour ne pas subir la répression, de plus en plus de marins virent
        dans ces ports pour avoir un souvenir dans leur peau. Mais les maîtres
        artisans devaient rester cachés, dès lors ils vécurent entre deux feux,
        exerçant un métier “normal” le jour & dans l’ombre entretenait les
        mythes & légendes de l’irezumi.
        <br />
        <br />
        <span className="sect__txt--thin">
          Certains ont préféré quitter l'île pour rejoindre une autre patrie
          pour exercer son art aux yeux de tous, et le montrer à qui le veut.
          Mais les occidentaux avaient une relation différente sur les motifs,
          voulant de petits motifs avec un exercice en une séances et non un
          projet qui se ferait sur plusieurs mois. Dès lors, les étendues de
          leurs talents restent cachées au fond de leur encre.
        </span>
        <br />
        <span className="sect__txt--bold">
          Ainsi, l’ouverture au monde a donné une reconnaissance de ces motifs
          tout autour de la planète et au grand de ce monde.{" "}
        </span>
      </>,
      "",
      <>
        La renaissance, après le feu et les radiations, lors de l'occupation par
        les Américains, ils vont lever les interdictions sur les tatouages &
        donner une nouvelle vie aux artisans qui se feront une renommée dans les
        ports et autour des bases américaines. Où les motifs les plus faits
        seront de l’occidental, tradi-américain, mais aussi un peu de
        traditionnel japonais. <br />
        <br />
        <span className="sect__txt--thin sect__txt--italic">
          On note aussi avec l’ouverture au monde dans les années 80-90, un
          mélange de savoir entre les maîtres japonais et américains comme entre
          Maître Horiyoshi III & Sailor Jerry, mais aussi avec Filip Leu qui fut
          l’apprenti de ce dernier lors de sa jeunesse. L’art de l’irezumi se
          répand encore de nos jours, sous sa forme première, en complétant les
          corps de ses processeurs en suivant les règles et en perpétuant la
          tradition & le folklore autour de cet art.
        </span>
      </>,
      "",
      <>Il symbolise la détermination, des forces, des résistances face à l’adversité. Selon la tradition, ils nagent à contre-courant de la rivière jaune, où seuls les plus forts pourront atteindre la porte du dragon. Et ils pourront se transformer en dragon avec la joie éternelle.<br/><br/><span className="sect__txt--thin">On retrouve différents types de Koi sur les motifs de leur écailles ainsi que sur sa position, la composition et sera souvent liée avec l’élément de l’eau.</span></>,
      <>C'est une professionnelle des divertissements pour adultes, mais un jour, elle va rencontrer un moine qui l'aidera à atteindre l'éveil spirituel. On la représente avec une robe dont le dos est recouvert d'une imagerie des enfers et sur le devant avec une imagerie signifiant la miséricorde avec les fleurs de cerisier ( symbolisant l'éphémérité de la condition humaine et de la beauté).<br/><br/> <span className="sect__txt--thin">Elle symbolise la rédemption et le changement de cap dans la vie .</span>
      </>    ,
      <>Ce sont 108 brigands qui vont se retourner contre le pouvoir en place , qui est corrompu. Ils viennent du <b>Suikoden</b> illustré par <b>Utagawa Kuniyoshi </b> et qui servent depuis pour la réalisation des grosses pièces d'irezumi.<br/><br/> <span className="sect__txt--thin">Il représente le courage , la loyauté et d'autres valeurs en fonction des personnages. </span> </>,
  
    ],

    [
      <>
        On retrouve des traces éparses d’hommes couvertes de peinture avec une
        peau pigmentée bleue pour les peuplades celtes et des hypothèses pour
        les vikings sur leurs pratiques. Mais ces styles ont su renaître par des
        artisans représentant les forces de la nature et des dieux sur nous,
        pauvres mortels.{" "}
      </>,
      <>
        On peut supposer que la technique utilisée est un style de handpoke ( du
        point à la main), où l’artiste prenait un manche ( en bois) avec une
        aiguille et venait encrer le motif sur la peau avec une encre noire à
        base de charbon.
      </>,
      <>
        <br />
        <br />
        <span className="sect__txt--thin sect__txt--italic">
          De nos jours, les artistes qui exercent ce style, on explore les
          récits, les techniques, pour se rapprocher de comment c'était fait
          avant. Pour ce faire, comme leurs prédécesseurs, ils utilisent du
          handpoke & de l’encre noire pour réaliser les motifs inspirés de l’art
          nordique.
        </span>{" "}
      </>,
      <>
        On retrouve les motifs qui tiennent une part importante dans la
        mythologie et leurs arts, représentés sur les armes, maisons,
        manuscrits, sculptures… Ces peuples avaient un ‘amour’ pour leur
        représentation.
      </>,
      <>
        <br />
        <br />{" "}
        <span className="sect__txt--thin">
          Le style se veut plus agressif et montre une symbolique guerrière de
          son porteur qu’un côté doux / calme. On retrouve des entrelacs, des
          boucles, nœuds, … qui sert à représenter une armure pour protéger son
          hôte.
        </span>{" "}
      </>,
      <>
        Il y a une controverse sur si oui ou non les vikings{" "}
        <i>( et les gens des pays du Nord)</i> possédaient des tatouages vu le
        peu de preuve historique qui nous est parvenue. Avec un faible aperçu,
        encore de nos jours, des motifs tatoués à l’époque .{" "}
      </>,
      "",
      <>
        Selon ses récits, il donne le fait que les vikings étaient tatoués, avec
        le corps recouvert de motifs de couleur verdâtre de motifs d’arbre
        entrelacés. Mais ces récits sont mis en doute par le fait que le mot en
        arabe qu’il utilise est le même qui est utilisé pour désigner les
        peintures murales. De ce point de vue, on pourrait se dire que faute de
        mot pour désigner, il a utilisé un mot générique pour donner une
        explication sur le corps de ces hommes .{" "}
      </>,
      <>
        <br />
        <br />{" "}
        <span className="sect__txt--thin sect__txt--italic">
          {" "}
          De ce fait, on a une vision de ces personnes mais …{" "}
        </span>{" "}
      </>,
      <>
        Mais le problème, c'est qu’aucune mention de ces tatouages ne sont faits
        mention dans les récits du nord, or que ces derniers sont très détaillés
        sur la façon dont étaient les personnes vivant dans le nord.
      </>,
      <>
        <br />
        <br />{" "}
        <span className="sect__txt--thin sect__txt--italic">
          Comme avec des descriptions de leur façon de s’habiller, leurs
          coiffures, couleurs de cheveux … Cela ne veut pas dire que ces
          tatouages n’existaient pas, mais leurs origines restent inconnues.
        </span>
      </>,
      <>
        On a retrouvé une momie dans les glaces de Sibérie recouverte de
        tatouages, mais quel est le lien ? Ce peuple faisant du commerce avec
        les pays du nord, on peut supposer que ces derniers aiment aussi
        partager leurs traditions pour le tatouage. Comme on retrouve des traces
        chez les peuples celtes, saxe, germain.{" "}
      </>,
      <>
        {" "}
        <br />
        <br />{" "}
        <span className="sect__txt--thin">
          Des peuples que les nordiques ont rencontrés pour diverses raisons, et
          donc ces derniers importaient et s'approprient des éléments d’autres
          cultures, on peut se dire que certains membres des tribues nordiques
          étaient tatoués.{" "}
        </span>
      </>,
      <>
        {" "}
        Il est une composition de 9 lignes, qui regrouperait toutes les runes .
        Signifiant le tout les possibilités du passé, du futur et du présent,
        montrant l'interconnexion entre nos actions passées répercutant notre
        présent et qui modifiera notre futur.{" "}
      </>,
      <>
        Le compas runique, il sert à montrer d'où l’on vient et où on va,
        pouvant aussi servir d'amulette de protection, afin de retrouver son
        chemin.
      </>, //
      <>
        Plus connu sous ‘ l’arbre de la vie’, il représente l’arbre qui porte
        l’univers dans ses branches, en connectant notre monde à tous les autres
        mondes. Il permet de donner un point de vue plus spirituel sur notre
        vision de l’univers et de l’au-delà.
      </>,
    ],
  ];

  let interTxt = [
    [
      <>
        Une transmission entre <br />
        <span className=" sect__title--thin sect__title--big">
          maitre & eleves
        </span>
      </>,
      "L'histoire de l'Irezumi",
      "Les motifs amblematiques",
    ],
    [
      <>Dans&nbsp;le froid&nbsp;nordique</>,
      <>De&nbsp;l'ancien, maintenant</>,
      <>De&nbsp;la pierre a&nbsp;l'homme</>,
    ],
  ];

  return (
    <>
      <FirstSectionStyles
        BTD1={allTitle[styleNum][0]}
        BTD2={allTitle[styleNum][1]}
        title={allTitle[styleNum][2]}
        txt={allTxt[styleNum][0]}
        Img01={""}
        Img02={""}
      />

      <InterSectionBox
        WhitThext={true}
        textTitle={interTxt[styleNum][0]}
        backImg={{ backgroundImage: `url(${imgBg})` }}
      />
      <div className="sect--heigth100 sect--snapChild">
        <SectHoriFull
          BigTitle1={allTitle[styleNum][3]}
          BigTitle12={allTitle[styleNum][4]}
          BigTitle2={allTitle[styleNum][5]}
          imgArtiste1={""}
          imgArtiste2={""}
          textcol1={allTxt[styleNum][1]}
          textcol2={allTxt[styleNum][2]}
          textcol3={""}
          textcol4={allTxt[styleNum][3]}
          textcol5={allTxt[styleNum][4]}
          textcol6={""}
          smallTitle1={""}
          smallTitle2={allTitle[styleNum][6]}
          smallTitle3={allTitle[styleNum][7]}
          smallTitle4={allTitle[styleNum][8]}
        />
      </div>
      <InterSectionBox
        WhitThext={true}
        textTitle={interTxt[styleNum][1]}
        backImg={{ backgroundImage: `url(${imgBg})` }}
      />
      <HistoryLandRow
        title1={allTitle[styleNum][9]}
        txt1={allTxt[styleNum][5]}
        txt12={allTxt[styleNum][6]}
        animImg1={true}
        HB1={true}
        img01={imgBg}
        img02={imgBg}
        colTxt01={{ color: "#FDF2DE" }}
        title2={allTitle[styleNum][10]}
        txt2={allTxt[styleNum][7]}
        txt22={allTxt[styleNum][8]}
        animImg2={true}
        HB2={false}
        img03={imgBg}
        img04={imgBg}
        colTxt02={{ color: "#FDF2DE" }}
        title3={allTitle[styleNum][11]}
        txt3={allTxt[styleNum][9]}
        txt32={allTxt[styleNum][10]}
        animImg3={false}
        HB3={true}
        img05={imgBg}
        img06={imgBg}
        colTxt03={{ color: "#FDF2DE" }}
        title4={allTitle[styleNum][12]}
        txt4={allTxt[styleNum][11]}
        txt42={allTxt[styleNum][12]}
        animImg4={false}
        HB4={true}
        img07={imgBg}
        img08={imgBg}
        colTxt04={{ color: "#FDF2DE" }}
        actifB4={true}
      />
      <InterSectionBox
        WhitThext={true}
        textTitle={interTxt[styleNum][2]}
        backImg={{ backgroundImage: `url(${backImgjap02})` }}
      />
      <BoxMotif
        blackMotif={false}
        motifImg01={Ryu01}
        motifImg02={Ryu02}
        motiftitle={allTitle[styleNum][13]}
        motifTxt={allTxt[styleNum][13]}
      />
      <BoxMotif
        blackMotif={true}
        noAnim={true}
        motifImg01={Koi01}
        motifImg02={Koi02}
        motiftitle={allTitle[styleNum][14]}
        motifTxt={allTxt[styleNum][14]}
      />
      <BoxMotif
        blackMotif={false}
        noAnim={false}
        motifImg01={Jigoku1}
        motifImg02={Jigoku2}
        motiftitle={allTitle[styleNum][15]}
        motifTxt={allTxt[styleNum][15]}
      />
      <BoxMessageEnd />
    </>
  );
}

export default LayoutStyle2;
