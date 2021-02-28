import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import Loading from "./components/Loading";
import { useEffect } from "react";
import { PostsContextProvider } from "./components/Context/PostsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import db from "./components/firebase";


function App({match}) {
  var loading = true;
  useEffect(()=>{

    db.collection("posts").onSnapshot(snapShot=>{
        // setFirebasePosts(snapShot.docs.map(doc=>doc.data()))
        console.log(snapShot.docs.map(doc=>doc.data()))
    })


},[])
  return (
    <div className="App">
 
        <PostsContextProvider>
        
<Sidebar />
<Feed />
<Widget />
       
        </PostsContextProvider>
  
    </div>
  );
}

export default App;
