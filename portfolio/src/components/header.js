import React, { Component } from 'react';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {term: 'visible'}
    };

    render() {
        return(
            <div className ="portfolio-header">
                <header>Anh Nguyen</header>
            </div>
        )
    }
}
