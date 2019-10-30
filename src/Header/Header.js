import React from 'react';
import './Header.css';
import Menu from "./Menu/Menu";
import SearchBox from "./Menu/SearchBox/SearchBox";


class Header extends React.Component {
    render () {
        return (
            <header className="Header">
                <h1>Lilach Afuta ❀</h1>
                <SearchBox />
                <Menu />
            </header>
        );
    }
}
export default Header;
