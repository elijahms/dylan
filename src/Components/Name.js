import Typography from "@mui/material/Typography";

const Name = ({first_name, last_name}) => {
  return (
    <Typography
      variant="h1"
      sx={{
        color: "white",
        textAlign: "center",
        fontFamily: "Acier",
        fontSize: "7.5rem",
        "@media only screen and (max-width: 500px)": {
          fontSize: "3.8rem",
        },
      }}
    >
      {first_name} <span style={{ color: "#880808" }}>{last_name}</span>
    </Typography>
  );
};

export default Name;
