import React, { useState, useEffect } from "react";
import {
    Link,
} from "react-router-dom";
import "./style.css";
import "./style_1025-1622.css";
import "./style_812-1024.css";
import "./style_668-811.css";
import "./style_375-667.css";
import { Grid, Box } from '@material-ui/core';
import { gsap } from "gsap";
import Buildings from "../../Component/Home";

const Home = (props) => {
    // console.log(props.home.p1.p1)
    const [p1Title] = useState(props.home.title);
    const [p1Subtitle] = useState(props.home.subtitle);
    const [p1Text1] = useState(props.home.p1);
    const [p1Text2] = useState(props.home.p2);
    const [p1Text3] = useState(props.home.p3);
    const [chapters] = useState(props.home.chapterTitles);

    useEffect(() => {
        gsap.fromTo("#city-front", { y: 200 }, { y: 0, duration: 1 });
        gsap.fromTo("#city-middle", { y: 700 }, { y: 0, duration: 1.5 });
        gsap.fromTo("#city-back", { y: 1000 }, { y: 0, duration: 2 });
    })

    return (
        <Box id="main" className="main-container">
            {/* Images */}
            <Box className="home-buildings">
                <Buildings />
            </Box>
            {/* Text */}
            <Grid item container direction="row" className="hpage">
                <Grid item container direction="column" xs={12} s={12} md={12} lg={6} className="mainText">
                    <Grid item container direction="column" className="introText home_p1 lText" justify="center">
                        <Box className="title" >{p1Title}</Box>
                        <Box className="subTitle" >{p1Subtitle}</Box>
                        <Box className="introP" my={1} >{p1Text1}</Box>
                        <Box className="introP" my={1} >{p1Text2}</Box>
                        <Box className="introP " my={1} >{p1Text3}</Box>
                        <Box className="scroll" my={1}>scroll down to explore</Box>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={12} s={12} md={12} lg={6} className="rContent chapterList" align="center" justify="center" >
                    <Box id="selectChap">Choose a chapter to explore:</Box>
                    <Grid item container direction="column" >
                        {chapters.map((chapter, index) => (
                            <Link to={`/${chapter}`}
                                className="homeChapterLinks"
                                key={index.toString()}>
                                {chapter}.
                            </Link>
                        ))}
                    </Grid>
                </Grid>
            </Grid>


        </Box>

    )
}

export default Home;