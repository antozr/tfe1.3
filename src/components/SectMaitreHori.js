import React, { useRef } from 'react'
import ContentBoxHori from '../components/ContentBoxHori';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';

import BackImgJap from '../assets/images/fondPapierBig.jpg'

gsap.registerPlugin(ScrollTrigger, Timeline);

function SectHoriFull({ BigTitle1, BigTitle12, BigTitle2, imgArtiste1, imgArtiste2, textcol1, textcol2, textcol3, textcol4, textcol5, textcol6, smallTitle1, smallTitle2, smallTitle3, smallTitle4, fullImgs }) {

    ///anim

    const boxRef = useRef();

    // useEffect(() => {
    //     if (window.innerWidth >= 900) {
    //         let tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: boxRef.current,
    //                 markers: false,
    //                 start: "top center",
    //                 end: "+=400",
    //                 scrub: true,
    //                 toggleActions: 'play none reverse none',
    //             }
    //         });
    //         tl.fromTo("#contentSailor", {
    //             x: '0vw',

    //         }, {
    //             delay: 4,
    //             x: '-30vw',
    //             duration: 6
    //         })
    //             .from("#nameSecond", {
    //                 //delay:6,
    //                 x: '-30vw'
    //             })
    //     };
    // }, []);
    return (
        <section className="sect sect__artiste sect__artiste--rotate hori">
            <div className="hori__rowContainer hori__rowContainer--artiste" ref={boxRef}>
                <div className="hori__box hori__box--smallW " style={{ backgroundImage: `url(${BackImgJap})`}}>
                    <h2 className='sect__title sect__title--big '>
                        {BigTitle1}
                    </h2>
                    <p className="sect__txt sect__txt--japTxt  sect__title--jaune" >{/* style={{margin: "50vh 0 0 0"}} */}
                        {BigTitle12}
                    </p>

                </div>
                <div className="hori__box hori__box--bigW  hori__box--black" id='contentSailor'>

                    <ContentBoxHori linkImg01={imgArtiste1} title01={smallTitle1} title02={smallTitle2} text01={textcol1} text02={textcol2} text03={textcol3} colorTxt={{ color: '#FDF2DE' }} />
                </div>
                <div className="hori__box hori__box--black " id='nameSecond'>
                    <h2 className='sect__title sect__title--big  sect__title--bigSolo  sect__title--italic sect__title--white'>
                        {BigTitle2}
                    </h2>

                </div>
                <div className="hori__box ">
                    <ContentBoxHori  linkImg01={imgArtiste2} title01={smallTitle3} title02={smallTitle4} text01={textcol4} text02={textcol5} text03={textcol6} colorTxt={{ color: '#000' }} fullImg={fullImgs}/>

                </div>
            </div>

        </section>
    )
}

export default SectHoriFull