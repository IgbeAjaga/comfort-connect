import React, { useState } from 'react';
import '../css/Header.css';
import ConnectlovedOne from './ConnectlovedOne';
import EmotionPopup from './EmotionPopup'; // Import EmotionPopup component
import ConnectionRemove from './ConnectionRemove'; // Import RemoveConnection component
import ConnectionStatus from './ConnectionStatus'; // Import ConnectionStatus component
import Notification from './Notification'; // Import Notification component
import { Tooltip, IconButton, Badge, Avatar } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AddReactionIcon from '@mui/icons-material/AddReaction';

import { Link } from "react-router-dom";
import DropDownProfile from './DropDownProfile';

function Header() {
  const [connectlovedOneOpen, setConnectlovedOneOpen] = useState(false);
  const [emotionPopupOpen, setEmotionPopupOpen] = useState(false);
  const [connectionRemoveOpen, setConnectionRemoveOpen] = useState(false);
  const [connectionStatusOpen, setConnectionStatusOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Function to open the notifications popup
  const openNotifications = () => {
    setNotificationOpen(true);
    setUnreadCount(0); // Mark notifications as read when opened
  };

  // Function to add a new notification
  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
    };
    setNotifications([newNotification, ...notifications]);
    setUnreadCount(unreadCount + 1);
  };

  // Function to toggle the visibility of ConnectLovedOne
  const toggleConnectlovedOne = () => {
    setConnectlovedOneOpen(!connectlovedOneOpen);
  };

  // Function to open the EmotionPopup
  const openEmotionPopup = () => {
    setEmotionPopupOpen(true);
  };


  // Function to toggle the visibility of RemoveConnection
  const toggleConnectionRemove = () => {
    setConnectionRemoveOpen(!connectionRemoveOpen);
  };

  // Function to toggle the visibility of ConnectionStatus
  const toggleConnectionStatus = () => {
    setConnectionStatusOpen(!connectionStatusOpen);
  };

  

  return (
    <div className='header'>
      <div className='header_left'>
        <Link to='/home'>
          <img
            className='header_logo'
            src='https://res.cloudinary.com/dpozc9dye/image/upload/v1697761695/Comfort_connect_logo_1_lwrjyo.png'
            alt=''
          />
        </Link>
        
      </div>
      <div className='header_input'></div>
      <div className='header_icons'>
      <p>Connecting Hearts, Providing Comfort</p>
      <div>
          <Tooltip title="Add your Current Emotion">
            <IconButton onClick={openEmotionPopup}>
              <AddReactionIcon className='header_icon' />
            </IconButton>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Connect to loved ones">
            <IconButton onClick={toggleConnectlovedOne}>
              <PersonAddAlt1Icon className='header_icon' />
            </IconButton>
          </Tooltip>
          {connectlovedOneOpen && <ConnectlovedOne onClose={toggleConnectlovedOne} />}
        </div>
        <div>
          <Tooltip title="Disconnect from loved ones">
            <IconButton onClick={toggleConnectionRemove}>
              <PersonRemoveIcon className='header_icon' />
            </IconButton>
          </Tooltip>
          {connectionRemoveOpen && <ConnectionRemove onClose={toggleConnectionRemove} />}
        </div>
        <div>
          <Tooltip title="View loved ones' emotions">
            <IconButton onClick={toggleConnectionStatus}>
              <Diversity1Icon className='header_icon' />
            </IconButton>
          </Tooltip>
          {connectionStatusOpen && <ConnectionStatus onClose={toggleConnectionStatus} />}
        </div>
        <div>
        <Tooltip title="Get notifications">
          <IconButton onClick={openNotifications}>
            <Badge badgeContent={unreadCount} color="error">
              <NotificationAddIcon className='header_icon' />
            </Badge>
          </IconButton>
        </Tooltip>
      </div>
      {notificationOpen && (
        <Notification
          notifications={notifications}
          closeNotifications={() => setNotificationOpen(false)}
          markAsRead={(notification) => {
            // Mark notification as read and update unread count
            setNotifications(notifications.filter((n) => n.id !== notification.id));
            setUnreadCount(unreadCount - 1);
          }}
        />
      )}

<div>
          <Tooltip title="Profile">
            <IconButton onClick={() => setOpenProfile((prev) => !prev)}>
              <Avatar className='header_icon' />
            </IconButton>
          </Tooltip>
          
        </div>

      {
        openProfile && <DropDownProfile />
      }    
        
      </div>
      {emotionPopupOpen && <EmotionPopup isOpen={emotionPopupOpen} onClose={() => setEmotionPopupOpen(false)} />}
    </div>
  );
}

export default Header;
