import { Box } from "@mui/system";
import React from "react";
import TopSub from "../TopSub/TopSub";
import styles from "../../styles/Roadmap.module.css";
import { Grid } from "@mui/material";

const RoadMap = () => {
  return (
    <>
      <Box component="div" sx={{ height: "100vh" }}>
        <Box component="div">
          <TopSub both={true} align="center" text="ROADMAP" />
          <h1 className={styles.h1}>Kidz roadmap</h1>
          <p className={styles.p}>
            Your creativity and community engagement will be a big part of our
            roadmap.
          </p>
        </Box>

        <Box component="div" className="container">
          <Box component="div" className={styles.roadmap__line}>
            <Box component="div" className={styles.timeline}>
              <Grid container>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: " center",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" className={styles.timeline__count}>
                    <span>10%</span>
                  </Box>
                  <Box component="div" className={styles.timeline__desc}>
                    <h2 className={styles.h2}>Tincidunt id condimentum</h2>
                    <p className={styles.p}>
                      Arcu sed eget enim senectus facilisi lectus nisl.
                      Fermentum, pharetra blandit porttitor amet, tortor
                      bibendum.
                    </p>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: " center",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" className={styles.timeline__count}>
                    <span>20%</span>
                  </Box>
                  <Box component="div" className={styles.timeline__desc}>
                    <h2 className={styles.h2}>Tincidunt id condimentum</h2>
                    <p className={styles.p}>
                      Arcu sed eget enim senectus facilisi lectus nisl.
                      Fermentum, pharetra blandit porttitor amet, tortor
                      bibendum.
                    </p>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: " center",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" className={styles.timeline__count}>
                    <span>40%</span>
                  </Box>
                  <Box component="div" className={styles.timeline__desc}>
                    <h2 className={styles.h2}>Tincidunt id condimentum</h2>
                    <p className={styles.p}>
                      Arcu sed eget enim senectus facilisi lectus nisl.
                      Fermentum, pharetra blandit porttitor amet, tortor
                      bibendum.
                    </p>
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: " center",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" className={styles.timeline__count__2}>
                    <span>10%</span>
                  </Box>
                  <Box component="div" className={styles.timeline__desc__2}>
                    <h2 className={styles.h2}>Tincidunt id condimentum</h2>
                    <p className={styles.p}>
                      Arcu sed eget enim senectus facilisi lectus nisl.
                      Fermentum, pharetra blandit porttitor amet, tortor
                      bibendum.
                    </p>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: " center",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" className={styles.timeline__count__2}>
                    <span>20%</span>
                  </Box>
                  <Box component="div" className={styles.timeline__desc__2}>
                    <h2 className={styles.h2}>Tincidunt id condimentum</h2>
                    <p className={styles.p}>
                      Arcu sed eget enim senectus facilisi lectus nisl.
                      Fermentum, pharetra blandit porttitor amet, tortor
                      bibendum.
                    </p>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: " center",
                    alignItems: "center",
                  }}
                >
                  <Box component="div" className={styles.timeline__count__2}>
                    <span>40%</span>
                  </Box>
                  <Box component="div" className={styles.timeline__desc__2}>
                    <h2 className={styles.h2}>Tincidunt id condimentum</h2>
                    <p className={styles.p}>
                      Arcu sed eget enim senectus facilisi lectus nisl.
                      Fermentum, pharetra blandit porttitor amet, tortor
                      bibendum.
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RoadMap;
