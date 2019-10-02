import React, { Component } from 'react'

export default class AnswerOptions extends Component {
    render() {
        return this.props.options.map((option)=>(
            <React.Fragment>
                <input type="radio" name={this.props.questionId} placeholder="Your admission" className=""/>
                <label>&nbsp;{option.value}</label><br/>
            </React.Fragment>
        ));
    }
}
