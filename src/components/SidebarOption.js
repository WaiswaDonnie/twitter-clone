import React from 'react'
import '../styles/SidebarOptions.css'
function SidebarOption({ Icon,text, active }) {
    return (
        <div>
            {/* Here we are passing in the side bar options */}

        <div className={`sidebarOption ${active && 'sidebarOption__active'}`} >
            <Icon className="icon--btn" />
            
            <h2>{text}</h2>
        </div>
            
        </div>
    )
}

export default SidebarOption
