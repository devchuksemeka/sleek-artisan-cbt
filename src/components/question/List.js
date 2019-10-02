import React, { Component } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Single from './Single'
import Test from './Test'

export default class List extends Component {
    state={
        start_time:121029102,
        questions:[
            {
                id:1,
                question:'What is a noun?',
                options:[
                    {index:0,value:'A person name'},
                    {index:1,value:'A fire from the wall'},
                    {index:2,value:'A name of a person, animal, place or thing'},
                    {index:3,value:'None Of The Above'},
                ],
                is_answered:false,
            },
            {
                id:2,
                question:'What is a pronoun?',
                options:[
                    {index:0,value:'A word that can function as a noun phrase'},
                    {index:1,value:'A fire from the wall'},
                    {index:2,value:'A name of a person, animal, place or thing'},
                    {index:3,value:'None Of The Above'},
                ],
                is_answered:false,
            },
            {
                id:3,
                question:'What is an Adjective?',
                options:[
                    {index:0,value:'A person name'},
                    {index:1,value:'A fire from the wall'},
                    {index:2,value:'A name of a person, animal, place or thing'},
                    {index:3,value:'A word naming an attribute of a noun'},
                ],
                is_answered:false,
            },
            {
                id:4,
                question:'When the Principal entered the class, a student………. on the blackboard.',
                options:[
                    {index:0,value:'Wrote'},
                    {index:1,value:'Was writing'},
                    {index:2,value:'Writes'},
                    {index:3,value:'Is writing'},
                ],
                is_answered:false,
            },
            {
                id:5,
                question:'Select Correct Word',
                options:[
                    {index:0,value:'Aceleration'},
                    {index:1,value:'Aceeleration'},
                    {index:2,value:'Accelaration'},
                    {index:3,value:'Acceleration'},
                ],
                is_answered:false,
            },
            {
                id:6,
                question:'Select Correct Word',
                options:[
                    {index:0,value:'Agressive'},
                    {index:1,value:'Agrressive'},
                    {index:2,value:'Aggressive'},
                    {index:3,value:'Aggresive'},
                ],
                is_answered:false,
            },
            {
                id:7,
                question:'Bolt from the blue',
                options:[
                    {index:0,value:'Thundering'},
                    {index:1,value:'A complete surprise'},
                    {index:2,value:'Inform something bad'},
                    {index:3,value:'No idea'},
                ],
                is_answered:false,
            },
            {
                id:8,
                question:'Blue blood',
                options:[
                    {index:0,value:'Belonging to low class society'},
                    {index:1,value:'Give complain in written'},
                    {index:2,value:'Member of high class society'},
                    {index:3,value:'Complain give verbally'},
                ],
                is_answered:false,
            },
            {
                id:9,
                question:'She………TV when her husband came',
                options:[
                    {index:0,value:'Watch'},
                    {index:1,value:'Was watching'},
                    {index:2,value:'Is watching'},
                    {index:3,value:'Watched'},
                ],
                is_answered:false,
            },
            {
                id:10,
                question:'What is a Question Tag?',
                options:[
                    {index:0,value:'A person name'},
                    {index:1,value:'A fire from the wall'},
                    {index:2,value:'A name of a person, animal, place or thing'},
                    {index:3,value:'None Of The Above'},
                ],
                is_answered:false,
            },
        ]
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="full-section search-section">
                    <div className="search-area container">
                        <h3 className="search-title">English Test Question?</h3>
                        
                        <p className="search-tag-line">
                            <h3>Instructions</h3>
                            <ol className="search-tag-line">
                                <li>All Questions must be Answered.</li>
                                <li>Each question carries 3 marks.</li>
                            </ol> 
                        </p>
                        
                    </div>
	            </div>
                <div className="main-content-area">
                    <section className="white question-tabs padding-bottom-80" id="latest-post">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="panel panel-primary">
                                        <div className="panel-heading">
                                            <ul className="nav panel-tabs">
                                                <li className="active"> <a data-toggle="tab" href="#tab1"><i className="icofont icon-ribbon"></i><span className="hidden-xs">All Questions</span></a> 
                                                </li>
                                                <li> <a data-toggle="tab" href="#tab2"><i className="icofont icon-layers"></i><span className="hidden-xs">Answered Questions</span></a> 
                                                </li>
                                                <li> <a data-toggle="tab" href="#tab3"><i className="icofont icon-global"></i><span className="hidden-xs">Unanswered Questions</span></a> 
                                                </li>
                                                <li> <a href="#tab4"><i className="fa fa-clock-o"></i><span className="hidden-xs" style={{color:"red"}}>Time Remaining: 1 hour</span></a> 
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="tab-content">
                                            <div id="tab1" className="tab-pane active">
                                                <Test questions={this.state.questions}/>
                                            </div>
                                            <div id="tab2" className="tab-pane">
                                                
                                            </div>
                                            <div id="tab3" className="tab-pane">
                                               
                                            </div>
                                            <div id="tab4" className="tab-pane">
                                                
                                            </div>
                                            {/* <div className="text-center clearfix">
                                                <button className="btn btn-primary btn-lg">View All Question</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </section>
                </div>
		
                <Footer/>
            </div>
        )
    }
}
