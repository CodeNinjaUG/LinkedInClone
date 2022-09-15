import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header(){
   return (
        <div className='header'>
           <div className='header_left'>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg==" alt=""/>
              <div className='header_search'>
                  <SearchIcon/>
                  <input type="text" placeholder="Search"/>
              </div >
           </div>  
           <div className='header_right'>
                 <HeaderOptions Icon={HomeIcon} title="Home" />
                 <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                 <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                 <HeaderOptions Icon={ChatIcon} title="Messaging" />
                 <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                 <HeaderOptions avatar="https://compassionate-leakey-e9b16b.netlfiy.app/images/IG_Sonny.jpeg" title="me"/>
           </div>
        </div>
   )
}
export default Header