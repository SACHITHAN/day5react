import { Container, Grid, Typography } from "@mui/material";
import React from "react";

import './App.css';

function Product() {
  return (
    <Container sx={{ marginY: 15 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={3}>
          <img
            className="img"
            src="https://images.pexels.com/photos/6174869/pexels-photo-6174869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Typography>Product-title</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <img
            className="img"
            src="https://images.pexels.com/photos/6174869/pexels-photo-6174869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="ramdan-img"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            className="img"
            src="https://images.pexels.com/photos/6174869/pexels-photo-6174869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="ramdan-img"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            className="img"
            src="https://images.pexels.com/photos/6174869/pexels-photo-6174869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="ramdan-img"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
export default Product;