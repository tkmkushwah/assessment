import React from 'react';
import {AiOutlinePlus,
    AiOutlineUser,
AiFillFolderOpen,
AiOutlineUpload,
AiFillSetting,
AiOutlineLogin
} from 'react-icons/ai'
import { HiOutlineDocumentReport}from "react-icons/hi";
import { GiWaveCrest}from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"    New",
            icon:<AiOutlinePlus/>
        },
        {
            path:"/",
            name:"Patient",
            icon:<AiOutlineUser/>
        },
        {
            path:"/",
            name:"Folder",
            icon:<AiFillFolderOpen/>
        },
        {
            path:"/",
            name:"Upload",
            icon:<AiOutlineUpload/>
        },
        {
            path:"/",
            name:"Report",
            icon:<HiOutlineDocumentReport/>
        },
        {
            path:"/",
            name:"Setting",
            icon:<AiFillSetting/>
        },
      
        {
            path:"/",
            name:"logout",
            icon:<AiOutlineLogin/>
        }
    ]
    return (
        <div className="container">
           <div  className="sidebar">
               <div className="top_section">
                   <div className="bars">
                       <GiWaveCrest/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index}    className="link" >
                           <div className="text-icon">
                            <div className='icon'>{item.icon}</div>
                            <p className='text'>{item.name}</p>
                            </div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;