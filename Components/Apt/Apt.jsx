import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Apt.module.css";

const Apt = ({ apt }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Box component="div">
        <Box className={styles.img__box}>
          <Image
            src={apt.img}
            alt={apt.name}
            width={300}
            height={240}
            layout="responsive"
          />
          <Box className={styles.sub}>
            <Typography variant="subtitle1">{apt.type}</Typography>
            <Typography variant="subtitle1">{apt.time}</Typography>
          </Box>
        </Box>
        <Typography variant="h4" className={styles.h4}>
          {apt.title}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Apt;
