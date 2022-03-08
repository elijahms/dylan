import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

const NavGrid = () => {
  return (
    <Grid
      container
      rowSpacing={0}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justify="center"
      sx={{
        textAlign: "center",
      }}
      // spacing={0}
    >
      {["About", "Projects", "Connect"].map((g, i) => {
        return (
          <Grid
            className="home-menu"
            key={i}
            xs={12}
            md={4}
            lg={4}
            sx={{ pt: 3 }}
          >
            <NavLink
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
