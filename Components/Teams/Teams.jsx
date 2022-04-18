import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TeamMember from "../TeamMember/TeamMember";

const Teams = () => {
  const teams = [
    {
      name: "Mark Zukerberg",
      img: "/assets/imgs/user1.png",
      role: "Full Stack Developer",
      discord: "https://discord.com/invite/56905853",
      insta: "https://www.instagram.com/soumya_s_/",
      twitter: "https://twitter.com/soumya_s_",
    },
    {
      name: "Rick Sanchez",
      img: "/assets/imgs/user2.png",
      role: "Full Stack Developer",
      discord: "https://discord.com/invite/56905853",
      insta: "https://www.instagram.com/soumya_s_/",
      twitter: "https://twitter.com/soumya_s_",
    },
    {
      name: "Morty Smith",
      img: "/assets/imgs/user3.png",
      role: "Full Stack Developer",
      discord: "https://discord.com/invite/56905853",
      insta: "https://www.instagram.com/soumya_s_/",
      twitter: "https://twitter.com/soumya_s_",
    },
    {
      name: "Peter Griffin",
      img: "/assets/imgs/user4.png",
      role: "Full Stack Developer",
      discord: "https://discord.com/invite/56905853",
      insta: "https://www.instagram.com/soumya_s_/",
      twitter: "https://twitter.com/soumya_s_",
    },
    {
      name: "Megatron",
      img: "/assets/imgs/user5.png",
      role: "Full Stack Developer",
      discord: "https://discord.com/invite/56905853",
      insta: "https://www.instagram.com/soumya_s_/",
      twitter: "https://twitter.com/soumya_s_",
    },
    {
      name: "Mckenna Grace",
      img: "/assets/imgs/user6.png",
      role: "Full Stack Developer",
      discord: "https://discord.com/invite/56905853",
      insta: "https://www.instagram.com/soumya_s_/",
      twitter: "https://twitter.com/soumya_s_",
    },
    {
      name: "Peter Griffin",
      img: "/assets/imgs/user7.png",
      role: "Full Stack Developer",
      discord: "https://discord.com/invite/56905853",
      insta: "https://www.instagram.com/soumya_s_/",
      twitter: "https://twitter.com/soumya_s_",
    },
  ];
  return (
    <Box className="container">
      <Grid
        container
        sx={{ padding: "0 20px", justifyContent: "center" }}
        spacing={5}
      >
        {teams.map((team) => {
          return <TeamMember key={team.name} team={team} />;
        })}
      </Grid>
    </Box>
  );
};

export default Teams;
