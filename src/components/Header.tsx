import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography mr={"auto"}>Learn .</Typography>
        <Link
          to={"/"}
          style={{
            color: "white",
            margin: "0.5rem",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
