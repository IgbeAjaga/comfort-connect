import React, {useState} from 'react';

import HomeIcon from '@mui/icons-material/Home';


import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
    {
      path:"/home",
      name:"Home",
      icon:<HomeIcon/>
    },
    
  ]

  return(
    <div className='container'>
      <div style={{width: isOpen ? "250px" : "50px"}} className='sidebar'>
        <div className='top-section'>
          
          <div style={{marginLeft: isOpen ? "50px" : "0px"}}  className='bars'>
          <MenuIcon onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink to={item.path} key={index} className='link' activeclassName='active'>
              <div className='icon'>{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className='link-text'>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Sidebar
