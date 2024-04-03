import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import { cardStyling } from "./TagCardStyles";

export const TagCard: React.FC<{ tag: string }> = ({ tag }) => {
  return (
    <Card sx={cardStyling}>
      <CardContent>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "fontWeightBold",
            fontSize: "1.8rem",
            color: "#34495e",
          }}
        >
          {tag}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TagCard;
