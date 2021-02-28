
import '../styles/Widget.css';
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed';
function Widget(){
return (
    <div>
        <div className="widget">
        <div className="searchTweets">
            <SearchIcon/>
     
            <input type="text" placeholder="Search tweets"></input>
       
        </div>
        <h3>What`s happening?</h3>
        </div>
        <div>
              
            <TwitterTweetEmbed tweetId={"1236202641350365184"}/>    
               <TwitterTimelineEmbed
  sourceType="profile"
  screenName="DonnieWaiswa"
  options={{height:400, width:400}}
/>
        </div>
    </div>
)
}

export default Widget