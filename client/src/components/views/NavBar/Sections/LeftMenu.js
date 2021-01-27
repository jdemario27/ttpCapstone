  import React from 'react';
import { Menu } from 'antd';
import './Navbar.css'



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


function LeftMenu(props) {
  return (
    
    <Menu mode={props.mode}>
    
    <Menu.Item key="favorite">
      <a href="/favorite" className="Nav-size">Favorites</a>
    </Menu.Item>
    <Menu.Item key="search">
      <a href="/search" className="Nav-size">Search Movies</a>
    </Menu.Item>
  
  </Menu>
  
  )
}

export default LeftMenu