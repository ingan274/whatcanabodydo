import React, { useState, useEffect } from "react";
import "./style.css";
// import "./style_1025-1622.css";
// import "./style_812-1024.css";
// import "./style_668-811.css";
// import "./style_375-667.css";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import Background from "../../Component/Clock";
import DotNav from "../../Component/DotNav";

const Clock = (props) => {
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
        
        gsap.to("#seconds", {
            rotation: "360",
            transformOrigin: "center center",
            ease: "linear.out",
            repeat: -1,
            duration: 60,
        })

        gsap.to("#minutes", {
            rotation: "-360",
            transformOrigin: "top left",
            ease: "power1.out",
            repeat: -1,
            duration: 100,
        })

        gsap.to("#hours", {
            rotation: "360",
            transformOrigin: "top right",
            ease: "power1.out",
            repeat: -1,
            duration: 120,
        })


    })

    return (
        <Box className="chapter clockhap">
            {/* Images */}
            <Box className="clockBack">
                <Background />
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
            <Grid item containerdirection="column" className="clockText">
                <Grid item container direction="row" className="clockpanel p1disp" id={`${anchor1}`} >
                    <Grid item md={6}></Grid>
                    <Grid item md={5} container direction="column" className="clockp1" justify="center">
                        <Box className="chapterTitle1 p1clockTitle">{p1Title}</Box>
                        <Box className="chapterText1 p1clockText" py={2} pr={3}>{p1Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="clockpanel p2disp" justify="center" id={`${anchor2}`}>
                    <Grid md={1}></Grid>
                    <Grid item md={6} container direction="column" className="p2clocktext" justify="center">
                        <Box className="chapterTitle p2clockTitle">{p2Title}</Box>
                        <Box className="chapterText p2clockText " py={1} pr={3}>{p2Text}</Box>
                    </Grid>
                    <Grid item md={5}></Grid>
                </Grid>

                <Grid item container direction="row" className="clockpanel clockp3Box p3disp" justify="center" id={`${anchor3}`}>
                <Grid md={2}></Grid>
                    <Grid item md={4} container direction="column" className="p3clocktext" justify="center">
                        <Grid item className="chapterTitle p3clockTitle clockp3">{p3Title}</Grid>
                        <Grid item className="chapterText p3clockText clockp3" py={1} pr={3}>{p3Text}</Grid>
                    </Grid>
                    <Grid item md={6}></Grid>
                </Grid>

                <Grid item container direction="row" className="clockpanel p4disp" id={`${anchor4}`}>
                    <Grid item md={2}></Grid>
                    <Grid item md={8} container direction="column" className="p4clock">
                        <Box className="chapterTitle p4clockTitle">{p4Title}</Box>
                        <Box className="chapterText p4clockText" >{p4Text}</Box>
                    </Grid>
                    <Grid item md={2}></Grid>
                </Grid>

                <Grid item container direction="row" className="clockpanel p5disp" justify="center" id={`${anchor5}`}>
                    <Grid item md={5}></Grid>
                    <Grid item md={6} container direction="column" className="p5clocktext" justify="center">
                        <Box className="chapterTitle p5clockTitle">{p5Title}</Box>
                        <Box className="chapterText p5clockText" py={1}>{p5Text}</Box>
                    </Grid>
                    <Grid item md={1}></Grid>
                </Grid>

                <Grid item container direction="row" className="clockpanel p6disp" justify="center" id={`${anchor6}`}>
                    <Grid item md={3}></Grid>
                    <Grid item md={6} container direction="column" className="p6clock">
                        <Box className="chapterTitle p6clockTitle">{p6Title}</Box>
                        <Box className="chapterText p6clockText" py={1} pr={3}>{p6Text}</Box>
                    </Grid>
                    <Grid item md={3}></Grid>
                </Grid>
            </Grid>

        </Box>

    )
}

export default Clock;