import React from "react";
import BoutonNormal from "./BoutonComp";

function FirstSection({
  BGImg,
  title1,
  txt1,
  span1,
  btnSwitch,
  nameBtn,
  linkBtn,
  ClassColorBtn,
  linkHrefbtn,
  h2Switch,
  h2Title,
  bgBlack
}) {
  return (
    <>
      <div className="homepage__sect1 homepage__sect1--bgImg sect">
        <div
          className="sect__boxImg--big sect__boxImg"
          style={{ backgroundImage: `url(${BGImg})` }}
        >
          <div className={bgBlack?"sect__boxTxt sect__boxTxt--bgNoir  ":"sect__boxTxt"}>
            {/* Changer le titre  */}
            <h1 className="sect__title sect__title--ecart">{title1}</h1>
            {h2Switch ? (
              <>
                <h2
                  className=" sect__title sect__title--2 sect__title--ecart"
                  style={{ fontSize: "28px" }}
                >
                  {h2Title}
                </h2>
              </>
            ) : (
              ""
            )}
            <p className="sect__txt">{txt1}</p>
            <span className="sect__txt sect__txt--italic sect__txt--bold sect__txt--ecart">
              {span1}
            </span>
            {btnSwitch ? (
              <>
                <BoutonNormal
                  nameBtn={nameBtn}
                  linkBtn={linkBtn}
                  ClassColor={ClassColorBtn}
                  linkHref={linkHrefbtn}
                  funChangeP={false}
                />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
