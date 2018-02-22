import React, { Component } from 'react';
import './step1.css';

class Step1 extends Component {
    render() {
        return (
            <div className="step1">
                <span className="uploader-title">{this.props.title}</span> 
                <img src={this.props.image} alt="Instructions" />
                <h2>{this.props.subtitle}</h2>
                <ul>
                    <ul>
                        { this.props.bullets.map((item, i) => <li id={i}>{item}</li> ) }
                    </ul>
                </ul>
            </div>
        )
    }
}
export default Step1;