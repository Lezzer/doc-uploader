import React, { Component } from 'react';
import './step3.css';

class Step3 extends Component {
    render() {
        return (
            <div className="step3">
                <img src="/assets/complete.png" alt="Upload Complete" />
                <h3>What happens next?</h3>
                <ul>
                    { this.props.bullets.map((item, i) => <li id={i}>{item}</li> ) }
                </ul>
            </div>
        )
    }
}
export default Step3;