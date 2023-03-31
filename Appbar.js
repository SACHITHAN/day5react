import React from "react";
import { AppBar,Toolbar,Typography } from "@mui/material";

export default function Appbar(){
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h5">My Store</Typography>
            </Toolbar>
        </AppBar>
    );
}