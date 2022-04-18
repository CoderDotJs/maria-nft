import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "next/image";

const TeamMember = () => {
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
          src="/assets/imgs/dg_main.png"
          alt="adf"
          width={300}
          height={240}
          layout="responsive"
        />
        <Typography variant="h4">Md Akash</Typography>
        <Typography variant="body2">CEO</Typography>
      </Box>
    </Grid>
  );
};

export default TeamMember;
