// components/Header/Header.jsx
import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.scss";
import logo from "../../assets/logos/logo.png";

const Header = () => {
  const { value, setValue } = useContext(MenuContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMobile = useMediaQuery("(max-width:680px)");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index) => {
    setValue(index);
    handleClose();
  };

  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Codenected Logo" />
      <nav className="header__nav">
        {isMobile && ( // Render the menu icon and the menu only if the screen is mobile
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon style={{ color: "aliceblue" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "responsive-menu",
              }}
            >
              <MenuItem onClick={() => handleMenuItemClick(0)}>
                Mission
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(1)}>
                Who We Help
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(2)}>
                How We Help
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(3)}>Market</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(4)}>
                Competition
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick(5)}>
                Differentiators
              </MenuItem>
            </Menu>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
