import React, { useEffect } from "react";
import { Grid, Box } from '@material-ui/core';
import "./style.css";

const ChapterNav = (props) => {
    const hoverDot = (id, element) => {
        document.getElementById(`${id}`).addEventListener('mouseenter', () => {
            document.getElementById(`${element}`).style.display = "block";
        })

        document.getElementById(`${id}`).addEventListener('mouseleave', () => {
            document.getElementById(`${element}`).style.display = "none"
        })
    }

    useEffect(() => {
        hoverDot("section1Dot", "section1");
        hoverDot("section2Dot", "section2");
        hoverDot("section3Dot", "section3");
        hoverDot("section4Dot", "section4");
        hoverDot("section5Dot", "section5");
        hoverDot("section6Dot", "section6");
    })

    return (
        <Box pl={2} className="dot-nav">
            <Grid container direction="column">
                <a href={`#${props.anchor1}`}>
                    <Grid item container direction="row" className="dotNav" id="section1Dot">
                        <Grid className="dot">1</Grid>
                        <Grid className="dotText" id="section1">{props.section1}</Grid>
                    </Grid>
                </a>
                <a href={`#${props.anchor2}`}>
                    <Grid item container direction="row" className="dotNav" id="section2Dot">
                        <Grid className="dot ">2</Grid>
                        <Grid className="dotText" id="section2">{props.section2}</Grid>
                    </Grid>
                </a>
                <a href={`#${props.anchor3}`}>
                    <Grid item container direction="row" className="dotNav" id="section3Dot">
                        <Grid className="dot ">3</Grid>
                        <Grid className="dotText" id="section3">{props.section3}</Grid>
                    </Grid>
                </a>
                <a href={`#${props.anchor4}`}>
                    <Grid item container direction="row" className="dotNav" id="section4Dot">
                        <Grid className="dot ">4</Grid>
                        <Grid className="dotText" id="section4">{props.section4}</Grid>
                    </Grid>
                </a>
                <a href={`#${props.anchor5}`}>
                    <Grid item container direction="row" className="dotNav" id="section5Dot">
                        <Grid className="dot ">5</Grid>
                        <Grid className="dotText" id="section5">{props.section5}</Grid>
                    </Grid>
                </a>
                <a href={`#${props.anchor6}`}>
                    <Grid item container direction="row" className="dotNav" id="section6Dot">
                        <Grid className="dot ">6</Grid>
                        <Grid className="dotText" id="section6">{props.section6}</Grid>
                    </Grid>
                </a>
            </Grid>
        </Box>
    )
}

export default ChapterNav;