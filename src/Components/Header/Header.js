import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Logout from "../Logout/Logout";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="facebook logo"
        />
        <div className="heaader__leftSerach">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option  header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGF5Tw7u6Rhng/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=hlW9Kpx4-ubWDRvOUXo-0gPxam0-O99x377-Qfr8tr4" />
          <h4>Thanseef_tan</h4>
        </div>
        <IconButton className="iconButton">
          <AddIcon />
        </IconButton>
        <IconButton className="iconButton">
          <ForumIcon />
        </IconButton>
        <IconButton className="iconButton">
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton className="iconLogout">
          <Logout />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
