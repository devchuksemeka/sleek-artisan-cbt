import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default class Login extends Component {
    APP_LOGO_BG_IMAGE_PATH="/asset/images/core-logo.jpg";
    // APP_LOGO_BG_IMAGE_PATH="/asset/images/logo.png";

    render() {
        return (
            <div>
                <Header/>
                <div className="main-content-area">
                    <section className="page-title">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 col-sm-7 co-xs-12 text-left">
                            <h1>Sign In To Your Account</h1>
                        </div>
                        <div className="col-md-6 col-sm-5 co-xs-12 text-right">
                            <div className="bread">
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a>
                                </li>
                                <li className="active">Sign In</li>
                            </ol>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>


                    <section className="section-padding-80 white" id="login">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">

                            <div className="box-panel">
                            <span to="/" className="btn btn-default facebook">
                                <img alt="" src={this.APP_LOGO_BG_IMAGE_PATH} width="40" height="40"/>
                                    &nbsp; Flora Field School CBT
                                </span>
                                <br/>
                                <br/>
                            <form>
                                <div className="form-group">
                                <label>Admission Number</label>
                                <input type="text" placeholder="Your admission" className="form-control"/>
                                </div>
                                <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Your Password" className="form-control"/>
                                </div>
                                {/* <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-6">
                                    <div className="checkbox flat-checkbox">
                                        <label>
                                        <input type="checkbox"/>
                                        <span className="fa fa-check"></span> Remember me?
                                        </label>
                                    </div>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                    <p className="help-block"><a data-toggle="modal" href="#myModal">Forgot password?</a>
                                    </p>
                                    </div>
                                </div>
                                </div> */}
                                <Route render={({ history}) => (
                                    <button
                                        className="btn btn-primary btn-lg btn-block"
                                        onClick={() => { history.push('/questions') }}
                                    >
                                    Login In
                                    </button>
                                )} />
                                {/* <button className="btn btn-primary btn-lg btn-block" onClick={() => { push('/new-location') }}>Log In</button> */}

                            </form>

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
