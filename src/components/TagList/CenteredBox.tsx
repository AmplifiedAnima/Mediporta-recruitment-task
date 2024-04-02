import React from "react";
import { Box } from "@mui/material";

interface CenteredBoxProps {
  children: React.ReactNode;
  width?: string;
  maxWidth?: string;
}

const CenteredBox: React.FC<CenteredBoxProps> = ({
  children,
  width = "400px",
  maxWidth = "768px",
}) => (
  <Box display="flex" justifyContent="center" alignItems="center" width="100%" sx={{
    marginTop:'10px'
  }}>
    <Box
      sx={{
        width,
        maxWidth,
        "@media (max-width: 768px)": {
          width: "50%",
        },
      }}
    >
      {children}
    </Box>
  </Box>
);

export default CenteredBox;
