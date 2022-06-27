import React, { useState } from 'react'
import './Header.css';
import TextField from '@mui/material/TextField';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const Header = () => {


  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlelogout = async () => {
    signOut(auth)
      .then(() => {
        toast.success("logout successfully!");
      }).catch((error) => {
        toast.error(error.message);
      })
    dispatch(logout());
    setAnchorEl(null);

  }

  return (
    <div className='header'>
      <Toaster
        position="top-right"
      />
      <div className="header__left">
        <img className='header__logo' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header__search">
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />

        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <HeaderOption avatar="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" title="Me" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handlelogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default Header
