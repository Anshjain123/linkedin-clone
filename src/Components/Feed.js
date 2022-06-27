import { Avatar } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './Feed.css'
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { collection, query, onSnapshot, addDoc, serverTimestamp, orderBy } from "firebase/firestore";
import { auth, db } from './Firebase'
import FlipMove from 'react-flip-move';

const Feed = () => {

  const [posts, setposts] = useState([]);
  const [input, setinput] = useState("")
  useEffect(() => {

    const q = query(collection(db, 'posts'), orderBy("timestamp", 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((snapshot) => {
        arr.push({ id: snapshot.id, data: snapshot.data() });
      })
      setposts(arr);
    })
    return unsubscribe;

  }, [])

  const sendPost = async (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      name: "Ansh Jain",
      description: "PEC CSE 2024 || PEC ACM CSS Student chapter Member || 4⭐ Codechef || pupil at Codeforces || Web developer || App Developer",
      message: input,
      photoUrL: '',
      timestamp: serverTimestamp(),
    })
    setinput("");
    // console.log(e.target);
  }
  console.log(posts);
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__inputContainer2">
          <Avatar src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" className="feed__avatar" />
          <div className="feed__input">
            <form>
              <input type="text" value={input} placeholder='Start a post about a topic that excites you' style={{ backgroundColor: 'white' }} onChange={(e) => setinput(e.target.value)} />
              <button onClick={sendPost} ><SendIcon style={{ backgroundColor: 'white', color: '#0077b7', cursor: 'pointer' }} /></button>
            </form>
          </div>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#378fe9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#5f9b41" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c37d16" />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#e16745" />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message } }) => {
          return <Post key={id} name={name} description={description} message={message} id={id} />
        })}
      </FlipMove>


    </div>
  )
}

export default Feed