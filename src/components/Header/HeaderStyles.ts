export const textFieldStyling = {
  "& .MuiTextField-root": {
    height: "40px",
    minHeight: "40px",
    maxHeight: "40px",
    color: "#055a8c",
    width: "180px",
    "@media (max-width: 768px)": {
      width: "50%",
    },
  },
  "& .MuiInputBase-root": {
    height: "35px",
    alignItems: "center",
  },

  "& .MuiTypography-root": {
    lineHeight: "40px",
    color: "#055a8c",
  },
  "& .MuiInputLabel-root": {
    color: "#055a8c",
    fontWeight: "bold",
  },
  "& .MuiInputLabel-root.Mui-focused":{
    top:'0px'
  },
  "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root:hover": {
    color: "#0079bf",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#5ba4cf",
  },
  
  "& .MuiButton-contained": {
    marginBottom: "5px",
    height: "35px",
    width: "auto",
    backgroundColor: "#055a8c",
    color: "white",
    "&:hover": {
      backgroundColor: "#0c3953",
    },
    "@media (max-width: 768px)": {
      width: "auto",
      marginBottom: "12px",
    },
  },
  "& .MuiSelect-select": {
    minWidth: "120px",
    padding: "10px 14px",
    "@media (max-width: 768px)": {
      minWidth: "50px",
    },
  },
};

export const boxHeaderStyles = {
  background:
    "linear-gradient(to right, #ffffff 20%, #f4f1fd 60%,#5ba4cf 100%)",
  padding: "20px ",
  minHeight: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: 3,
  "@media (max-width: 768px)": {
    flexDirection: "column",
    padding: "10px",
    background:
      "linear-gradient(to bottom,rgba(255, 255, 255, 0.5) 20%, rgba(244, 241, 253, 0.5) 30%, rgba(91, 164, 207, 0.2) 80%)",
    gap: "5px",
    "& .MuiTextField-root, & .MuiButton-root": {
      width: "100%",
      margin: "8px 0",
    },
  },
  ...textFieldStyling,
};

