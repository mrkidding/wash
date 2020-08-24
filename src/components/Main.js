import React, {Component} from 'react';
import {Register} from './Register';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './Login';
import NavBar from "./NavBar";
import Report from "./Report";
import {GET_ALL_MACHINES_URL} from "../constants";
import axios from "axios";


class Main extends Component {

    state = {
        washerList: null,
        dryerList: null,
    }
    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/washer"/> :
            <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    }

    getWasher = () => {
        return this.props.isLoggedIn ? <NavBar machineType="washer" machineList={this.state.washerList}  Refresh={this.getALLMachines}/> :
            <Redirect to="/login"/>;
    }
    getDryer = () => {
        return this.props.isLoggedIn ? <NavBar machineType="dryer" machineList={this.state.dryerList}  Refresh={this.getALLMachines}/> :
            <Redirect to="/login"/>;
    }
    getReport = () => {
        return this.props.isLoggedIn ? <Report firstName="" phone=""/> :
            <Redirect to="/login"/>;
    }

    getALLMachines = () => {   //We only have washer now. URL should be getallwasher

        const url = `${GET_ALL_MACHINES_URL}`;
        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.setState({
                    washerList: response.data.filter((machine) =>
                        machine.type === "washer"),
                    dryerList: response.data.filter((machine) =>
                        machine.type === "dryer"),
                })
            })
            .catch(error => {
                console.log('err in fetch machines -> ', error);
            })
    }
    generateTwoLists = () => {
        console.log(this.state.washerList)
        console.log(this.state.dryerList)
    }
    componentDidMount() {
        this.getALLMachines();
    }

    render() {
        this.generateTwoLists();
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


