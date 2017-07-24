import React from 'react';
import Logo from '../logo.svg';

export default class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <img alt="React" src={Logo} />
                        </div>
                        <h3 className="navbar-text">Play What!?!</h3>
                    </div>
                </div>
            </nav>
        )
    }
}