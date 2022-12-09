import React from "react";
import Button from "@mui/material/Button";

const CustomPrimaryButton = ({ label, additionalStyles, disable, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#58",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disable}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
