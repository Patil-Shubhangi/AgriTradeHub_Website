//import 'C:/Users/Shubhangi Patil/Desktop/navigation-app/src/App.css';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from '../../img/logo1.png';
import 'C:/Users/Shubhangi Patil/Desktop/navigation-app/src/App.css';

const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu => !isMenu);
        setResponsiveclose(isResponsiveclose => !isResponsiveclose);
    };
    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu => !isMenuSubMenu);
    };
    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }
    return ( <
        header className = "header__middle" >
        <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "header__middle__logo" >
        <
        NavLink exact activeClassName = 'is-active'
        onClick = { toggleClass }
        to = "/" >
        <
        img src = { logo }
        alt = "logo" / >
        <
        /NavLink> < /
        div > <
        div className = "header__middle__menus" >
        <
        nav className = "main-nav" > {
            isResponsiveclose === true ?
            <
            span className = "menubar__button"
            style = {
                { display: 'none' }
            }
            onClick = { toggleClass } > < FiXCircle / > < /span> : <
            span className = "menubar__button"
            style = {
                { display: 'none' }
            }
            onClick = { toggleClass } > < FiAlignRight / > < /span>
        } <
        ul className = { boxClass.join(' ') } >
        <
        li className = "menu-item" >
        <
        NavLink exact activeClassName = 'is-active'
        onClick = { toggleClass }
        to = { `/` } > Home < /NavLink>  < /
        li > <
        li className = "menu-item " > < NavLink onClick = { toggleClass }
        activeClassName = 'is-active'
        to = { `/About` } > About < /NavLink> </li >
        <
        li className = "menu-item " > < NavLink onClick = { toggleClass }
        activeClassName = 'is-active'
        to = { `/Product` } > Product < /NavLink> </li >
        <
        li className = "menu-item " > < NavLink onClick = { toggleClass }
        activeClassName = 'is-active'
        to = { `/Login` } > Login < /NavLink> </li >
        <
        /ul>


        <
        /nav>      < /
        div >





        <
        /div> < /
        div > <
        /header>
    )
}

export default Navbarmenu