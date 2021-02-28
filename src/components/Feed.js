import React, { useContext ,useState,useEffect} from 'react'
import '../styles/Feed.css'
import TweetBox from '../components/TweetBox'
import Post from '../components/Post'
import { PostsContext } from './Context/PostsContext'
import db from './firebase'

function Feed() {
    const {getPosts,posts} = useContext(PostsContext)
    

    useEffect(()=>{

    
        // getposts()
        getPosts()
    },[])

    return (
     
     
           
           <div className="feed">
            <div className="feed_header">
                <h3>Home</h3>
            </div>
         
            <TweetBox/>
     
            
            <div className="newsFeed">
              
             {posts.map((post) =>(
                    
                 <Post 
                 displayName={post.displayName}
                 photoUrl={post.photoUrl}
                 tweetMessage={post.tweetMessage}
                 tweetImage={post.tweetImage}
                 />
             ))}
             
           </div>
            
        
           </div>

           
        
    )
}

export default Feed
