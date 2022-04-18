import { Box } from "@mui/system";
import React from "react";
import TopSub from "../TopSub/TopSub";
import styles from "../../styles/Roadmap.module.css";

const RoadMap = () => {
  return (
    <>
      <Box component="div">
        <Box component="div">
          <TopSub both={true} align="center" text="ROADMAP" />
          <h1 className={styles.h1}>Kidz roadmap</h1>
          <p className={styles.p}>
            Your creativity and community engagement will be a big part of our
            roadmap.
          </p>
        </Box>
      </Box>
    </>
  );
};

export default RoadMap;
