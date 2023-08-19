import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChangeStateDataVisited } from '../logic/__mapStatus.js';
import { createPortal } from "react-dom";


function BoxMessageEnd() {

  const [showTrans, setShowTrans] = useState(false)
const navigate = useNavigate();

  function goTop(){
    window.scrollTo(0,0)
    ChangeStateDataVisited()
    setShowTrans(true)
    setTimeout(()=>{
      navigate("/styles")
    },2300)

  }

  return (
    <>
      <div
        className="sect__endBoxMes"
        
      >
        <h2 className="sect__title sect__title--linkJaune sect__title--2 sect__title--jaune" onClick={goTop} aria-label="Lien pour changer de page">
          Go explorer d'autres styles ?
        </h2>
      </div>

      {showTrans &&
        createPortal(
          <>
            <motion.div
              className="sect__transPage"
              initial={{ opacity:1, y:"60vh", zIndex:30}}
              animate={{ opacity:1 ,y:"-260vh", height:"300vh"}}
              
              transition={{duration:2.2,
              ease: "circIn"}}
              
            >
              
            </motion.div>
          </>,
          document.body
        )}
    </>
  );
}

export default BoxMessageEnd;
