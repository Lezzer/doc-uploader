import React, { Component } from 'react';
import './step4.css';

class Step4 extends Component {
    render() {
        return (
            <div className="step4">
                <img src="/assets/complete.png" alt="Upload Complete" />
                <h3>What happens next?</h3>
                <ul>
                    { this.props.bullets.map((item, i) => <li id={i}>{item}</li> ) }
                </ul>
            </div>
        )
    }
}
export default Step4;