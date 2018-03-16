import React, { Component } from 'react';

export default class PersonalInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    };


    render() {
        return(
            <div className ="portfolio-personal-info">
                <div className ="portfolio-info-category-basic">
                    <h1>About me</h1>
                    <ul className ="info-list info-hidden-1">
                        <li>Age: 19</li>
                        <li>Date of Birth: 19th March 1999</li>
                        <li>Zodiac Sign: Pisces</li>
                        <li>Height: 166cm</li>
                        <li>Weight: 70kg</li>
                    </ul>
                </div>

                <div className ="portfolio-info-category-education">
                    <h1>Education</h1>
                    <ul className ="info-list info-hidden-2">
                        <li>University: Tampere University of Technology</li>
                        <li>Year: Freshman</li>
                        <li>Major: Information Communications and Technology</li>
                    </ul>
                </div>

                <div className ="portfolio-info-category-miscellaneous">
                    <h1>Other Information</h1>
                    <ul className ="info-list info-hidden-3">
                        <li>Hobbies: Coding, Designing, Cooking and Playing Soccer</li>
                        <li>Relationship status: Single</li>
                        <li>Language: Vietnamese, English, basic Finnish</li>
                    </ul>


                </div>

            </div>
        )
    }
}
