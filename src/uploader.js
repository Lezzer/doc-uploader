import React, { Component } from 'react';
import './uploader.css';
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

class Uploader extends Component {

    constructor(props){
        super(props);
        let step = this.props.steps[0];
        this.state = {step: step};
    }
    
    onChangeFile(event) {
        event.stopPropagation();
        event.preventDefault();

        this.getNextStep();
        let file = event.target.files[0];
        this.pretendToProcessUpload(file);
    }
    
    getNextStep() {
        let nextStep = this.state.step;
        let nextStepValue = this.props.steps[nextStep];
       
        this.setState(
        {
            step: nextStepValue
        });
    }
    
    getStepView() {
        let markup;
        switch (this.state.step) {
            case 1: markup = 
                <Step1
                    image={this.props.image}
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    bullets={this.props.step1bullets}
                />;
                break;
            case 2:  markup =  <Step2 doctype={this.props.doctype} />;
                break;
            case 3:  markup =  <Step3 />;
                break;
            case 4:  markup =  <Step4 bullets={this.props.step4bullets} />;
                break;
            default:
                markup =  "invalid state";
        }
        return markup;
    }
    
    pretendToProcessUpload(file){
        this.getNextStep();
        this.setState({uploaded: file});
        setTimeout(() => this.getNextStep(), 2000);
    }
    
    render() {
        return (
            <div id="container">
                <header className="uploader-header">{this.props.header}</header>
                <main className="uploader-main">
                    { this.getStepView() }
                </main>
                <footer className="uploader-footer">
                    <span className="uploader-button" onClick={()=>{this.upload.click()}}>{this.props.button}</span>
                    <input id="myInput"
                           type="file"
                           ref={(ref) => this.upload = ref}
                           style={{display: 'none'}}
                           onChange={this.onChangeFile.bind(this)} />
                </footer>
            </div>
        )
    }
}
export default Uploader;