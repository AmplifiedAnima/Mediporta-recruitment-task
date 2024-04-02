export const cardStyling = {
  display: "flex",
  flexDirection: "column",
  background:
    "linear-gradient(to bottom, #ffffff 20%, #f4f1fd 50%, #e4f0f6 80%)",
  color: "#34495e",
  borderRadius: "8px",
  margin: "0px 10px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",

  "&:hover": {
    backgroundColor: "#d3ccef",
  },
  ".MuiCardContent-root": {
    padding: "16px",

    "&:last-child": {
      paddingBottom: "16px",
    },
  },
  "@media (max-width:768px)": {
    margin: "5px",
    ".MuiCardContent-root": {
      "& .MuiTypography-subtitle1": {
        fontSize: "0.9rem",
      },
      "& .MuiTypography-body2": {
        fontSize: "0.8rem",
      },
    },
  },
  "@media (max-width:280px)": {
    ".MuiCardContent-root": {
      "& .MuiTypography-subtitle1": {
        fontSize: "0.8rem",
      },
      "& .MuiTypography-body2": {
        fontSize: "0.7rem",
      },
    },
  },
};
