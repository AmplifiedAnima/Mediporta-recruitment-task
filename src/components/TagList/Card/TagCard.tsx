import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { TagInterface } from "../../../interfaces/Tag.interface";
import { cardStyling } from "./TagCardStyles";

export const TagCard: React.FC<{ tag: TagInterface; index: number }> = ({
  tag,
  index,
}) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
      <Card sx={cardStyling} key={index}>
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="h2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {tag.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Posts related: {tag.count}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TagCard;
