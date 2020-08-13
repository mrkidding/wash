import React, {Component} from 'react';
import { Tabs } from 'antd';
import xiyiji from '../assets/xiyiji.svg';
import available_logo from '../assets/available_logo.svg';
import using_logo from '../assets/using_logo.svg';
import finished_logo from '../assets/finished_logo.svg';
import occupied_logo from '../assets/occupied_logo.svg';
import Display from "./Display";
const { TabPane } = Tabs;

class NavBar extends Component {
    handleClick = e => {
        console.log('click ', e);
    };
    state = {
        washerList: [
            {
                status: "available",
                remaining_time:null,
                id: "12"
            }, {
                status: "using",
                remaining_time:"16min",
                id: "45"
            }, {
                status: "occupied",
                remaining_time:"17min",
                id: "2345"
            },{
                status: "damaged",
                remaining_time:null,
                id: "145"
            },{
                status: "finished",
                remaining_time:null,
                id: "15"
            },{
                status: "available",
                remaining_time:null,
                id: "12"
            }, {
                status: "using",
                remaining_time:"16min",
                id: "45"
            }, {
                status: "occupied",
                remaining_time:"17min",
                id: "2345"
            },{
                status: "damaged",
                remaining_time:null,
                id: "145"
            },{
                status: "finished",
                remaining_time:null,
                id: "15"
            },{
                status: "available",
                remaining_time:null,
                id: "12"
            }, {
                status: "using",
                remaining_time:"16min",
                id: "45"
            }, {
                status: "occupied",
                remaining_time:"17min",
                id: "2345"
            },{
                status: "damaged",
                remaining_time:null,
                id: "145"
            },{
                status: "finished",
                remaining_time:null,
                id: "15"
            }

        ],
        dryerList: [
            {
                status: "available",
                remaining_time:null,
                id: "56547"
            }, {
                status: "using",
                remaining_time:"16min",
                id: "45"
            }, {
                status: "occupied",
                remaining_time:"17min",
                id: "2345"
            },{
                status: "damaged",
                remaining_time:null,
                id: "145"
            },{
                status: "finished",
                remaining_time:null,
                id: "15"
            }
        ],
    };
    render() {
        const {machineType} = this.props;
        let machineList = null;
        if (machineType === "washer"){
            machineList = this.state.washerList;
        }else {
            machineList = this.state.dryerList;
        }
        return (
            <Tabs defaultActiveKey="1" tabPosition="left" size="large">
                <TabPane
                    tab={
                        <span>
                            <img src={xiyiji} className="xiyiji" alt="logo"/>
                            All machines
                        </span>
                    }
                    key="1"
                >
                    <Display machineList={machineList} choosen="all" machineType={machineType}/>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <img src={available_logo} className="available_logo" alt="logo"/>
                            Available
                        </span>
                    }
                    key="2"
                >
                    <Display machineList={machineList} choosen="available" machineType={machineType}/>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <img src={using_logo} className="using_logo" alt="logo"/>
                            Using
                        </span>
                    }
                    key="3"
                >
                    <Display machineList={machineList} choosen="using" machineType={machineType}/>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <img src={finished_logo} className="finished_logo" alt="logo"/>
                            Finished
                        </span>
                    }
                    key="4"
                >
                    <Display machineList={machineList} choosen="finished" machineType={machineType}/>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <img src={occupied_logo} className="occupied_logo" alt="logo"/>
                            Occupied
                        </span>
                    }
                    key="5"
                >
                    <Display machineList={machineList} choosen="occupied" machineType={machineType}/>
                </TabPane>
            </Tabs>
        );
    }
}

export default NavBar;