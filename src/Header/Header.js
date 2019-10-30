import React from 'react';
import './Header.css';
import Menu from "./Menu";


class Header extends React.Component {
    render () {
        console.log(this.props);
        return (
            <header className="Header">
                <h1>My Website!</h1>
                <Menu />
            </header>
        );
    }
}
export default Header;
