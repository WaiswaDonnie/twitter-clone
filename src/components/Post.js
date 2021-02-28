import { Avatar } from "@material-ui/core";
import '../styles/Post.css'

import ChatBubbleOutlineIcon from  '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon  from "@material-ui/icons/FavoriteBorder";
import PublishIcon from '@material-ui/icons/Publish'
const Post = ({displayName,photoUrl, tweetMessage,tweetImage})=>{
 
    return (
        
        <div className="post-section">
            
            
            <div className="post_header">
                <Avatar src={photoUrl} className="avatar" fontSize="large" />
          <div className="tweet_header_section">
          <h1 className="display_name">{displayName}</h1>
                <small className="tweet_message">{tweetMessage}</small>
          </div>
            </div>
            <div className="post_image">
                <img src={tweetImage.length > 0 ?`${tweetImage}`:''}/>

                
                
            </div>
            <div className="post-footer">
        <ChatBubbleOutlineIcon fontSize="small" className="icon"/>
        <RepeatIcon fontSize="small" className="icon"/>
        <FavoriteBorderIcon fontSize="small" className="heart"/>
        <PublishIcon fontSize="small" className="icon"/>
            </div>
        </div>
        
    )
}

export default Post;