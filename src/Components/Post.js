import { Avatar } from '@mui/material'
import React, { useState, forwardRef } from 'react'
import InputOption from './InputOption';
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { doc, deleteDoc } from "firebase/firestore";
import {db} from './Firebase';

const Post = forwardRef(({ name, description, message, id }, ref) => {
    let desc = "PEC CSE 2024 || PEC ACM CSS Student chapter Member || 4⭐ Codechef || pupil at Codeforces || Web developer || App Developer";
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handledeleteandclose = async () => {
        await deleteDoc(doc(db, "posts", id)); 
        setAnchorEl(null);
    }
    return (
        <div ref = {ref} className="post">
            <div className="post__header">
                <Avatar src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
                <div className="post__info">
                    <div className="post__name">
                        {name}
                        <div className="post__delete">

                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreVertIcon className='icon__more' />
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
                                <MenuItem onClick={handledeleteandclose}>Delete Post</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <p className="post__description">
                        {desc.substring(0, 70)}...
                    </p>
                </div>
            </div>
            <div className="post__body">
                <div className="post__message">
                    {message}
                </div>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="#727272" />
                <InputOption Icon={CommentIcon} title="Comment" color="#727272" />
                <InputOption Icon={ShareIcon} title="Share" color="#727272" />
                <InputOption Icon={SendIcon} title="Send" color="#727272" />
            </div>
        </div>
    )
})

export default Post