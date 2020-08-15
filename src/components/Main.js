import React, {Component} from 'react';
import {Register} from './Register';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './Login';
import NavBar from "./NavBar";
import Report from "./Report";

class Main extends Component {
    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/washer"/> :
            <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    }

    getWasher = () => {
        return this.props.isLoggedIn ? <NavBar machineType="washer"/> :
            <Redirect to="/login"/>;
    }
    getDryer = () => {
        return this.props.isLoggedIn ? <NavBar machineType="dryer"/> :
            <Redirect to="/login"/>;
    }
    getReport = () => {
        return this.props.isLoggedIn ? <Report firstName="" phone=""/> :
            <Redirect to="/login"/>;
    }

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/login" render={this.getLogin}/>

                    <Route path="/register" component={Register}/>

                    <Route path="/washer" render={this.getWasher}/>

                    <Route path="/dryer" render={this.getDryer}/>

                    <Route path="/report" render={this.getReport}/>

                    <Route render={this.getLogin}/>

                </Switch>

            </div>
        );
    }
}

export default Main;


