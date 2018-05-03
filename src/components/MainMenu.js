import React, { Component } from 'react';
import Button from "react-bootstrap/es/Button";

class MainMenu extends Component {
    render() {

        return (
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
            </div>
        );
    }
}

export default MainMenu;
