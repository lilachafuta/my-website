import React from 'react';
import './SideBar.css';
import SidebarItem from "./SidebarItem/SidebarItem";

class SideBar extends React.Component {
    render () {
        return (
            <aside className="SideBar">
                <SidebarItem url="#">HOME</SidebarItem>
                <SidebarItem url="#">ABOUT</SidebarItem>
                <SidebarItem url="#">EVENTS</SidebarItem>
                <SidebarItem url="#">GALLERY</SidebarItem>
                <SidebarItem url="#">TEAM</SidebarItem>
            </aside>
        );
    }
}
export default SideBar;