import React from 'react';
import {
    Navbar
} from 'reactstrap';

function Header() {
    return (
        <div>
            <Navbar>
                <div className="container">
                    <img src='assets/images/shape_logo.PNG' height="60" width='100%' alt='Shape Calculator' />
                </div>
            </Navbar>
        </div>
    );
}

export default Header;