import React from "react";
import { Box } from '@material-ui/core';

const Container = props => {
    return (
        <Box id="container" >
           {props.children}
        </Box>
    )
}

export default Container;
