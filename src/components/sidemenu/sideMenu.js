import React from "react";
import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Logo from "../../images/logo.png";
import SocialImgs from "./socialImgs";
import NavOptions from "./navOptions";

const SideMenu = () => {
  const logo = "<abdullah.dev/>";

  return (
    <div className="bg-darkGray text-white h-full p-9 flex flex-col justify-between">
      <div>
        {/* <img src={Logo} alt="Logo" /> */}
        <Link to="/" className="font-boldItalic text-xl">
          {logo}
        </Link>
      </div>

      <NavOptions />

      <div className="font-light text-sm">
        <SocialImgs />
        <p className="mt-4 ">
          Copyright ©2023 Muhammad Abdullah. All right reserved.
        </p>
      </div>
      {/* <Toolbar /> */}
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );
};

export default SideMenu;
