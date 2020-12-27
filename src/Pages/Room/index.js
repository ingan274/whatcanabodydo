import React, { useState, useEffect } from "react";
import "./style.css";
import "./style_1025-1622.css";
import "./style_812-1024.css";
import "./style_668-811.css";
import "./style_375-667.css";
import { Grid, Box } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { gsap } from "gsap";
import Background from "../../Component/Room";
import Foreground from "../../Component/RoomAbove";
import DotNav from "../../Component/DotNav";

const Room = (props) => {
    const [p1Title] = useState(props.page.p1.title);
    const [p1Text] = useState(props.page.p1.text);
    const [p2Title] = useState(props.page.p2.title);
    const [p2Text] = useState(props.page.p2.text);
    const [p3Title] = useState(props.page.p3.title);
    const [p3Text] = useState(props.page.p3.text);
    const [p4Title] = useState(props.page.p4.title);
    const [p4Text1] = useState(props.page.p4.text1);
    const [p4Text2] = useState(props.page.p4.text2);
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
        
        gsap.to("#spiral", {
            rotation: "360",
            transformOrigin: "center center",
            ease: "power1.out",
            repeat: -1,
            duration: 60
        })

        gsap.fromTo("#interdepedence", {rotation:-8, transformOrigin:"center center", ease: "power1.out"}, {rotation: 8, ease: "power1.out"}).yoyo(true).repeat(1000).timeScale(.07); 
    })

    return (
        <Box className="chapter roomchap">
            {/* Images */}
            <Box className="roomBack">
                <Background />
            </Box >
            <Box className="roomFront">
                <Foreground />
            </Box >

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
            <Grid item containerdirection="column" className="roomText">
                <Grid item container direction="row" className="roompanel p1disp" id={`${anchor1}`}>
                    <Grid item xs={9} md={8} lg={6} container direction="column" className="roomp1">
                        <Box className="chapterTitle1 p1roomTitle">{p1Title}</Box>
                        <Box className="chapterText1 p1roomText" py={2} pr={3}>{p1Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="roompanel p2disp" justify="center" id={`${anchor2}`}>
                    <Grid item lg={7}></Grid>
                    <Grid item xs={12} lg={5} container direction="column" className="p2roomtext" justify="center">
                        <Box className="chapterTitle p2roomTitle">{p2Title}</Box>
                        <Box className="chapterText p2roomText " py={1} pr={3}>{p2Text}</Box>
                        <Grid container direction="row">
                            <ArrowBackRoundedIcon className="arrow" id="arrowsmall"/>
                            <Box id="hover360"> Hover over the text to discover the different ways assist in 360 Communication</Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="roompanel roomp3Box p3disp" justify="center" id={`${anchor3}`}>
                    <Grid item xs={12} lg={6} container direction="column" className="p3roomtext">
                        <Grid item className="chapterTitle p3roomTitle roomp3">{p3Title}</Grid>
                        <Grid item className="chapterText p3roomText roomp3" py={1} pr={3}>{p3Text}</Grid>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="roompanel p4disp" id={`${anchor4}`}>
                    <Grid item lg={3}></Grid>
                    <Grid item xs={12} lg={6} container direction="column" className="p4roomtext" justify="center">
                        <Box className="chapterTitle p4roomTitle">{p4Title}</Box>
                        <Box className="chapterText p4roomText1" py={1} pr={3}>{p4Text1}</Box>
                        <Box className="chapterText p4roomText2" py={1} pr={3}>{p4Text2}</Box>
                    </Grid>
                    <Grid item lg={3}></Grid>
                </Grid>

                <Grid item container direction="row" className="roompanel p5disp" justify="center" id={`${anchor5}`}>
                    <Grid item xs={12} lg={6} container direction="column" className="p5roomtext">
                        <Box className="chapterTitle p5roomTitle">{p5Title}</Box>
                        <Box className="chapterText p5roomText" py={1}>{p5Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="roompanel p6disp" justify="center" id={`${anchor6}`}>
                    <Grid item xs={12} lg={7} container direction="column" className="p6roomtext">
                        <Box className="chapterTitle p6roomTitle">{p6Title}</Box>
                        <Box className="chapterText p6roomText" py={1} pr={3}>{p6Text}</Box>
                    </Grid>
                </Grid>
            </Grid>

        </Box>

    )
}

export default Room;