import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import Apt from "../Apt/Apt";
import styles from "../../styles/DigitalExp.module.css";

const Apartments = () => {
  const apartments = [
    {
      id: 1,
      img: "/assets/imgs/house1.png",
      type: "2 bedrooms",
      time: "5 min ago",
      title: "Lorem Ipsum",
    },
    {
      id: 2,
      img: "/assets/imgs/house2.png",
      type: "2 bedrooms",
      time: "5 min ago",
      title: "Lorem Ipsum",
    },
    {
      id: 3,
      img: "/assets/imgs/house3.png",
      type: "2 bedrooms",
      time: "5 min ago",
      title: "Lorem Ipsum",
    },
    {
      id: 4,
      img: "/assets/imgs/house4.png",
      type: "2 bedrooms",
      time: "5 min ago",
      title: "Lorem Ipsum",
    },
    {
      id: 5,
      img: "/assets/imgs/house5.png",
      type: "2 bedrooms",
      time: "5 min ago",
      title: "Lorem Ipsum",
    },
  ];
  return (
    <Box component="div">
      <Typography
        variant="h1"
        className={styles.h1}
        sx={{ justifyContent: "center", margin: "10px 0 50px 0" }}
      >
        {" "}
        latest added properties
      </Typography>
      <Grid
        container
        sx={{ padding: "0 20px", justifyContent: "center" }}
        spacing={3}
      >
        {apartments.map((apt) => {
          return <Apt key={apt.id} apt={apt} />;
        })}
      </Grid>
    </Box>
  );
};

export default Apartments;
