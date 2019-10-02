import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    APP_LOGO_BG_IMAGE_PATH="/asset/images/core-logo.jpg";
    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-4">
                                <ul className="top-nav nav-left">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="hidden-xs">
                                        <Link to="#">Blog</Link>
                                    </li>
                                    <li  className="hidden-xs">
                                        <Link to="#">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-8">
                                <ul className="top-nav nav-right">
                                    <li><Link to="/login"><i className="fa fa-lock" aria-hidden="true"></i>Login</Link>
                                    </li>
                                    <li><Link to="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Signup</Link>
                                    </li>
                                    <li className="dropdown"> 
                                        <a className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-animations="fadeInUp">
                                            <img className="img-circle resize" alt="" src="images/authors/13.jpg"/>
                                            <span className="hidden-xs small-padding">
                                                <span>Chuks Emeka</span>
                                            <i className="fa fa-caret-down"></i>
                                            </span>
                                        </a>
                                        <ul className="dropdown-menu ">
                                            <li><Link to="#"><i className=" icon-bargraph"></i> Dashboard</Link></li>
                                            {/* <li><a href="#"><i className=" icon-gears"></i> Profile Setting</a></li>
                                            <li><a href="#"><i className="icon-heart"></i> Questions</a></li> */}
                                            <li><Link to="#"><i className="icon-lock"></i> Logout</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-default">
                    <div className="container">
                    <div className="navbar-header">
                        <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">
                            <img alt="" src={this.APP_LOGO_BG_IMAGE_PATH} width="100" height="80"/>
                        </Link>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                        <li className="hidden-sm">
                            <Link to="#">How  It Works</Link>
                        </li>
                        <li><Link to="/questions">Browse Questions</Link>
                        </li>
                        <li>
                            <div className="btn-nav">
                                <Link className="btn btn-primary btn-small navbar-btn" to="#">Post Question</Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
