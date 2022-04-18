import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Team.module.css";

const TeamMember = ({ team }) => {
  return (
    <Grid item xs={12} md={3}>
      <Box
        component="div"
        sx={
          {
            //   display: "flex",
            //   flexDirection: "column",
            //   justifyContent: "center",
            //   alignItems: "center",
          }
        }
      >
        <Image
          src={team.img}
          alt={team.name}
          width={280}
          height={240}
          layout="responsive"
        />
        <Typography variant="h4" className={styles.name}>
          {team.name}
        </Typography>
        <Typography variant="body2" className={styles.job}>
          {team.role}
        </Typography>
        <Box component="div" className={styles.icons}>
          <a href={team.discord} target="_blank" rel="noreferrer">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABwElEQVRIie3WPWtUQRQG4CcmCKIGP0jUdGo0hRHTiBKItiKCBgz+A7FNqbWIhb9A/4PYSBArbfwBihjXD5RoIYIWCxISXIs7y07GO3vvumsT8sKBuXPec96Zd+4XW9jsGK7J24EZHMXnDGcO4/iJtX4WNY5FvMA6WqHhwQx3LXDWQ81imK+NYdxEMzRKo4H3Id8M4+UMt4lbajp7L9Okn7hbJTqpY9kgYxWHY6FtifANjFSt7h+wHddzyRF8NfjdtuOLzFlf/I+i7bjQFoutvpqzYoBYKJt8J7/SjziNE8ofnUbITVf0aaSiE13ILcxH3PmS/OUof6Wi16FY+FoFeW/E3V+S3xPl91X0WqBzxrOpBQla0fh3SX4owy3DbCx8rII8F43PVeTPV/Q6Hl+80d2et7rfPHVvrhZex8LfK8iDjG90rN7VxZq+vq0l2B0Lv8qQlrATp3AHT/EBP8KCVhVuLeMxbuOs4il4num5QWtS8WeR2vISYz3viQOhNu33CUdS8gQelZB/4RlO1hCctvGPJY6HkpdHijN4gJWo6Im/P6FlGFIcT7tuBfcVr9ueMIVLGO2hZjTUTPUqtoXNhT/l9R9RbwgghgAAAABJRU5ErkJggg=="
              alt="discord"
              width={20}
              height={20}
            />
          </a>
          <a href={team.insta} target="_blank" rel="noreferrer">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABe0lEQVRIie2WPUoDQRTHf9qaYJOk0jqFgjGFUcQjCBo8hjlE8ARRcwhDwMLKwiNoLqGdyu6aIimiFvMWhiE7H+wIFvnDY7O8j9+82TdDYKV/oAZwBUyAKfDjaVPgRXLrodALIAuAFVkKdEOg3xGguS184I1InZqWYGz7ugHuAVXX6jx0DJxo75vApQ18GgGa110Lqe3a5hkwADrAhlgHuAHmjtzMBrYlvgJ7ltyWxNhqBINnGnQbGEsHGXAPNMW37+g8GDzQoB9L/J/iA7iNCT4Q/9gSM5KYw5jgivhtw5dKTNUHbB6nMrJ2ZMoXvCPPJ0vMozx3QxaQq2iLrsXfRA2S6X8HtiRmaKkTDJ6hzimo6R2hvmkK3GnQNpGPU36BtIpTaQNvjhqFcl2Zc9T1eISa9Ir8Hjo61ad+qSaO5DL2rIPMqX6wraqkrLXrqC2J3W0C1Fwr66L+rsSCLoAzF1SHJ5E6PfeF5qoBfdRQfAXAMsnp47G9K/25fgH7R22w5ouqlAAAAABJRU5ErkJggg=="
              alt="instagram"
              width={20}
              height={20}
            />
          </a>
          <a href={team.twitter} target="_blank" rel="noreferrer">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABjElEQVRIie3Wv0vVURjH8ZdKEojYD9ocHTTE1RYTIxAy3ARRaBcM+hfEWaJoaysaxEGJWhpadBSHEBx0KYWWCkJIM38N537hcvvec7/n3tuSfuDZzvm8z/OcH8/hUv+7WprkcxUPMYAzfMJ7HFaMa8dRnsFtXEuEjmC3BCyPzxjGDUzjAzqrmbzCamxAhe7gIAeaxRGOcYopkQpvliaso7sAeCMCzeIUy1jA42pG22UTvmEyAu0rAC2PJbRVM1vJmbCKB/4u03gC9CVaI0lEzb7gGSZK2Y4lgCdiULiC1wmGRWO4ElSZ/oZwGL7XWmGivtYa8E7zs90XHo6oRv8B+G0taKb5JoNnioLhEfaaAP2hyiuYd7daMYQt/E5ZbY6eC3tcWE80nu0erqeutAUvGoCe4F4qtFz3hVOZ1/ZiMdcINFMv1hKgTzXwwegQ7vQi/hQEHoq0vZiGhO/KjtDAU0r7Ef31QDN1YVb4CNSC/cQb3K0HFNuLWxhED24KneuXcE02hYZyXA/0UhdD5+q+K5z2ztKIAAAAAElFTkSuQmCC"
              alt="twitter"
              width={20}
              height={20}
            />
          </a>
        </Box>
      </Box>
    </Grid>
  );
};

export default TeamMember;
