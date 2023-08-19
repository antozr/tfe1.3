import React from "react";

function InterSectionBox({ WhitThext, backImg, textTitle, horiAnim }) {
  function noTextBox() {
    return (
      <div className="sect__interColor sect--heigth100  " style={backImg}></div>
    );
  }

  function textBoxOn() {
    return (
      <div
        className="sect__nameBigBox sect__nameBigBox--fondImg sect--snapChild"
        style={backImg}
        onMouseMove={horiAnim === true ? getTopSize : console.log("hey")}
        id={horiAnim === true ? "moveInter" : ""}
      >
        <h2 className="sect__title sect_title--2 sect__title--big sect__title--druzokh">
          {textTitle}
        </h2>
      </div>
    );
  }

  function getTopSize(e) {
    let box1 = document.querySelector(".sect__artiste");
    let box2 = document.querySelector("#moveInter");
    console.log(e);
    let of1 = box1.offsetTop;
    if (e.screenY > ((window.innerHeight / 2)+100)) {
      setTimeout(() => {
        window.scrollTo({
          top: of1,
          left: 0,
          behavior: "smooth"
        });
      }, 400);
    } else {
      window.scrollTo({
        top: box2.offsetTop,
        left: 0,
        behavior: "smooth"
      });
      console.log(box2);
    }
  }

  return <>{WhitThext === true ? textBoxOn() : noTextBox()}</>;
}

export default InterSectionBox;
