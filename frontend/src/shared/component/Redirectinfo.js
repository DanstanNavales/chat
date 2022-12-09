import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const Redirectinfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "72767d" }}
      style={additionalStyles ? additionalStyles : {}}
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default Redirectinfo;
