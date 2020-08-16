import React, {Component} from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Modal, Button, message} from 'antd';
import detail_picture from "../assets/detail_washer.jpg";
import {Link} from 'react-router-dom';

class Machine extends Component {
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
                <Machines type={icon}
                          style={{ fontSize: '90px', marginLeft: '7px' }}
                />
                <p className="id-number" onClick={this.showModal} >ID: {id}</p>
                <Modal
                    title="Details for this machine"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="left_detail_side">
                        <img className="detail_picture"
                             src={detail_picture}
                             alt="logo"
                        />
                    </div>
                    <div className="right_detail_side">
                        <b>SPEED QUEEN</b>
                        <p> {machineType} </p>
                        <p><b>Machine ID:</b>   {id} </p>
                        <p><b>Status:</b> {status} </p>
                        <p><b>Host:</b> someone using this machine </p>
                        <p><b>Remaining Time:</b>  {remaining_time} </p>
                        <Button className="reserveButton"
                                type="primary"
                                onClick={ () => {
                                    message.info('Reserve Successfully !!');
                                }}
                        >Reserve</Button>
                        <Link to="/report"
                              machineId={id}
                        ><Button className="reportButton">Report</Button></Link>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Machine;