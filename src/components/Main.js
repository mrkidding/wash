import React, {Component} from 'react';
import NavBar from "./NavBar";
import Report from "./Report";
import { Switch, Route} from 'react-router-dom';
class Main extends Component {
    getWasher = () =>{
        return <NavBar machineType="washer"/>;
    }
    getDryer = () =>{
        return <NavBar machineType="dryer"/>;
    }
    getReport = () => {
        return <Report firstName = "Jay"  phone = "1234567890" />;
    }
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route path="/washer" render={this.getWasher}/>
                    <Route path="/dryer" render={this.getDryer}/>
                    <Route path="/report" render = {this.getReport}/>
                    <Route path="/" render={this.getWasher}/>
                </Switch>
            </div>
        );
    }
}

export default Main;