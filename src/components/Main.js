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
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route path="/washer" render={this.getWasher}/>
                    <Route path="/dryer" render={this.getDryer}/>
                    <Route path="/report" component={Report}/>
                    <Route path="/" render={this.getWasher}/>
                </Switch>
            </div>
        );
    }
}

export default Main;