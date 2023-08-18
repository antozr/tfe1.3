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
        onMouseMove={horiAnim === true ? getTopSize : console.log('hey')}
      >
        <h2 className="sect__title sect_title--2 sect__title--big sect__title--druzokh">
          {textTitle}
        </h2>
      </div>
    );
  }

  function getTopSize() {
    let box1 = document.querySelector(".sect__artiste");
    console.log(box1.offsetTop);
    let of1 = box1.offsetTop;
    console.log(of1);
    setTimeout(()=>{
        window.scrollTo({
            top: of1,
            left: 0,
            behavior: "smooth",
          });
    },800)
  }

  return <>{WhitThext === true ? textBoxOn() : noTextBox()}</>;
}

export default InterSectionBox;
