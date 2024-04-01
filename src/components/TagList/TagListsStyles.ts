export const paginationBoxStyles = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  p: 1,
  background: "white",
  borderTop: "1px solid rgba(0,0,0,0.12)",
};

export const gridItem = {
  display: "flex",
  justifyContent: { xs: "center", sm: "left" },
  alignItems: "center",
  margin: "5px 15px",
};
export const cardStyling = {
  display: "flex",
  flexDirection: "column",
  background:
    "linear-gradient(to bottom, #ffffff 20%, #f4f1fd 50%,	#e4f0f6 80%)",
  color: "#34495e",
  borderRadius: "8px",
  margin: "0px 10px", // Adjust margins as needed
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Optional shadow for depth
  "&:hover": {
    backgroundColor: "#d3ccef",
  },
  // Reduce the overall padding inside the card for a tighter layout
  ".MuiCardContent-root": {
    padding: "16px",
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
};
