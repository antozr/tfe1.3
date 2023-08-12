import React from "react";
import ContentBoxHori from "./ContentBoxHori";

function HistoryLandRow({
  title1,
  txt1,
  txt12,
  animImg1,
  HB1,
  img01,
  img02,
  colTxt01,
  title2,
  txt2,
  txt22,
  animImg2,
  HB2,
  img03,
  img04,
  colTxt02,
  title3,
  txt3,
  txt32,
  animImg3,
  HB3,
  img05,
  img06,
  colTxt03,
  title4,
  txt4,
  txt42,
  animImg4,
  HB4,
  img07,
  img08,
  colTxt04,
  actifB4,
}) {
  return (
    <>
      <div className="sect__historyland  sect--snapChild">
        <div className="hori__grid hori__box--black  sect--snapChild">
          <ContentBoxHori
            title01={title1}
            text01={txt1}
            text02={txt12}
            animImg={animImg1}
            historicBox={HB1}
            linkImg01={img01}
            linkImg02={img02}
            colorTxt={colTxt01}
          />
        </div>
        <div className="hori__grid hori__grid--full  hori__box--bigHeight ">
          <ContentBoxHori
            title01={title2}
            text01={txt2}
            text02={txt22}
            animImg={animImg2}
            historicBox={HB2}
            linkImg01={img03}
            linkImg02={img04}
            colorTxt={colTxt02}
            fullImg={true}
          />
        </div>
        <div className="hori__grid hori__box--black  ">
          <ContentBoxHori
            title01={title3}
            text01={txt3}
            text02={txt32}
            animImg={animImg3}
            historicBox={HB3}
            linkImg01={img05}
            linkImg02={img06}
            colorTxt={colTxt03}
          />
        </div>
        {actifB4 === true ? (
          <>
            <div className="hori__grid hori__box--black  ">
              <ContentBoxHori
                title01={title4}
                text01={txt4}
                text02={txt42}
                animImg={animImg4}
                historicBox={HB4}
                linkImg01={img07}
                linkImg02={img08}
                colorTxt={colTxt04}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default HistoryLandRow;
