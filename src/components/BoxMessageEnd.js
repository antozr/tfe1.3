import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { ChangeStateDataVisited } from '../logic/__mapStatus.js';
function BoxMessageEnd() {

  function goTop(){
    window.scrollTo(0,0)
    ChangeStateDataVisited()
  }

  return (
    <>
      <motion.div
        className="sect__endBoxMes"
        initial={{  }}
        whileInView={{ }}
        transition={{
          type: "tween",
          ease: "backIn",
          delay: 1.8,
          duration:0.6
        }}
      >
        <Link to="/styles" className="sect__title sect__title--linkJaune sect__title--2 sect__title--jaune" onClick={goTop} aria-label="Lien pour changer de page">
          Go explorer d'autres styles ?
        </Link>
      </motion.div>
    </>
  );
}

export default BoxMessageEnd;
