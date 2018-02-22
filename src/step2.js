import React, { Component } from 'react';
import './step2.css';

class Step2 extends Component {
    render() {
        return (
            <div className="step2">
                <img src="/assets/uploading.png" alt="Please wait..." />
                <div class="loading-animation"><span>One moment please...Adding your {this.props.doctype}</span></div>
            </div>
        )
    }
}
export default Step2;