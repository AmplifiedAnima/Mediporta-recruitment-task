export const textFieldStyling = {
  "& .MuiTextField-root, & .MuiButton-root": {
    height: "40px",
    minHeight: "40px",
    maxHeight: "40px",
    color: "#055a8c",
    width: "180px",
    "@media (max-width: 768px)": {
      width: "50%",
    },
    "@media (max-width: 280px)": {
      width: "100%", // Adjust width for smaller devices
    },
  },
  "& .MuiInputBase-root": {
    height: "35px",
    alignItems: "center",
    color: "",
  },
  "& .MuiTypography-root": {
    lineHeight: "40px",
    color: "#055a8c",
  },
  "& .MuiInputLabel-root": {
    color: "#055a8c",
    fontWeight: "bold",
  },
  "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root:hover": {
    color: "#0079bf",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#5ba4cf",
  },
  "& .MuiButton-contained": {
    backgroundColor: "#055a8c",
    color: "white",
    maxWidth: "80px",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#0c3953",
      color: "white",
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
  padding: "25px 20px",
  minHeight: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: 2.8,
  "@media (max-width: 768px)": {
    flexDirection: "column",
    padding: "10px",
    background:
      "linear-gradient(to bottom,rgba(255, 255, 255, 0.5) 20%, rgba(244, 241, 253, 0.5) 30%, rgba(91, 164, 207, 0.2) 80%)",
    gap: "1px",
    "& .MuiTextField-root, & .MuiButton-root": {
      width: "100%",
      margin: "8px 0",
    },
  },
  "@media (max-width: 280px)": {
    padding: "5px", // Adjust padding for smaller devices
  },
  ...textFieldStyling,
};

export const InNameAndPageSizeStyles = {
  ...textFieldStyling,
  "& .MuiInputLabel-root": {
    top: "-10px",
    fontSize: "16px",
  },
  "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root:hover": {
    top: "0px",
  },
};
