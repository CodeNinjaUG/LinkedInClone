import React from 'react';
import { Avatar } from "@mui/material";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="" alt="" />
            <Avatar className="sidebar_avatar"/>
            <h2> Segayi Andrew </h2>
            <h4> segayiandrew@gmail.com</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat"> 
                <p>Who Viewed You </p>
                <p className="sidebar_statNumber"> 324,5632</p>
            </div>
            <div className="sidebar_stat"> 
                <p>Views on the post </p>
                <p className="sidebar_statNumber"> 324,5632</p>
            </div>
        </div>
        <div className="sidebar_botton">
           <p> Recent Posts</p>
        </div>
    </div>
  )
}

export default Sidebar