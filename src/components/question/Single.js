import React, { Component } from 'react'
import AnswerOptions from './AnswerOptions';

export default class Single extends Component {
    render() {
        // console.log(this.props.question.id)
        const {id, question, options} = this.props.question;
        return (
            <div>
                <div className="col-md-2 col-sm-2 col-xs-12 hidden-xs">
                    <h2>Question {id}</h2>
                </div>
                <div className="col-md-7 col-sm-8  col-xs-12">
                    <h3><a  href="#">{question}</a></h3>
                    <br/>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <AnswerOptions options={options} questionId={id}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-12">
                    <ul className="question-statistic">
                        <li> 
                            <a data-toggle="tooltip" data-placement="bottom" data-original-title="Votes"><span className="fa fa-remove"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}
