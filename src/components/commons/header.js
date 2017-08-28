import React from 'react';
import {Navbar} from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>T9 Words</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}
export default Header;