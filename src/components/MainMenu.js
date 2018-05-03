import React, { Component } from 'react';

class MainMenu extends Component {
    constructor(props){
        super(props);

        this.state = {
            auth: false,
            isHome: false
        };

        let url = window.location + '/';
        let urlParams = url.split('/');
        let page = urlParams[urlParams.length - 2];
        if(page.toString() === "") {
            this.state.isHome = true
        }
    }

    render() {

        return (
            <div className="App-navbar">
                {this.state.isHome ? (
                    <div className="App-navbar">
                        {this.state.auth ? (
                            <a href={"/dashboard"}>
                                Dashboard
                            </a>
                        ) : (
                            <a href={"/login"}>
                                Login
                            </a>
                        )}
                    </div>
                ) : (
                    <div className="App-navbar">
                        <a href={"/"}>
                            Home
                        </a>
                        <a href={"/about"}>
                            About
                        </a>
                        <a href={"/skills"}>
                            Skills
                        </a>
                        <a href={"/course"}>
                            Course
                        </a>
                        <a href={"/portfolio"}>
                            Portfolio
                        </a>
                        {this.state.auth ? (
                            <a href={"/dashboard"}>
                                Dashboard
                            </a>
                        ) : (
                            <a href={"/login"}>
                                Login
                            </a>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default MainMenu;
