import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { TagInterface } from "../../../interfaces/Tag.interface";

const TagTable: React.FC<{ tags: TagInterface[] }> = ({ tags }) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="scrollable table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{ fontWeight: "fontWeightBold", backgroundColor: "#e4f0f6" }}
            >
              Tag Name
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "fontWeightBold", backgroundColor: "#e4f0f6" }}
            >
              Posts Related
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:nth-of-type(odd)": { backgroundColor: "#f8f9fa" },
              }}
            >
              <TableCell
                align="left"
                component="th"
                scope="row"
                sx={{ color: "#212529", fontWeight: "bold", pl: "26.8%" }}
              >
                {tag.name}
              </TableCell>
              <TableCell align="left" sx={{ color: "#495057", pl: "5.5%" }}>
                {tag.count !== 0 ? tag.count : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TagTable;
