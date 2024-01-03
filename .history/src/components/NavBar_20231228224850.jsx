import { useState } from "react";
import { Link } from "react-router-dom";
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


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      title: 'About',
      path: '#about',
    },
    {
      title: 'Projects',
      path: '#projects',
    },
    {
      title: 'Contact',
      path: '#contact',
    },
  
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="navbar-links-container">
      
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
                  <ul>
                    {menuOptions.map((item)=>{
                          <>
                            <li>
                              <a href={item.path}>{item.title}</a>
                            </li>
                          </>
                    })}
                  </ul>
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
