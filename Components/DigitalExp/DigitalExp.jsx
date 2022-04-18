import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import TopSub from "../TopSub/TopSub";
import styles from "../../styles/DigitalExp.module.css";

const DigitalExp = () => {
  const [img, setImg] = useState("/assets/imgs/dg_main.png");
  return (
    <>
      <Box component="div" className={`${styles.dg__exp}`}>
        <Box component="div" className={`container`}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <Image
                    src={img}
                    alt="nft"
                    width={700}
                    height={550}
                    layout="responsive"
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={4}
                  sx={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <Image
                    src="/assets/imgs/dg_1.png"
                    alt="nft"
                    width={170}
                    height={120}
                    layout="responsive"
                    onClick={() => setImg("/assets/imgs/dg_1.png")}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <Image
                    src="/assets/imgs/dg_2.png"
                    alt="nft"
                    width={170}
                    height={120}
                    layout="responsive"
                    onClick={() => setImg("/assets/imgs/dg_2.png")}
                  />
                </Grid>
                <Grid
                  xs={4}
                  item
                  sx={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <Image
                    src="/assets/imgs/dg_3.png"
                    alt="nft"
                    width={170}
                    height={120}
                    layout="responsive"
                    onClick={() => setImg("/assets/imgs/dg_3.png")}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box component="div">
                <TopSub right={true} text={`METAVERSE`} align="left" />
                <h1 className={styles.h1}>Curated Digital Experiences</h1>
                <Box component="div">
                  <Box component="div" className={styles.gradient__border}>
                    <Box component="div" className={styles.inner}>
                      <span className={styles.gradient__circle}></span>
                      <h3 className={styles.h3}>Social & Adventures</h3>
                    </Box>
                    <p className={styles.p}>
                      Meet others and enjoy the metaverse together
                    </p>
                  </Box>
                  <Box component="div">
                    <Box component="div" className={styles.inner}>
                      <span className={styles.gradient__circle}></span>
                      <h3 className={styles.h3}>Gaming & Content</h3>
                    </Box>
                    <p className={styles.p}>
                      Play all the games and even create your own
                    </p>
                  </Box>
                  <Box component="div">
                    <Box component="div" className={styles.inner}>
                      <span className={styles.gradient__circle}></span>
                      <h3 className={styles.h3}>Music & Events</h3>
                    </Box>
                    <p className={styles.p}>
                      Relax and have fun at different events across the world
                    </p>
                  </Box>
                  <Box component="div">
                    <Box component="div" className={styles.inner}>
                      <span className={styles.gradient__circle}></span>
                      <h3 className={styles.h3}>Art & Shopping</h3>
                    </Box>
                    <p className={styles.p}>
                      Admire art and purchase your own to fit your unique look
                    </p>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default DigitalExp;
