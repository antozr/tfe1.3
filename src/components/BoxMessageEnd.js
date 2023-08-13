import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function BoxMessageEnd() {
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
        <Link to="/styles" className="sect__title sect__title--linkJaune sect__title--2 sect__title--jaune">
          Go explorer d'autres styles ?
        </Link>
      </motion.div>
    </>
  );
}

export default BoxMessageEnd;
