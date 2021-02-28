import { Button } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import React from 'react'
import '../styles/Login.css';
function Login() {
    return (
        <div className="login_page">
        <TwitterIcon  className="twitter-icon"/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis laboriosam adipisci sapiente dolor animi nesciunt, ut, eligendi ducimus reiciendis rem ea quos alias sunt culpa magnam rerum? A, tenetur?
        <Button className="login_btn">LOGIN WITH TWITTER</Button>
        </div>
    )
}

export default Login
