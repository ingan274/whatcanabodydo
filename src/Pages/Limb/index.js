import React, { useState, useEffect } from "react";
import "./style.css";
import "./style_1025-1622.css";
import "./style_812-1024.css";
import "./style_668-811.css";
import "./style_375-667.css";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Background from "../../Component/Limb";
import Evolution from "../../Component/LimbAbove";
import DotNav from "../../Component/DotNav";
gsap.registerPlugin(ScrollTrigger);

const Limb = (props) => {
    const [p1Title] = useState(props.page.p1.title);
    const [p1Text] = useState(props.page.p1.text);
    const [p2Title] = useState(props.page.p2.title);
    const [p2Text] = useState(props.page.p2.text);
    const [p3Title] = useState(props.page.p3.title);
    const [p3Text] = useState(props.page.p3.text);
    const [p4Title] = useState(props.page.p4.title);
    const [p4Text] = useState(props.page.p4.text);
    const [p5Title] = useState(props.page.p5.title);
    const [p5Text] = useState(props.page.p5.text);
    const [p6Title] = useState(props.page.p6.title);
    const [p6Text] = useState(props.page.p6.text);

    const anchorLink = (title) => {
        const deleteItems = [".", ",", "(", ")", "?", "-", " "]
        let anchor = ""
        for (let letter of title) {
            if (deleteItems.includes(letter)) {
                continue;
            } else {
                anchor += letter

            }
        }
        return anchor;
    }

    const [anchor1] = useState(anchorLink(p1Title));
    const [anchor2] = useState(anchorLink(p2Title));
    const [anchor3] = useState(anchorLink(p3Title));
    const [anchor4] = useState(anchorLink(p4Title));
    const [anchor5] = useState(anchorLink(p5Title));
    const [anchor6] = useState(anchorLink(p6Title));

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        ScrollTrigger.defaults({
            toggleActions: "restart pause resume pause"
        });

        gsap.fromTo("#upperarm", { x: 0, y: 0 }, { x: -300, y: -20, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#hand", { x: 0, y: 0 }, { x: -300, y: 80, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#forearm", { x: 0, y: 0 }, { x: 20, y: 100, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#wristring", { x: 0, y: 0 }, { x: -100, y: 60, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#elbow", { x: 0, y: 0 }, { x: 50, y: 0, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#handsensor", { x: 0, y: 0 }, { x: -180, y: -50, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#forearmcontroller", { x: 0, y: 0 }, { x: -160, y: -60, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#sensorconnection", { x: 0, y: 0 }, { x: -90, y: -10, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#connector", { x: 0, y: 0 }, { x: -100, y: 5, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#verticalconnector", { x: 0, y: 0 }, { x: 20, y: -45, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#luppersens3", { x: 0, y: 0 }, { x: -100, y: -45, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#jointcup", { x: 0, y: 0 }, { x: 30, y: -15, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#elbowcontrol", { x: 0, y: 0 }, { x: -80, y: -10, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#luppersens2", { x: 0, y: 0 }, { x: 20, y: -50, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#luppersens1", { x: 0, y: 0 }, { x: -40, y: 0, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);
        gsap.fromTo("#upperarmsensor", { x: 0, y: 0 }, { x: 30, y: -30, ease: "power1" }).yoyo(true).repeat(1000).timeScale(.06);

    })

    return (
        <Box className="chapter limbchap">
            {/* Images */}
            <Box className="limbBack">
                <Background />
            </Box >
            <Box className="limbFront">
                <Evolution />
            </Box>

            <DotNav
                section1={p1Title}
                section2={p2Title}
                section3={p3Title}
                section4={p4Title}
                section5={p5Title}
                section6={p6Title}
                anchor1={anchor1}
                anchor2={anchor2}
                anchor3={anchor3}
                anchor4={anchor4}
                anchor5={anchor5}
                anchor6={anchor6}
            />
            {/* Text */}
            <Grid item container direction="column" className="limbText">
                <Grid item container direction="row" className="panel p1disp" id={`${anchor1}`}>
                    <Box item="true" xs={1} sm={2} mx={5} className="line line-1"></Box>
                    <Grid item xs={8} sm={5} container direction="column" className="p1text" justify="center">
                        <Box className="chapterTitle1 p1Title">{p1Title}</Box>
                        <Box className="chapterText1 p1Text" py={2} pr={3}>{p1Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="panel p2disp" id={`${anchor2}`}>
                    <Box item="true" xs={1} sm={2} mx={5} className="line line-2"></Box>
                    <Grid item xs={8} sm={10} md={10} lg={5} container direction="column" className="p2text" justify="center">
                        <Box className="chapterTitle p2Title">{p2Title}</Box>
                        <Box className="chapterText p2Text" py={1} pr={3}>{p2Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="panel p3disp" id={`${anchor3}`}>
                    <Box item="true" xs={1} sm={2} mx={5} className="line line-3"></Box>
                    <Grid item xs={8} sm={10} md={5} lg={5} container direction="column" className="p3text" justify="center">
                        <Box className="chapterTitle p3Title">{p3Title}</Box>
                        <Box className="chapterText p3Text" py={1} pr={3}>{p3Text}</Box>
                    </Grid>
                    <Grid item lg={1}></Grid>
                    <Grid item md={5} lg={4} container direction="column" className="p3hover" justify="start">
                        <Box className="hoverProsth">Hover over a prosthetic to learn more</Box>
                        <Box className="textHover" id="prosth1" py={2}> <span className="dateHover">The Middle Ages</span> <br />The use of wooden or “peg” legs and hooked metal hands by seafaring men began to appear, as these materials were readily available on ships.</Box>
                        <Box className="textHover" id="prosth2" py={2} ><span className="dateHover">Late 17th century</span> <br /> Pieter Verduyn, a Dutch surgeon, created a prosthesis for the lower leg that incorporated unique hinges for articulation and movement, as well as a leather cuff that provided an improved method of attachment to the leg.</Box>
                        <Box className="textHover " id="prosth3" py={2} ><span className="dateHover">1800 </span><br />Londoner James Potts invented an above-knee prosthetic with a calf and thigh socket made of wood, and a flexible foot attached with catgut tendons to a steel knee joint. This design was not only more articulate than precious prosthetics but was considered more aesthetically pleasing.</Box>
                        <Box className="textHover " id="prosth4" py={2} ><span className="dateHover">1918 </span><br />Made for someone who had their leg amputated above the knee, this unusual metal skeleton-like structure is known as a ‘Bird Cage’ design. This design was intended to be both strong and lightweight. The socket of the leg is made from certalmid, a material designed for prosthetic limbs during the First World War and used for many years afterwards.</Box>
                        <Box className="textHover " id="prosth5" py={2} ><span className="dateHover">1863-1945 </span><br />During the times of the American Civil War, prosthetics transformed from wooden pieces to cosmetic rubber. However, following World War II, most prosthetics were made from a combination of leather and wood.</Box>
                        <Box className="textHover " id="prosth6" py={2} ><span className="dateHover">1970-1990 </span><br />Plastics, polycarbonates, laminates and resins were used in prosthetics as they were extremely light weight and easy to clean. Carbon fibre was beginning to be used as it was also lightweight. At this time, prosthetics were custom fitted for each patient to create a comfortable individualized fit.</Box>
                        <Box className="textHover " id="prosth7" py={2}><span className="dateHover">Today</span><br />In the early 2000s, the idea of high-performance prosthetics was brought to life. Using carbon fiber and wealth of advanced technology, developers were able to create prosthetics that are motorized and adaptable to any terrain and activity.</Box>
                    </Grid>

                    <Grid item className="p3hoversmall" justify="start">
                        <Box className="hoverProsthsmall">Hover over a prosthetic to learn more</Box>
                        <Box className="textHover" id="prosth1" py={2}> <span className="dateHover">The Middle Ages</span> <br />The use of wooden or “peg” legs and hooked metal hands by seafaring men began to appear, as these materials were readily available on ships.</Box>
                        <Box className="textHover" id="prosth2" py={2} ><span className="dateHover">Late 17th century</span> <br /> Pieter Verduyn, a Dutch surgeon, created a prosthesis for the lower leg that incorporated unique hinges for articulation and movement, as well as a leather cuff that provided an improved method of attachment to the leg.</Box>
                        <Box className="textHover " id="prosth3" py={2} ><span className="dateHover">1800 </span><br />Londoner James Potts invented an above-knee prosthetic with a calf and thigh socket made of wood, and a flexible foot attached with catgut tendons to a steel knee joint. This design was not only more articulate than precious prosthetics but was considered more aesthetically pleasing.</Box>
                        <Box className="textHover " id="prosth4" py={2} ><span className="dateHover">1918 </span><br />Made for someone who had their leg amputated above the knee, this unusual metal skeleton-like structure is known as a ‘Bird Cage’ design. This design was intended to be both strong and lightweight. The socket of the leg is made from certalmid, a material designed for prosthetic limbs during the First World War and used for many years afterwards.</Box>
                        <Box className="textHover " id="prosth5" py={2} ><span className="dateHover">1863-1945 </span><br />During the times of the American Civil War, prosthetics transformed from wooden pieces to cosmetic rubber. However, following World War II, most prosthetics were made from a combination of leather and wood.</Box>
                        <Box className="textHover " id="prosth6" py={2} ><span className="dateHover">1970-1990 </span><br />Plastics, polycarbonates, laminates and resins were used in prosthetics as they were extremely light weight and easy to clean. Carbon fibre was beginning to be used as it was also lightweight. At this time, prosthetics were custom fitted for each patient to create a comfortable individualized fit.</Box>
                        <Box className="textHover " id="prosth7" py={2}><span className="dateHover">Today</span><br />In the early 2000s, the idea of high-performance prosthetics was brought to life. Using carbon fiber and wealth of advanced technology, developers were able to create prosthetics that are motorized and adaptable to any terrain and activity.</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="panel p4disp" id={`${anchor4}`}>
                    <Box item="true" xs={1} sm={2} mx={5} className="line line-4"></Box>
                    <Grid item xs={8} sm={10} md={4} lg={5} container direction="column" className="p4text" justify="center">
                        <Box className="chapterTitle p4Title">{p4Title}</Box>
                        <Box className="chapterText p4Text" py={1} pr={3}>{p4Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="panel p5disp" id={`${anchor5}`}>
                    <Box item="true" xs={1} sm={2}mx={5} className="line line-5"></Box>
                    <Grid item xs={8} sm={10} md={7} lg={5} container direction="column" className="p5text" justify="center">
                        <Box className="chapterTitle p5Title">{p5Title}</Box>
                        <Box className="chapterText p5Text" py={1} pr={3}>{p5Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="panel p6disp" id={`${anchor6}`}>
                    <Box item="true" xs={1} sm={2} mx={5} className="line line-6"></Box>
                    <Grid item xs={8} sm={10} md={10} lg={5} container direction="column" className="p6text" justify="center">
                        <Box className="chapterTitle p6Title">{p6Title}</Box>
                        <Box className="chapterText p6Text" py={1} pr={3}>{p6Text}</Box>
                    </Grid>
                </Grid>
            </Grid>

        </Box>

    )
}

export default Limb;