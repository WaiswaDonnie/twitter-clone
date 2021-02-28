import { Avatar,Button } from '@material-ui/core'
import React,{useContext,useState} from 'react'
import '../styles/TweetBox.css'
import { PostsContext } from './Context/PostsContext';
import db from './firebase'

function TweetBox() {
 const {createPost } = useContext(PostsContext);
const [tweetMessage,setTweetMessage] = useState("");
const [tweetError,setTweetError] = useState("");
const [tweetImage, setTweetImage] = useState("");


const submitTweet = (e)=>{
    e.preventDefault();
    // From local server
    // const data =  {tweetMessage,tweetImage}
    // createPost(data)
  
    //Sending data to firebase
    db.collection('posts').add({
        displayName: "Donnie Waiswa",
        photoUrl:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/2020-04-11-12-17-19-014_2_vc7tRp3.jpg",
        tweetMessage: tweetMessage,
        tweetImage: tweetImage
    })
    setTweetMessage('')
    setTweetImage('')
}
return(
    <div className="tweet_box">
    <form onSubmit={submitTweet}>
    <div className="tweet_box_header">
        <Avatar />
        <textarea value={tweetMessage} onChange={(e)=>setTweetMessage(e.target.value)} placeholder="What`s happening?" cols="55" rows="2" ></textarea>

    </div>
    <span className="error">
        <small className="error">
            {tweetError}
            </small>
        </span>
    <div className="tweet_box_imgurl">
    <input value={tweetImage} type="text" onChange={(e)=>setTweetImage(e.target.value)} placeholder="Enter Image Url: Optional"/>
  
    </div>
    <div className="btn-section" >
        <Button type="submit" className="tweet_box_btn">Tweet</Button>
    </div>
      </form>

</div>
)


}
export default TweetBox
