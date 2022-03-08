import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

const NavGrid = () => {
  return (
    <Grid
      container
      justify="center"
      sx={{
        textAlign: "center",
      }}
      // spacing={0}
    >
      {["About", "Projects", "Connect"].map((g, i) => {
        return (
          <Grid key={i} xs={12} md={4} lg={4}>
            <NavLink
              className="home-menu"
              style={{ fontFamily: "Montserrat" }}
              to={`/${g.toLowerCase()}`}
            >
              {g}
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NavGrid;
