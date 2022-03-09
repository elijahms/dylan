import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { socialObj } from "./contact_info.js";

const SocialLinks = ({ marginDesk, marginMob, initialIconCol }) => {
  return (
    <Stack
      direction={window.innerWidth < 500 ? "column" : "row"}
      alignItems="center"
      justifyContent="center"
      spacing={{ xs: 2, md: 3, lg: 20 }}
      sx={{
        mt: marginDesk,
        "@media only screen and (max-width: 500px)": {
          mt: marginMob,
        },
      }}
    >
      {socialObj.map((s) => {
        return (
          <Box key={s.name} className="contact-icons">
            <Link href={s.link} target="_blank" rel="noopener noreferrer">
              <s.icon
                sx={{
                  fontSize: s.fontSize,
                  color: initialIconCol,
                  "&:hover": {
                    color: s.color,
                  },
                }}
              />
            </Link>
          </Box>
        );
      })}
      ;
    </Stack>
  );
};

export default SocialLinks;
