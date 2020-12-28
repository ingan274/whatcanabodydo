import React, { useState, useEffect } from "react";
import "./style.css";
import "./style_1025-1622.css";
import "./style_812-1024.css";
import "./style_668-811.css";
import "./style_375-667.css";
import { Grid, Box } from '@material-ui/core';
// import { gsap } from "gsap";
import Background from "../../Component/Street";
import DotNav from "../../Component/DotNav";

const Street = (props) => {
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
    })

    return (
        <Box className="chapter streethap">
            {/* Images */}
            <Box className="streetBack">
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
            <Grid item containerdirection="column" className="streetText">
                <Grid item container direction="row" className="streetpanel p1disp" id={`${anchor1}`} >
                    <Grid item xs={10} sm={8} md={6} container direction="column" className="streetp1" justify="center">
                        <Box className="chapterTitle1 p1streetTitle streetMobile">{p1Title}</Box>
                        <Box className="chapterText1 p1streetText streetMobile" py={2} pr={3}>{p1Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="streetpanel p2disp" justify="center" id={`${anchor2}`}>
                    <Grid item xs={9} sm={8} md={10} lg={7} container direction="column" className="p2streettext" justify="center">
                        <Box className="chapterTitle p2streetTitle streetMobile">{p2Title}</Box>
                        <Box className="chapterText p2streetText streetMobile" py={1} pr={3}>{p2Text}</Box>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="streetpanel streetp3Box p3disp" justify="center" id={`${anchor3}`}>
                    <Grid item  xs={11} sm={10} md={8} lg={6} container direction="column" className="p3streettext" justify="center">
                        <Grid item className="chapterTitle p3streetTitle streetp3 streetMobile">{p3Title}</Grid>
                        <Grid item className="chapterText p3streetText streetp3 streetMobile" py={1} pr={3}>{p3Text}</Grid>
                    </Grid>
                </Grid>

                <Grid item container direction="row" className="streetpanel p4disp" id={`${anchor4}`}>
                    <Grid item xs={1} sm={1} md={1} g={3}></Grid>
                    <Grid item xs={10} sm={10} md={10} lg={6} container direction="column" className="p4street" justify="center">
                        <Box className="chapterTitle p4streetTitle streetMobile">{p4Title}</Box>
                        <Box className="chapterText p4streetText streetMobile" py={1} pr={3}>{p4Text}</Box>
                    </Grid>
                    <Grid item xs={1}sm={1} md={1} lg={3}></Grid>
                </Grid>

                <Grid item container direction="row" className="streetpanel p5disp" justify="center" id={`${anchor5}`}>
                    <Grid item xs={1}sm={1} md={1} lg={1}></Grid>
                    <Grid item xs={10}sm={6} md={5} lg={6} container direction="column" className="p5streettext" justify="center">
                        <Box className="chapterTitle p5streetTitle streetMobile">{p5Title}</Box>
                        <Box className="chapterText p5streetText streetMobile" py={1}>{p5Text}</Box>
                    </Grid>
                    <Grid item xs={1} sm={5} md={6} lg={5}></Grid>
                </Grid>

                <Grid item container direction="row" className="streetpanel p6disp" justify="center" id={`${anchor6}`}>
                    <Grid item xs={2} sm={1} md={1} lg={1}></Grid>
                    <Grid item xs={9}sm={6} md={5} lg={6} container direction="column" className="p6street">
                        <Box className="chapterTitle p6streetTitle streetMobile">{p6Title}</Box>
                        <Box className="chapterText p6streetText streetMobile" py={1} pr={3}>{p6Text}</Box>
                    </Grid>
                    <Grid item xs={1}sm={5} md={6} lg={5}></Grid>
                </Grid>
            </Grid>

        </Box>

    )
}

export default Street;