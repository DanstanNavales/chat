import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>
        WELCOME BACK!
      </Typography>
      <Typography sx={{ color: "white" }}>PLEASE LOGIN</Typography>
    </>
  );
};

export default LoginPageHeader;
