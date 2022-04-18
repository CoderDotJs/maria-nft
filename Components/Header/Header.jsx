import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <Box className={`${styles.nav} container`}>
          <Box component="div" className={styles.logo}>
            Logo
          </Box>
          <Box component="div">
            <nav aria-label="navbar">
              <ul className={styles.nav__list}>
                <li className={styles.nav__list__item}>Home</li>
                <li className={styles.nav__list__item}>About</li>
                <li className={styles.nav__list__item}>Roadmap</li>
                <li className={styles.nav__list__item}>FAQ</li>
                <li className={styles.nav__list__item}>Our Team</li>
              </ul>
            </nav>
          </Box>
          <Box component="div">
            <ul className={styles.nav__list}>
              <li className={styles.nav__list__item}>Login/Signup</li>
              <button className={`${styles.nav__list__item} gradient__btn`}>
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAApUlEQVRYhe2VWwrDIBBFYxdhpVtMlhtqu5rTn4HehkYkagNlDvijMvf4QKfJcRrAaKlx6SXjAi7gAi7w3wLADKTaokAC5uNan8UWe/LzVuLbX2Dh2YaWHgIRWK3gE7jtCQBXmfvQuUMkVGBYeEmCN2PDRULPN4uA9lVf1qMSuhPKuJVXSPwuXCQScLc2dtsLEhGIp4T3IpQG9ZFpCglhN+f0z8hxXl7DLU2Z2HTvAAAAAElFTkSuQmCC"
                  alt="metamask"
                  width={20}
                  height={20}
                />
                Metamask
              </button>
            </ul>
          </Box>
        </Box>
      </header>
    </>
  );
};

export default Header;
