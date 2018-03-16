import React, { Component } from 'react'


export default class PersonalImage extends Component {
    constructor(props) {
        super(props);

        this.state = null;
    };

    render() {
        return (
            <img src='https://i.pinimg.com/736x/dc/59/58/dc59584d9ccc53d3ba7ad229b23dc28f--aesthetic-art-planets-aesthetic.jpg' className="portfolio-portrait-image-circle"></img>
        );
    };
};
