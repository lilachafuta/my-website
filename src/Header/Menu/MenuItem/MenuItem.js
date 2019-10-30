import React from 'react';
import './MenuItem.css';

class MenuItem extends React.Component {
    render () {
        console.log(this.props);
        return (
            <a className="MenuItem" href={this.props.children}>{this.props.children}</a>
        );
    }
}
export default MenuItem;