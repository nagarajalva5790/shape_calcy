import React from 'react';
import {Navbar} from 'reactstrap';
//styles
import { Wrapper } from '../App.styles';

function Header() {
    return (
        <Wrapper>
            <div>
                <Navbar>
                    <div className="container">
                        <img src='assets/images/shape_logo.PNG' className='imgDim' alt='Shape Calculator' />
                    </div>
                </Navbar>
            </div>
        </Wrapper>
    );
}

export default Header;