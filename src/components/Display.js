import React, {Component} from 'react';
import Machine from "./Machine";
import {USER_NAME} from "../constants";

class Display extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const user_id = localStorage.getItem(USER_NAME);
        let {machineList, choosen, machineType} = this.props;
        console.log(user_id);
        /*
        if (choosen !== "all") {
            machineList = machineList.filter((machine) => {
                    return machine.condition === choosen;
                }
            )
        }*/

        let MachineDom = null;
        if (machineList !== null){
            MachineDom = (
                <div className="Display">
                    {
                        machineList.map((machine) => {
                            let status;
                            let de= machine.end_time.replace(/\-/g, "/");
                            let de1 = new Date(de);
                            let dn = new Date();
                            let dd = de1.getTime() - dn.getTime();
                            let remaining_time = Math.round(dd/(60*1000));
                            if (machine.condition === "available"){
                                status = "available";
                            }else if (machine.condition === "damaged"){
                                status = "damaged";
                            }else {
                                if (user_id !== machine.user_id) {
                                    status = "occupied";
                                    console.log(remaining_time);
                                }else if (remaining_time < 0){
                                    status = "finished";
                                }else {
                                    status = "using";
                                }
                            }
                            if (status === choosen || choosen === "all"){
                                return (
                                    // 对map 循环出来的每个属性插入标签元素
                                    <Machine status={status}
                                             remaining_time={remaining_time}
                                             id={machine.item_id}
                                             machineType={machineType}
                                    />
                                )
                            }else {
                                return null;
                            }
                        })
                    }
                </div>
            )
        }

        return (
            <div>
                {MachineDom}
            </div>
        );
    }
}

export default Display;