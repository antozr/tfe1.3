import React, { useRef } from "react";
import {  motion } from "framer-motion";


function BoxMotif({motifImg01, motifImg02, motiftitle, motifTxt}) {
    const scrollRef = useRef(null);
  return (
    <>
    
    <div className="sect__motifZone" ref={scrollRef}>
        <div className="motif__boxImgAnim">
          <motion.div
            className="motif__boxImg motif__boxImg--full"
            initial={{ width: "100vw" }}
            whileInView={{ width: "60vw", opacity: 0.9, margin: "5vh 0 0 0 " }}
            transition={{
              duration: 0.4,
              delay: 2,
              type: "tween",
              ease: "circOut",
            }}
            viewport={{ root: scrollRef, once: true }}
          >
            <img
              src={motifImg01}
              alt="Je suis un motif"
              className="motif__img "
            />
          </motion.div>

          <motion.div
            className="motif__boxImg motif__boxImg--second"
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: "-40vh", x: "50vw" }}
            transition={{
              duration: 0.4,
              delay: 2.2,
              type: "tween",
              ease: "circOut",
            }}
            viewport={{ root: scrollRef, once: true }}
          >
            <img
              src={motifImg02}
              alt="Je suis un motif"
              className="motif__img "
            />
          </motion.div>
        </div>

        <motion.div
          className="motif__boxContent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.8,
            type: "tween",
            ease: "circOut",
          }}
          viewport={{ root: scrollRef, once: true }}
        >
          <h2 className="sect__title sect__title--2">{motiftitle}</h2>
          <p className="sect__txt sect__txt--ecart">
           {motifTxt}
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default BoxMotif