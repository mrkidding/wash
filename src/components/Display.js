import React, {Component} from 'react';
import Machine from "./Machine";
class Display extends Component {
    render() {
        let {machineList, choosen, machineType} = this.props;
        if (choosen !== "all") {
            machineList = machineList.filter((machine) => {
                return machine.status === choosen;
                }
            )
        }

        let MachineDom = null;
        MachineDom = (
                <div className="Display">
                {
                    machineList.map((machine) => {
                        return (
                            // 对map 循环出来的每个属性插入标签元素
                            <Machine status={machine.status} remaining_time={machine.remaining_time} id={machine.id} machineType={machineType}/>
                            )
                    })
                }
                </div>
        )
        return (
            <div>
                {MachineDom}
            </div>
        );
    }
}
export default Display;