import axios from "axios";
import { createContext, useEffect, useState } from "react"
import db from '../firebase';

export const PostsContext = createContext()

export const PostsContextProvider = ({children}) => {

    const [posts,setPosts] = useState([]);
    useEffect(()=>{
       
 
        getPosts()
    },[])

   const createPost = (postData) =>{
            axios.post('http://localhost:8080/posts/',postData)
            .then(res =>{
                console.log("Post Succesful.")
                setPosts([...posts,postData])
            })
    }
    function getPosts (){
      db.collection('posts').onSnapshot(snapShot =>(
          setPosts(snapShot.docs.map(doc => doc.data()))
      ))
        
    }





    return (

        <PostsContext.Provider value={{posts,createPost,getPosts}} >
            {children}
        </PostsContext.Provider>

    )

}