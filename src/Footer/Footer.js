import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render () {
        return (
            <footer className="Footer">
                <div className="Footer_icons">
                    <img src="https://image.flaticon.com/icons/svg/1051/1051313.svg" />
                    <img src="https://image.flaticon.com/icons/svg/1051/1051309.svg" />
                    <img src="https://image.flaticon.com/icons/svg/1051/1051323.svg" />
                    <img src="https://image.flaticon.com/icons/svg/1051/1051326.svg" />
                </div>
                <div className="Footer_links">
                    <a href="#">Info</a>
                    <a href="#">Support</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Like</a>
                </div>
                <div className="Footer_rights">© Lilach Afuta</div>
            </footer>
        );
    }
}
export default Footer;