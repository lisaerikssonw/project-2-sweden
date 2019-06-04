import React from 'react'
import Nav from './Nav';

const Header = (props) => (

            <header>
                <Nav page={props.page} handlePageState={props.handlePageState}/>
            </header>
        )

export default Header;
