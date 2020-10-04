import { Avatar } from "@material-ui/core";
import React from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
import "./Sidebar.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        Icon={
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGF5Tw7u6Rhng/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=hlW9Kpx4-ubWDRvOUXo-0gPxam0-O99x377-Qfr8tr4" />
        }
        title="Thanseef__tan"
      />
      <SidebarRow
        Icon={<LocalHospitalIcon />}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={<EmojiFlagsIcon />} title="Pages" />
      <SidebarRow Icon={<PeopleIcon />} title="Friends" />
      <SidebarRow Icon={<ChatIcon />} title="Messenger" />
      <SidebarRow Icon={<StorefrontIcon />} title="Marketplace" />
      <SidebarRow Icon={<VideoLibraryIcon />} title="Videos" />
      <SidebarRow Icon={<ExpandMoreIcon />} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
