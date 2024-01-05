import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Inicio",
      icon: <HomeIcon />,
      path:"#inicio"
    },
    {
      text: "productos",
      icon: <InfoIcon />,
      path:"#productos"
    },
    {
      text: "nosotros",
      icon: <CommentRoundedIcon />,
      path:"#nosotros"
    },
    {
      text: "Contacto",
      icon: <PhoneRoundedIcon />,
      path:"#contacto"
    },
    {
      text: "servicios",
      icon: <ShoppingCartRoundedIcon />,
      path:"#servicios"
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="navbar-links-container">
      <ul>
          <Link className="" to="/inicio">
            inicio
          </Link>
          <Link to="#nosotros">nosotros</Link>
          <Link to="#servicios">servicios</Link>
          <Link to="#productos">productos</Link>
          <Link to="#contacto">contacto</Link>
        </ul>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  <Link rel="stylesheet" to={item.path} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
