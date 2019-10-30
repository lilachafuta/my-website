import React from 'react';
import MenuItem from "./MenuItem/MenuItem";
import './Menu.css';


class Menu extends React.Component {
    render () {
        return (
            <nav className="Menu">
                <MenuItem url="https://www.google.co.il/">Google</MenuItem>
                <MenuItem url="https://www.facebook.com/">Facebook</MenuItem>
                <MenuItem url="https://www.instagram.com/">Instagram</MenuItem>
                <MenuItem url="https://www.youtube.com/">YouTube</MenuItem>
            </nav>
        );
    }
}
export default Menu;