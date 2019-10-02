import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-area">

                    <div className="footer-content">
                        <div className="container">
                            <div className="row clearfix">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="footer-content text-center no-padding margin-bottom-40">
                                        
                                        <p>
                                            <strong>Computer-based training</strong> allows trainees to work at their own learning pace and style, 
                                            both of which can be adjusted to match the individual needs of each trainee. 
                                            &nbsp;<strong>Computer-based training</strong> is non-threatening and non-judgmental while providing immediate 
                                            feedback as the training progresses
                                        </p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="footer-copyright">
                            <div className="auto-container clearfix">
                                <div className="copyright text-center">Copyright 2019 &copy; Sleek Artisan Created By 
                                    <a target="_blank" href="https://linkdedin.com/in/devchuksemeka"> devchuksemeka</a> All Rights Reserved
                                </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
