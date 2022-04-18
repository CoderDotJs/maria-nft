import { Box } from "@mui/system";
import React from "react";
import styles from "../../styles/About.module.css";
import TopSub from "../TopSub/TopSub";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Box component="div" style={{ margin: "10px auto" }}>
        <TopSub both={true} text="ABOUT" align="center" />
        <h1 className={styles.h1}>
          Bring the Metaverse to <br /> <span>life with NFTs</span>
        </h1>
        <p className={styles.p}>
          6,000 NFTs that give you creative control over Property's world.
          <br /> Own assets that make your world more colorful and fun.
        </p>
        <Box component="div" className={styles.nfts}>
          <Image
            src="/assets/imgs/left_nft.png"
            alt="nft"
            width={285}
            height={285}
          />
          <Image
            src="/assets/imgs/middle_nft.png"
            alt="nft"
            width={414}
            height={414}
          />
          <Image
            src="/assets/imgs/right_nft.png"
            alt="nft"
            width={285}
            height={285}
          />
        </Box>
        <p className={styles.p}>Join the lorem nft community</p>
        <button
          className={`gradient__btn`}
          style={{ display: "block", margin: "0 auto" }}
        >
          Join Discord
        </button>
      </Box>
    </>
  );
};

export default About;
