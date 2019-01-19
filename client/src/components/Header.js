import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component{

    render(){
        return(
            <nav >
                <div className="nav-wrapper teal">
                    <a href="#" className="brand-logo white-text green">Everyday Note</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.props.currentUser?
                            <div>
                                <li><img style={{'marginTop':  '5px'}} src={this.props.currentUser.image} /></li>
                                <li>{this.props.currentUser.userName}</li>
                                <li className={"red"}><a href="/api/logout">Logout</a></li>
                            </div>
                            :
                            <li className={"red"}><a href="/auth/google">Login with google</a></li>
                        }

                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return({
        currentUser : state.currentUser
    })
}

export default connect(mapStateToProps)(Header);