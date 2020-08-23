import React, {Component} from 'react';
import { Tabs } from 'antd';
import xiyiji from '../assets/status_logo/xiyiji.svg';
import available_logo from '../assets/status_logo/available_logo.svg';
import using_logo from '../assets/status_logo/using_logo.svg';
import finished_logo from '../assets/status_logo/finished_logo.svg';
import occupied_logo from '../assets/status_logo/occupied_logo.svg';
import Display from "./Display";

const { TabPane } = Tabs;

class NavBar extends Component {
    handleClick = e => {
        console.log('click ', e);
    };
    /*
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
    };*/

    /*
    state = {
        washerList : null,
        dryerList : null
    }*/

    render() {
        const {machineType, machineList, user_id} = this.props;

        //machineList = this.state.washerList; // 暂时测试
        return (
            <Tabs  defaultActiveKey="1" tabPosition="left" size="large" >
                <TabPane
                    tab={
                        <span className="tab-text">
                            <img src={xiyiji} className="status-logo" alt="logo"/>
                            All machines
                        </span>
                    }
                    key="1"
                >
                    <Display machineList={machineList} choosen="all" machineType={machineType} user_id={user_id}/>
                </TabPane>
                <TabPane
                    tab={
                        <span className="tab-text">
                            <img src={available_logo} className="status-logo" alt="logo"/>
                            Available
                        </span>
                    }
                    key="2"
                >
                    <Display machineList={machineList} choosen="available" machineType={machineType} user_id={user_id}/>
                </TabPane>
                <TabPane
                    tab={
                        <span className="tab-text">
                            <img src={using_logo} className="status-logo" alt="logo"/>
                            Using
                        </span>
                    }
                    key="3"
                >
                    <Display machineList={machineList} choosen="using" machineType={machineType} user_id={user_id}/>
                </TabPane>
                <TabPane
                    tab={
                        <span className="tab-text">
                            <img src={finished_logo} className="status-logo" alt="logo"/>
                            Finished
                        </span>
                    }
                    key="4"
                >
                    <Display machineList={machineList} choosen="finished" machineType={machineType} user_id={user_id}/>
                </TabPane>
                <TabPane
                    tab={
                        <span className="tab-text">
                            <img src={occupied_logo} className="status-logo" alt="logo"/>
                            Occupied
                        </span>
                    }
                    key="5"
                >
                    <Display machineList={machineList} choosen="occupied" machineType={machineType} user_id={user_id}/>
                </TabPane>
            </Tabs>
        );
    }
}

export default NavBar;
