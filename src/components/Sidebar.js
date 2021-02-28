import React from 'react'
import SidebarOptions from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter'
import '../styles/Sidebar.css'

import HomeIcon from '@material-ui/icons/Home'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search'
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
     
     
            <div className="sidebar">
            <TwitterIcon  className="twitter__icon"/>

            
            <SidebarOptions active Icon={HomeIcon} text="Home"/>
            <SidebarOptions Icon={SearchIcon}  text="Explore"/>
            <SidebarOptions Icon={NotificationsNoneIcon} text="Notification"/>
            <SidebarOptions Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOptions Icon={ListAltIcon} text="Lists"/>
            <SidebarOptions Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOptions Icon={MoreHorizIcon} text="More"/>
        
            <Button fullWidth variant="outlined" className="tweet__btn">Tweet</Button>
            </div>
    
        
    
    )
}

export default Sidebar
