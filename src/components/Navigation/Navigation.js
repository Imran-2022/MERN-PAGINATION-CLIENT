import React from 'react';
import { NavLink } from 'react-router-dom'
import "./Navigation.css"
const Navigation = () => {

    return (
       <>
        <NavLink to='/home'>Home</NavLink> {" "}
        <NavLink to="/product">product</NavLink>{" "}
        <NavLink to="/login">login</NavLink>
       </>
    );
};

export default Navigation;