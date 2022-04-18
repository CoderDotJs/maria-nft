import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Apt.module.css";

const Apt = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Box component="div">
        <Box className={styles.img__box}>
          <Image
            src="/assets/imgs/dg_main.png"
            alt="adf"
            width={300}
            height={240}
            layout="responsive"
          />
          <Box className={styles.sub}>
            <Typography variant="h4">2 bedrooms</Typography>
            <Typography variant="h4">5 min ago</Typography>
          </Box>
        </Box>
        <Typography variant="h4" className={styles.h4}>
          Lorem Ipsum
        </Typography>
      </Box>
    </Grid>
  );
};

export default Apt;
