import React, {Component} from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

class Machine extends Component {

    render() {
        const {status, remaining_time, id, machineType} = this.props;
        let icon = "icon-available";
        let top = "hi";
        let Machines = createFromIconfontCN({
            scriptUrl: "//at.alicdn.com/t/font_2003258_sh0kybrk45g.js", // 在 iconfont.cn 上生成
        });
        if (machineType === "washer"){
            if (status === "available"){
                icon = "icon-washer-available";
                top = "Available";
            }else if (status === "using"){
                icon = "icon-washer-using";
                top = remaining_time;
            }else if (status === "finished"){
                icon = "icon-washer-finished";
                top = "Finished!";
            }else if (status === "occupied"){
                icon = "icon-washer-occupied";
                top = remaining_time;
            }else {
                icon = "icon-washer-occupied";
                top = "Damaged";
            }
        }else {
            if (status === "available"){
                icon = "icon-dryer-available";
                top = "Available";
            }else if (status === "using"){
                icon = "icon-dryer-using";
                top = remaining_time;
            }else if (status === "finished"){
                icon = "icon-dryer-finished";
                top = "Finished!";
            }else if (status === "occupied"){
                icon = "icon-dryer-occupied";
                top = remaining_time;
            }else {
                icon = "icon-dryer-occupied";
                top = "Damaged";
            }
        }


        return (
            <div className="machines">
                <p className="top_line">{top}</p>
                <Machines type={icon} style={{ fontSize: '90px', marginLeft: '7px' }}/>
                <p className="id-number">ID: {id}</p>
            </div>
        );
    }
}

export default Machine;