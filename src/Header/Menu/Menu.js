import React from 'react';
import MenuItem from "./MenuItem";
import './Menu.css';


class Menu extends React.Component {
    render () {
        console.log(this.props);
        return (
            <nav className="Menu">
                <MenuItem url="www.google.co.il">Item1</MenuItem>
                <MenuItem url="www.google.co.il">Item1</MenuItem>
                <MenuItem url="www.google.co.il">Item1</MenuItem>
                <MenuItem url="www.google.co.il">Item1</MenuItem>
            </nav>
        );
    }
}
export default Menu;