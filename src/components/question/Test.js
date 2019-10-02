import React, { Component } from 'react'
import { thisExpression } from '@babel/types'
import Single from './Single'

export default class Test extends Component {
    render() {
        return this.props.questions.map((question) => (
            <div key={question.id} className="listing-grid ">
                <div className="row">
                    <Single question={question}/>
                </div>
            </div>
        ));
    }
}
