import React, { useState, useEffect } from "react";
import "./style.css";
import "./style_1025-1622.css";
import "./style_812-1024.css";
import "./style_668-811.css";
import "./style_375-667.css";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Background from "../../Component/Chair";
import DotNav from "../../Component/DotNav";
gsap.registerPlugin(ScrollTrigger);

const Chair = (props) => {
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
        gsap.fromTo("#ada3-rocking", {rotation:-10, transformOrigin:"center center", ease: "power1"}, {rotation: 2, ease: "power1"}).yoyo(true).repeat(100).timeScale(.1);    
    })

    return (
        <Box className="chapter limbchap">
            {/* Images */}
            <Box className="chairBack">
                <Background />
            </Box >

            <DotNav 
            section1= {p1Title}
            section2= {p2Title}
            section3= {p3Title}
            section4= {p4Title}
            section5= {p5Title}
            section6= {p6Title}
            anchor1={anchor1}
            anchor2={anchor2}
            anchor3={anchor3}
            anchor4={anchor4}
            anchor5={anchor5}
            anchor6={anchor6}
            />

            {/* Text */}
            <Grid item containerdirection="column" className="chairText">
                <Grid item container direction="row" className="chairpanel p1disp" id={`${anchor1}`}>
                    <Grid lg={3}></Grid>
                    <Grid item md={12} lg={5} container direction="column">
                        <Box className="chapterTitle1 p1ChairTitle">{p1Title}</Box>
                        <Box className="chapterText1 p1ChairText" py={2} pr={3}>{p1Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="chairpanel p2disp" justify="center" id={`${anchor2}`}>
                    <Grid item xs={10} sm={6} md={6} lg={5} container direction="column" className="p2Chairtext" justify="center">
                        <Box className="chapterTitle p2ChairTitle">{p2Title}</Box>
                        <Box className="chapterText p2ChairText " py={1} pr={3}>{p2Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="chairpanel chairp3Box p3disp" id={`${anchor3}`}>
                    <Grid item sm={12} md={3} lg={3} container direction="column" justify="center" className="chapterTitle p3ChairTitle chairp3">{p3Title}</Grid>
                    <Grid item lg={6}></Grid>
                    <Grid item sm={12} md={9} lg={3} container direction="column" justify="center" className="chapterText p3ChairText chairp3" py={1} pr={3}>{p3Text}</Grid>
                </Grid>

                <Grid item container direction="row" className="chairpanel p4disp" id={`${anchor4}`}>
                    <Grid item sm={6} md={6}></Grid>
                    <Grid item xs={12} sm={6} container direction="column" className="p4text" justify="center">
                        <Box className="chapterTitle p4ChairTitle">{p4Title}</Box>
                        <Box className="chapterText p4ChairText" py={1} pr={3}>{p4Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="chairpanel p5disp" id={`${anchor5}`}>
                    <Grid item xs={12} sm={10} md={7} container direction="column" className="p5text">
                        <Box className="chapterTitle p5ChairTitle">{p5Title}</Box>
                        <Box className="chapterText p5ChairText" py={1}>{p5Text}</Box>
                        <Box id="adalink" pt={3} ><a href="https://www.adaptivedesign.org/">Check out More of Adaptive Design Asssociation</a></Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="chairpanel p6disp" justify="center" id={`${anchor6}`}>
                    <Grid item sm={10} md={5} container direction="column" className="p6text" justify="center">
                        <Box className="chapterTitle p6ChairTitle">{p6Title}</Box>
                        <Box className="chapterText p6ChairText" py={1} pr={3}>{p6Text}</Box>
                    </Grid>
                </Grid>
            </Grid>

        </Box>

    )
}

export default Chair;