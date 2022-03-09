import Typography from "@mui/material/Typography";

const NameTitle = ({title}) => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: "#880808",
        textAlign: "center",
        fontFamily: "Montserrat",
        "@media only screen and (max-width: 500px)": {
          fontSize: "2rem",
        },
      }}
    >
      {title}
    </Typography>
  );
};

export default NameTitle;
