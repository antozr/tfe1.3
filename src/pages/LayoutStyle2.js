import React , { useState }from "react";
import InterSectionBox from "../components/InterSectionBox";
import HistoryLandRow from "../components/HistoryLandRow";
import SectHoriFull from "../components/SectMaitreHori";
import FirstSectionStyles from "../components/FirstSectionStyles";
import BoxMotif from "../components/BoxMotif";
import BoxMessageEnd from "../components/BoxMessageEnd";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
/// import img japon
import imgBgJ1 from "../assets/images/japon/compressed/irezumiBack2-min.webp";
import imgBgJ2 from "../assets/images/japon/compressed/horishiFullWork-min.webp";
import backImgjap02 from "../assets/images/japon/compressed/arrierePlanYakuza.webp";
import HistoJ11 from "../assets/images/japon/compressed/ainu1.webp";
import HistoJ12 from "../assets/images/japon/compressed/ainu2.webp";
import HistoJ21 from "../assets/images/japon/compressed/meiji1-min.webp";
import HistoJ22 from "../assets/images/japon/compressed/meiji2-min.webp";
import HistoJ31 from "../assets/images/japon/compressed/tebori-min.webp";
import HistoJ32 from "../assets/images/japon/compressed/irezumiBack2-min.webp";
import HistoJ41 from "../assets/images/japon/compressed/arrierePlanYakuza.webp";
import HistoJ42 from "../assets/images/japon/compressed/horishiFullWork-min.webp";
import Ryu01 from "../assets/images/japon/compressed/dragon02-min.webp";
import Ryu02 from "../assets/images/japon/compressed/dragon2-min.webp";
import Koi01 from "../assets/images/japon/compressed/koi1-min.webp";
import Koi02 from "../assets/images/japon/compressed/koi2-min.webp";
import Jigoku1 from "../assets/images/japon/compressed/jigoku1-min.webp";
import Jigoku2 from "../assets/images/japon/compressed/jigoku2-min.webp";
import HotifulJ1 from "../assets/images/japon/compressed/horiyoshi-III-min.webp";
import HotifulJ2 from "../assets/images/tebori.webp";
import INtroSvgJ1 from "../assets/images/svgs/japon/ryu01.svg";
import INtroSvgJ2 from "../assets/images/svgs/japon/carpeColor.svg";

/// nordic image
import INtroSvgN1 from "../assets/images/svgs/nordic/valknut.svg";
import INtroSvgN2 from "../assets/images/svgs/nordic/wyrd.svg";
import imgBgN1 from "../assets/images/nordic/interNordicnoir.webp";
import imgBgN2 from "../assets/images/oldamerica/fondPeauNoir.webp";
import imgBgN3 from "../assets/images/nordic/vikingHome.webp";
import HotifulN1 from "../assets/images/nordic/motifHori.webp";
import HotifulN2 from "../assets/images/nordic/motifBighory.webp";
import HistoN12 from "../assets/images/nordic/drakar.webp";
import HistoN21 from "../assets/images/nordic/amad1.webp";
import HistoN22 from "../assets/images/nordic/amad2.webp";
import HistoN31 from "../assets/images/nordic/histpry1.webp";
import HistoN32 from "../assets/images/nordic/history2.webp";
import HistoN41 from "../assets/images/nordic/momie1.webp";
import HistoN42 from "../assets/images/nordic/momie2.webp";
import Wyrd1 from "../assets/images/nordic/wyrd.webp";
import Wyrd2 from "../assets/images/nordic/wyrd2.webp";
import Vegvisir1 from "../assets/images/nordic/vegvisir.webp";
import Vegvisir2 from "../assets/images/nordic/vegvisir2.webp";
import Ygdrazil1 from "../assets/images/nordic/ygdrazil1.webp";
import Ygdrazil2 from "../assets/images/nordic/ygdrazil2.webp";

//// import Russian prisonner tattoo
import INtroSvgR1 from "../assets/images/svgs/russie/EtoileRusse.svg";
import INtroSvgR2 from "../assets/images/svgs/russie/kremlin.svg";
import imgBgR1 from "../assets/images/oldamerica/fondPeauNoir.webp";
import HotifulR1 from "../assets/images/russie/danzing.webp";
import HotifulR2 from "../assets/images/russie/danzingh.webp";
import HistoR11 from "../assets/images/russie/prissonierTsar.webp";
import HistoR12 from "../assets/images/russie/prissonier1.webp";
import HistoR21 from "../assets/images/russie/prisonnier4.webp";
import HistoR22 from "../assets/images/russie/prisonnier5.webp";
import HistoR31 from "../assets/images/russie/prisonnier2.webp";
import HistoR32 from "../assets/images/russie/coilPrison.webp";
import HistoR41 from "../assets/images/russie/endEre.webp";
import HistoR42 from "../assets/images/russie/Caste.webp";
import epaule1 from "../assets/images/russie/epaullette1.webp";
import epaule2 from "../assets/images/russie/epaullette2.webp";
import etoile1 from "../assets/images/russie/etoile1.webp";
import etoile2 from "../assets/images/russie/etoile2.webp";
import vierge1 from "../assets/images/russie/vierge1.webp";
import vierge2 from "../assets/images/russie/vierge2.webp";


/// import image celtic tattoo
import INtroSvgC1 from "../assets/images/svgs/celtic/croixCelte.svg";
import INtroSvgC2 from "../assets/images/svgs/celtic/triskel.svg";
import imgBgC1 from "../assets/images/celte/backCelte1.webp";
import imgBgC2 from "../assets/images/celte/backCelt2.webp";
import HotifulC1 from "../assets/images/celte/backMotif.webp";
import HotifulC2 from "../assets/images/celte/motifentrela.webp";
import HistoC11 from "../assets/images/celte/pictsBig.webp";
import HistoC12 from "../assets/images/celte/picts2.webp";
import HistoC21 from "../assets/images/celte/ptolome1.webp";
import HistoC22 from "../assets/images/celte/ptolome2.webp";
import HistoC31 from "../assets/images/celte/util1.webp";
import HistoC32 from "../assets/images/celte/util2.webp";
import triskel1 from "../assets/images/celte/triskel1.webp";
import triskel2 from "../assets/images/celte/triskel2.webp";
import epona1 from "../assets/images/celte/epona1.webp";
import epona2 from "../assets/images/celte/epona2.webp";
import tri1 from "../assets/images/celte/TRIKETRA1.webp";
import tri2 from "../assets/images/celte/triketra2.webp";

function LayoutStyle2({ styleNum, boxH4 , reverseCol}) {
  const [showTrans2, setShowTrans2] = useState(true);

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
      <>Les&nbsp;nordiques</>,
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
    [
      "Russie",
      "ГУЛАГ",
      <>
        Direction le Goulag.
        <br /> честь ,боль!
      </>,
      "Le collecteur",
      "Коллектор",
      "вор в законе",
      "",
      "",
      "",
      <>Le signe de la&nbsp;répression</>,
      <>Leur&nbsp;iconographie</>,
      "L’hygiène, une autre histoire",
      "La fin d'une ère",
      "Les épaulettes",
      <>L'étoiles&nbsp;à 8&nbsp;branches</>,
      <>La Vierge&nbsp;à l’enfant</>,
    ],
    [
      <>Peuple&nbsp;celtes</>,
      "nature",
      <>Rencontre en forêt</>,
      <>La&nbsp;technique</>,
      <>teknikel</>,
      <>L’origine des motifs </>,
      "Du point fait main",
      "Des motifs ",
      "riche de mythologie",

      <>Les origines</>,
      <>Les récits étrangers</>,
      <>Leur utilisation</>,
      "",
      <>Le triskel </>,
      <>Le cheval</>,
      <>La triketra</>,
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
      <>
        Il symbolise la détermination, des forces, des résistances face à
        l’adversité. Selon la tradition, ils nagent à contre-courant de la
        rivière jaune, où seuls les plus forts pourront atteindre la porte du
        dragon. Et ils pourront se transformer en dragon avec la joie éternelle.
        <br />
        <br />
        <span className="sect__txt--thin">
          On retrouve différents types de Koi sur les motifs de leur écailles
          ainsi que sur sa position, la composition et sera souvent liée avec
          l’élément de l’eau.
        </span>
      </>,
      <>
        C'est une professionnelle des divertissements pour adultes, mais un
        jour, elle va rencontrer un moine qui l'aidera à atteindre l'éveil
        spirituel. On la représente avec une robe dont le dos est recouvert
        d'une imagerie des enfers et sur le devant avec une imagerie signifiant
        la miséricorde avec les fleurs de cerisier ( symbolisant l'éphémérité de
        la condition humaine et de la beauté).
        <br />
        <br />{" "}
        <span className="sect__txt--thin">
          Elle symbolise la rédemption et le changement de cap dans la vie .
        </span>
      </>,
      <>
        Ce sont 108 brigands qui vont se retourner contre le pouvoir en place ,
        qui est corrompu. Ils viennent du <b>Suikoden</b> illustré par{" "}
        <b>Utagawa Kuniyoshi </b> et qui servent depuis pour la réalisation des
        grosses pièces d'irezumi.
        <br />
        <br />{" "}
        <span className="sect__txt--thin">
          Il représente le courage , la loyauté et d'autres valeurs en fonction
          des personnages.{" "}
        </span>{" "}
      </>,
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
    [
      <>
        On se trouve dans le bloc soviétique, en voyageant de goulag à camp de
        travail dans la Sibérie. On part à la découverte des illustrations
        faites par les prisonniers sur d'autres par amour, haut-fait ou
        patriotisme.
      </>,
      <>
        A la chute de l'URSS, on a pu voir l'iconographie de ce côté-là du monde
        et surtout grâce à un gardien de prison, <b> Danzig Baldaev</b> qui a
        recueilli les dessins sur les prisonniers ainsi que leur signification.
        Grâce à lui , on sait que le tatouage se faisait peu de temps après le
        crime et que plus la personne en avait, plus elle avait fait de prison
        et plus elle était dangereuse.
      </>,
      <>
        <br />
        <br />
        <span className="sect__txt--thin sect__txt--italic">
          {" "}
          De ce fait, on retrouve environ <b>65 %</b> des prisonniers de prison
          à sécurité minimale, <b> 80 % </b>des prisonniers à sécurité moyenne
          et <b>95 %</b> des prisonniers à sécurité élevée tatoués.
        </span>
      </>,
      <>
        <span className="sect__title sect__title--2">
          Les voleurs dans la loi
        </span>
        <br />
        <br />
        Une organisation criminelle dans la prison , qui s'est vite hiérarchisée
        tout en créant une iconographie spécifique en mettant en lien leur
        passé, leur pouvoir ainsi que leur tourment.
      </>,
      "",

      <>
        L’époque Soviétique, de Staline à Gorbatchev : depuis au moins 1861, le
        prisonnier se faisait marquer /tatouer par la prison dans un but
        pratique, afin de savoir leurs crimes et leur dangerosité. Ainsi les
        voleurs recevaient un V au fer rouge sur le visage , les déserteurs un
        SP.
        <br /> Mais à un moment , dans le début du 20e siècle, ces derniers ont
        pris possession de leur supplice pour le transformer en un art, en un
        moyen de défier le système.
        <br />
        <br />
        <span className="sect__txt--thin">
          En se constituant en groupe rebelle, ils ont pris comme credo de
          respecter l’ancien système et de préserver ses traditions. Ils se sont
          couvert le corps de ces motifs, on les appelait les{" "}
          <b>vory v zakone</b> “ les voleurs dans la loi”.
        </span>
      </>,
      "",
      <>
        Leur corps tatoué est une sorte de passeport servant à montrer à ceux
        qui savent le lire, ce qu'ils ont fait comme crimes , leur orientation
        sexuelle, leur rang dans "la mafia " de la prison ainsi que leurs idéaux
        politiques. Chacun était fier de les porter mais gare aux faux et aux
        menteurs, un traitement spécial leur était réservé.
        <br />
        <br />
        <span className="sect__txt--thin sect__txt--italic">
          Les faux tatouages étaient au mieux enlevés au pire recouvert par des
          motifs non glorieux et ces personnes devenaient la victime des autres
          prisonniers. Car on ne ment pas sur son passé pour en avoir un plus
          glorieux, mais on l’accepte sinon on doit en subir les conséquences.
        </span>
      </>,
      "",
      <>
        Cela se faisait dans les cellules ou autre endroit disposant de
        l'intimité . Comme dermographe on retrouvait une construction avec des
        rasoirs électriques, des brosses à dent custom avec un moteur , des
        boîtes en métal et 1 à 2 aiguilles.
        <br />
        <br />
        <span className="sect__txt--thin sect__txt--italic">
          Même avec les précautions prises les maladies n'étaient pas éloignées,
          certains souffraient de fièvre post tatouage, de la syphilis, du SIDA,
          d'hépatite…
        </span>
      </>,
      "",
      <>
        A la chute de l’union soviétique, l’ouverture au monde occidental, la
        fin de la seconde guerre mondiale et diverses crises inter-prisonniers.
        Le tatouage de des <b>vor v zakone</b>, devient une marque de la zone,
        et ne fut plus “encensée” par le reste de la population.
        <br />
        <br />
        <span className="sect__txt--thin sect__txt--italic sect__title--jaune">
          {" "}
          Ils ont perdu une partie de leur statut, et de nos jours plus grand
          monde continue ne perpétue ce style dans cet objectif-là. Même si on
          continue à se faire tatouer dans les prisons, les styles ont évolué,
          mais les traces du passé sont et resteront présentes.
        </span>
      </>,
      "",

      <>
        Une iconographie reprenant le style, la forme et un réalisme des
        épaulettes des uniformes de l’armée rouge. Avec l’ajout de grade, de
        symbole, elles sont portées sur les deux épaules, comme sur un costume.
        On en retrouve certaines avec des crânes, elles font référence aux
        officiers de l'allemagne du 3e reich, dont le porteur approuve
        l’idéologie ou souhaite provoquer une fois de plus les dirigeants
        soviétiques.
        <br />
        <br />
        <span className="sect__txt--thin">
          Elles représentent le grade des criminelle dans la hiérarchie de la
          mafia, dont seul les plus haut gradé les portes, normalement. Mais
          elles représentent aussi la défiance envers la hiérarchie militaire en
          spoliant l’un de leur emblème et symbole de puissance.
        </span>
      </>,
      <>
        Une étoile semblable à un design de compas, de rose des vents, avec ses
        8 branches. Elle est portée par paire sur le torse et / ou sur les
        genoux. On trouve une autre variante, celle-ci avec un nombre de
        branches différent qui représente le nombre d’années passées en prison,
        avec une branche par année.
        <br />
        <br />
        <span className="sect__txt--thin sect__txt--italic">
          Son design est simple et “disponible” pour tous les détenus, à
          condition de respecter certains préceptes. Comme celui qui les porte
          ne portera jamais l'uniforme ( pour le torse) et je ne s'agenouillera
          devant personne et surtout pas la justice.
        </span>
      </>,
      <>
        On peut retrouver différentes compositions, mais le principe reste le
        même, on aura une sainte Vierge tenant un enfant dans ses bras. Les
        Russes étant catholiques orthodoxes, on retrouve divers motifs religieux
        avec une signification double.
        <br />
        <br />
        <span className="sect__txt--thin">
          La vierge représente la protection maternelle et divine avec la
          loyauté de son porteur envers Dieu et son groupe. L’enfant a une
          signification un peu plus sombre, car il représente une vie de crime
          présente depuis l’enfance et dans certains cas un emprisonnement à un
          jeune âge.
        </span>
      </>,
    ],
    [
      <>
        Nous allons voyager dans le temps et dans les plaines verdoyantes des
        tribus celtes, afin de découvrir la tradition qui les lies aux tatouages
        ainsi que la symbolique qu’a pris place la nature dans leur art.{" "}
      </>,

      <>
        Les motifs, le design tire son esprit, dans la mer nature et la beauté
        qu'elle a créée, a la différence des nordiques, qui se tourne vers la
        guerre et l'humain. Même si on peut retrouver des similitudes dans la
        conception des motifs due à leur différend échange. Ce qu'on retrouve
        chez les deux sont des formes qui s'entrelacent, qui se lie pour donner
        naissance à tous autre chose en fonction de la région. 
      </>,
      <>
        <br />
        <br />{" "}
        <span className="sect__txt--thin sect__txt--italic">
          On sait que le liquide utilisé comme encre était une poudre aux
          propriétés médicinales de couleur bleu verte une fois encrée. Et
          l'artiste utilisait une pointe en fer, pour la réalisation des motifs,
          mais qu'en est-il d'eux ?
        </span>
      </>,
      <>
        On retrouve des motifs sur l’art celtes ainsi que sur des abjects du
        quotidien, comme sur des poutres, des rochers, de l’orfèvrerie et sur
        des armes. On peut noter une ressemblance avec l’art des peuples
        nordiques, mais cela est dû à leurs nombreuses rencontre et échange lors
        des expéditions de ces derniers.{" "}
      </>,
      <>
        On peut dire que ces origines remontent aux débuts de la civilisation
        celte, même si on ne connaît pas la date précise, avec des traces
        écrites du 2e siècle.  Sur les plus de 200 peuplades, on retrouve le
        peuple tatoué le plus connu : les pics. 
        <br />
        <br />
        <span className="sect__txt--italic sect__txt--thin">
          Leur nom signifie : ceux qui sont peints. Mais ils ne sont pas seuls,
          on retrouve aussi des peuples gaulois et germains ou une partie du
          clan était tatouée,  avec pour but d'effrayer les Romains. 
        </span>
      </>,
      <>
        Nous allons voyager dans le temps et dans les plaines verdoyantes des
        tribus celtes, afin de découvrir la tradition qui les lies aux tatouages
        ainsi que la symbolique qu’a pris place la nature dans leur art.{" "}
      </>,
      <>
        Vers la moitié du 2e siècle, Claude Ptolémée va décrire la tribu des
        pics ( breton) de smirtaée. De plus Isidore de Séville,  les décrit
        comme un peuple couvert de décoration fait par un artiste avec une
        aiguille. Qui par ces marques montre la position dans la société de ce
        dernier. 
        <br />
        <br />
        <span className="sect__txt--italic">
          Chez les Scots(irlandais) , on remarque leur corps peint de
          différentes figures par une pointe de fer et une encre. Même si on a
          peu de trace écrite de présence de tatouage dans les récits celtes, 
          on en retrouve chez les observateurs étrangers. 
        </span>
      </>,

      <></>,
      "",

      <>
        Les tatouages avaient plusieurs significations,  rôle. Premièrement, de
        définir leur rang social ainsi que leur fonction dans la société. Mais
        comme aujourd’hui, elle servait à montrer la personnalité de leur
        porteur. 
        <br />
        <br />{" "}
        <span className="sect__txt--thin sect__thin--italic">
          On a retrouvé différentes sculptures représentant des celtes, mais il
          est difficile d'affirmer si c'était vraiment des tatouages ou bien des
          peintures corporelles. Mais ce qui est sûr, c'est que la disparition
          des peuples celtiques et de la plupart de leur tradition avec
          l'arrivée du christianisme.
        </span>
      </>,
      "",
      "",

      "",

      //
      <>
        On lui attribue plusieurs symboliques comme les différentes positions du
        soleil,  les 3 mondes ( physique, des cieux avec les astres et le monde
        spirituel avec les dieux, esprit et les morts).
        <br />{" "}
        <span className="sect__txt--thin">
          Le sens des spirales indiquent une signification différente, vers la
          gauche : la lutte et le combat & vers la droite : la paix & la
          tranquillité.
        </span>{" "}
      </>,
      <>
        Les animaux ont une grande importance dans la vie et le culte des celtes
        car d'une part ils étaient utiles lors des batailles et des travaux de
        champs. Et montrer l'importance de la personne qui le porte avec son
        rang social. <br />{" "}
        <span className="sect__txt--thin">
          On retrouve aussi le cheval divin, Epona, qui est liée à la terre Mère
          et instaure le pouvoir de régner sur ses terres en donnant autorité et
          puissance à son porteur.{" "}
        </span>
      </>,
      <>
        On retrouve diverse signification en fonction des peuples et des cultes,
        mais pour les chrétiens, il représente la Sainte trinité et chez les
        Celtes les différentes étapes de la vie d’un homme ( l’enfance, la vie
        adulte et la vieillesse). <br />{" "}
        <span className="sect__txt--thin sect__txt--italic">
          {" "}
          Mais comme pour les autres symboles, on retrouve surtout l’importance
          du 3, qui est un chiffre important dans la culture celtes et bon
          nombre d’autre cultes, car il se rapproche du nombre divin, celui qui
          nous lie aux cieux et aux 3 mondes. C’est un symbole fort utilisé mais
          qui se compose toujours de 3 cercles pour le créer.
        </span>
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
    [
      <>Insalubrite &&nbsp;Beaute</>,
      <>Au&nbsp;goulag en&nbsp;noir</>,
      "Les motifs amblematiques",
    ],
    [
      <>Dans&nbsp;les plaines&nbsp;celtes</>,
      <>Des&nbsp;plantes a&nbsp;l'encre</>,
      <>Des&nbsp;plantes a&nbsp;l'encre</>,
    ],
  ];

  let allImg = [
    [
      INtroSvgJ1,
      INtroSvgJ2,
      imgBgJ2,
      HotifulJ1,
      HotifulJ2,
      imgBgJ1,
      HistoJ11,
      HistoJ12,
      HistoJ21,
      HistoJ22,
      HistoJ31,
      HistoJ32,
      HistoJ41,
      HistoJ42,
      backImgjap02,
      Ryu01,
      Ryu02,
      Koi01,
      Koi02,
      Jigoku1,
      Jigoku2,
    ],
    [
      INtroSvgN1,
      INtroSvgN2,
      imgBgN1,
      HotifulN1,
      HotifulN2,
      imgBgN2,
      imgBgN3,
      HistoN12,
      HistoN21,
      HistoN22,
      HistoN31,
      HistoN32,
      HistoN41,
      HistoN42,
      imgBgN3,
      Wyrd1,
      Wyrd2,
      Vegvisir1,
      Vegvisir2,
      Ygdrazil1,
      Ygdrazil2,
    ],
    [INtroSvgR2, INtroSvgR1, imgBgR1,
      HotifulR1,HotifulR2,
      imgBgR1,
      HistoR11,HistoR12,
      HistoR21,HistoR22,
      HistoR31,HistoR32,
      HistoR41,HistoR42,
      imgBgR1,
      epaule1,epaule2,
      etoile1,etoile2,
      vierge1,vierge2

    ],[
      INtroSvgC1,INtroSvgC2,
      imgBgC1,
      HotifulC1,HotifulC2,
      imgBgC2,
      HistoC11,HistoC12,
      HistoC21,HistoC22,
      HistoC31,HistoC32,
      "","",
      imgBgC1,
      triskel1,triskel2,
      epona1,epona2,
      tri1,tri2
    ]
  ];
 /* add animation load page */
  
    
  setTimeout(() => {
    setShowTrans2(false);
  }, 1800);
  /**/
  return (
    <>
    <motion.div
        initial={{ opacity: 0, y: "20vh" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="sect__layoutAnim"
      >

<FirstSectionStyles
        BTD1={allTitle[styleNum][0]}
        BTD2={allTitle[styleNum][1]}
        title={allTitle[styleNum][2]}
        txt={allTxt[styleNum][0]}
        Img01={allImg[styleNum][0]}
        Img02={allImg[styleNum][1]}
      />

      
      {reverseCol === true ?<><InterSectionBox
        WhitThext={true}
        textTitle={interTxt[styleNum][1]}
        backImg={{ backgroundImage: `url(${allImg[styleNum][5]})` }}
      /> <HistoryLandRow
        title1={allTitle[styleNum][9]}
        txt1={allTxt[styleNum][5]}
        txt12={allTxt[styleNum][6]}
        animImg1={true}
        HB1={true}
        img01={allImg[styleNum][6]}
        img02={allImg[styleNum][7]}
        colTxt01={{ color: "#FDF2DE" }}
        title2={allTitle[styleNum][10]}
        txt2={allTxt[styleNum][7]}
        txt22={allTxt[styleNum][8]}
        animImg2={true}
        HB2={false}
        img03={allImg[styleNum][8]}
        img04={allImg[styleNum][9]}
        colTxt02={{ color: "#FDF2DE" }}
        title3={allTitle[styleNum][11]}
        txt3={allTxt[styleNum][9]}
        txt32={allTxt[styleNum][10]}
        animImg3={false}
        HB3={true}
        img05={allImg[styleNum][10]}
        img06={allImg[styleNum][11]}
        colTxt03={{ color: "#FDF2DE" }}
        title4={allTitle[styleNum][12]}
        txt4={allTxt[styleNum][11]}
        txt42={allTxt[styleNum][12]}
        animImg4={false}
        HB4={true}
        img07={allImg[styleNum][12]}
        img08={allImg[styleNum][13]}
        colTxt04={{ color: "#FDF2DE" }}
        actifB4={boxH4}
      /></>:<><InterSectionBox
      WhitThext={true}
      textTitle={interTxt[styleNum][0]}
      backImg={{ backgroundImage: `url(${allImg[styleNum][2]})` }}
      horiAnim={true}
    /> <div className="sect--heigth100 sect--snapChild">
        <SectHoriFull
          BigTitle1={allTitle[styleNum][3]}
          BigTitle12={allTitle[styleNum][4]}
          BigTitle2={allTitle[styleNum][5]}
          imgArtiste1={allImg[styleNum][3]}
          imgArtiste2={allImg[styleNum][4]}
          textcol1={allTxt[styleNum][1]}
          textcol2={allTxt[styleNum][2]}
          textcol3={""}
          textcol4={allTxt[styleNum][3]}
          textcol5={allTxt[styleNum][4]}
          textcol6={""}
          smallTitle1={allTitle[styleNum][6]}
          smallTitle2={""}
          smallTitle3={allTitle[styleNum][7]}
          smallTitle4={allTitle[styleNum][8]}
          fullImgs={true}
        />
      </div></>}
      
      {reverseCol === true ?<><InterSectionBox
      WhitThext={true}
      textTitle={interTxt[styleNum][0]}
      backImg={{ backgroundImage: `url(${allImg[styleNum][2]})` }}
      horiAnim={true}
    /> <div className="sect--heigth100 sect--snapChild">
        <SectHoriFull
          BigTitle1={allTitle[styleNum][3]}
          BigTitle12={allTitle[styleNum][4]}
          BigTitle2={allTitle[styleNum][5]}
          imgArtiste1={allImg[styleNum][3]}
          imgArtiste2={allImg[styleNum][4]}
          textcol1={allTxt[styleNum][1]}
          textcol2={allTxt[styleNum][2]}
          textcol3={""}
          textcol4={allTxt[styleNum][3]}
          textcol5={allTxt[styleNum][4]}
          textcol6={""}
          smallTitle1={allTitle[styleNum][6]}
          smallTitle2={""}
          smallTitle3={allTitle[styleNum][7]}
          smallTitle4={allTitle[styleNum][8]}
          fullImgs={true}
        />
      </div></>: <><InterSectionBox
        WhitThext={true}
        textTitle={interTxt[styleNum][1]}
        backImg={{ backgroundImage: `url(${allImg[styleNum][5]})` }}
      /> <HistoryLandRow
        title1={allTitle[styleNum][9]}
        txt1={allTxt[styleNum][5]}
        txt12={allTxt[styleNum][6]}
        animImg1={true}
        HB1={true}
        img01={allImg[styleNum][6]}
        img02={allImg[styleNum][7]}
        colTxt01={{ color: "#FDF2DE" }}
        title2={allTitle[styleNum][10]}
        txt2={allTxt[styleNum][7]}
        txt22={allTxt[styleNum][8]}
        animImg2={true}
        HB2={false}
        img03={allImg[styleNum][8]}
        img04={allImg[styleNum][9]}
        colTxt02={{ color: "#FDF2DE" }}
        title3={allTitle[styleNum][11]}
        txt3={allTxt[styleNum][9]}
        txt32={allTxt[styleNum][10]}
        animImg3={false}
        HB3={true}
        img05={allImg[styleNum][10]}
        img06={allImg[styleNum][11]}
        colTxt03={{ color: "#FDF2DE" }}
        title4={allTitle[styleNum][12]}
        txt4={allTxt[styleNum][11]}
        txt42={allTxt[styleNum][12]}
        animImg4={false}
        HB4={true}
        img07={allImg[styleNum][12]}
        img08={allImg[styleNum][13]}
        colTxt04={{ color: "#FDF2DE" }}
        actifB4={boxH4}
      /></>}
      <InterSectionBox
        WhitThext={true}
        textTitle={interTxt[styleNum][2]}
        backImg={{ backgroundImage: `url(${allImg[styleNum][14]})` }}
      />
      {
        window.innerWidth < 600 ? <BoxMotif
        blackMotif={false}
        noAnim={true}
        motifImg01={allImg[styleNum][15]}
        motifImg02={allImg[styleNum][16]}
        motiftitle={allTitle[styleNum][13]}
        motifTxt={allTxt[styleNum][13]}
      />:<BoxMotif
      blackMotif={false}
      motifImg01={allImg[styleNum][15]}
      motifImg02={allImg[styleNum][16]}
      motiftitle={allTitle[styleNum][13]}
      motifTxt={allTxt[styleNum][13]}
    />
      }
      <BoxMotif
        blackMotif={true}
        noAnim={true}
        motifImg01={allImg[styleNum][17]}
        motifImg02={allImg[styleNum][18]}
        motiftitle={allTitle[styleNum][14]}
        motifTxt={allTxt[styleNum][14]}
      />
      {window.innerWidth < 600 ? <BoxMotif
        blackMotif={false}
        noAnim={true}
        motifImg01={allImg[styleNum][19]}
        motifImg02={allImg[styleNum][20]}
        motiftitle={allTitle[styleNum][15]}
        motifTxt={allTxt[styleNum][15]}
      /> : <BoxMotif
      blackMotif={false}
      noAnim={false}
      motifImg01={allImg[styleNum][19]}
      motifImg02={allImg[styleNum][20]}
      motiftitle={allTitle[styleNum][15]}
      motifTxt={allTxt[styleNum][15]}
    />}
      <BoxMessageEnd />
      </motion.div>
      {showTrans2 &&
        createPortal(
          <>
            <motion.div
              className="sect__transPage"
              initial={{ opacity:1, x:"-280vw",height:"200vh",width:"300vw", zIndex:30}}
              animate={{ opacity:1 ,x:"200vw", height:"200vh"}}
              transition={{duration:1.4,type: "tween",
              ease: "circIn"}}
              
            >
              
            </motion.div>
          </>,
          document.body
        )}
    </>
  );
}

export default LayoutStyle2;
