import React, {Component} from 'react';
import { Modal, Button, message} from 'antd';
import detail_picture from "../assets/detail_washer.jpg";
import {Link} from 'react-router-dom';
import icon_washer_available from  "../assets/machine_img/washer-available.svg";
import icon_washer_reserved from "../assets/machine_img/washer-reserved.svg";
import icon_washer_using from "../assets/machine_img/washer-using.svg";
import icon_washer_finished from "../assets/machine_img/washer-finished.svg";
import icon_washer_occupied from "../assets/machine_img/washer-occupied.svg";
import icon_dryer_available from "../assets/machine_img/dryer-available.svg";
import icon_dryer_reserved from "../assets/machine_img/dryer-reserved.svg";
import icon_dryer_using from "../assets/machine_img/dryer-using.svg";
import icon_dryer_finished from "../assets/machine_img/dryer-finished.svg";
import icon_dryer_occupied from "../assets/machine_img/dryer-occupied.svg";
import axios from "axios";

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
    Reserve = (e) => {
        e.preventDefault();
        console.log("single reserve");
        const url = "http://localhost:8080/washer/login";
        fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: "include",
        })
    }

    /*
      axios.get(url, {withCredentials: true, crossorigin: true})
          .then(response => {
              console.log(response);
              message.info('Reserve Successfully !!');
          })
          .catch(error => {
              console.log('err in reserve machine -> ', error);
          })

       */
    Start = () => {
        axios.defaults.withCredentials = true;

        const url = "http://localhost:8080/washer/login";
        axios.get(url, {withCredentials: true, crossorigin: true})
            .then(response => {
                console.log(response);
                message.info('Reserve Successfully !!');
            })
            .catch(error => {
                console.log('err in reserve machine -> ', error);
            })
    }

    Fetch = () => {
        axios.defaults.withCredentials = true;

        const url = "http://localhost:8080/washer/login";
        axios.get(url, {withCredentials: true, crossorigin: true})
            .then(response => {
                console.log(response);
                message.info('Reserve Successfully !!');
            })
            .catch(error => {
                console.log('err in reserve machine -> ', error);
            })
    }

    render() {
        const {status, id, machineType, machine} = this.props;
        //const brand = machine.brand;
        console.log(machine);
        let {remaining_time} = this.props;
        if (remaining_time < 0){
            remaining_time = "Not fetched"
        }else {
            remaining_time = remaining_time + " mins left"
        }
        let icon;
        let top;
        let buttonType = "reserve";
        let reserveVisual = true;
        if (machineType === "washer"){
            if (status === "available") {
                icon = icon_washer_available;
                top = "Available";
                reserveVisual = false;
                remaining_time = "Reserve now!"
            }else if (status === "reserved"){
                icon = icon_washer_reserved;
                top = "Start now!";
                buttonType = "start";
            }else if (status === "using"){
                icon = icon_washer_using;
                top = remaining_time;
            }else if (status === "finished"){
                icon = icon_washer_finished;
                top = "Finished!";
                buttonType = "fetch";
            }else if (status === "occupied"){
                icon = icon_washer_occupied;
                top = remaining_time;
            }else {
                icon = icon_washer_occupied;
                top = "Damaged";
            }
        }else {
            if (status === "available") {
                icon = icon_dryer_available;
                top = "Available";
                reserveVisual = false;
                remaining_time = "Reserve now";
            }else if (status === "reserved"){
                icon = icon_dryer_reserved;
                top = "Start now!";
                buttonType = "start";
            }else if (status === "using"){
                icon = icon_dryer_using;
                top = remaining_time;
            }else if (status === "finished"){
                icon = icon_dryer_finished;
                top = "Finished!";
                buttonType = "fetch";
            }else if (status === "occupied"){
                icon = icon_dryer_occupied;
                top = remaining_time;
            }else {
                icon = icon_dryer_occupied;
                top = "Damaged";
            }

        }
        let buttonDom;
        if (buttonType === "reserve") {
            buttonDom = (
                <Button className="reserveButton"
                        type="primary"
                        onClick={this.Reserve}
                        disabled={reserveVisual}
                >Reserve</Button>
            )
        }else if(buttonType === "start"){
            buttonDom = (
                <Button className="reserveButton"
                        type="danger"
                        onClick={this.Start}
                >Start</Button>
            )
        }else {
            buttonDom = (
                <Button className="reserveButton"
                        type="danger"
                        onClick={this.Fetch}
                >Fetch</Button>
            )
        }


        return (
            <div className="machines">
                <p className="top_line">{top}</p>
                <img src={icon} className="machineLogo" alt="logo" onClick={this.showModal}/>
                <p className="id-number"  >ID: {id}</p>
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
                        <p><b>{machine.brand}</b></p>
                        <p><b>Type:</b> {machine.type} </p>
                        <p><b>Machine ID:</b>   {id} </p>
                        <p><b>Status:</b> {status} </p>
                        <p><b>Host:</b> {machine.user_id} </p>
                        <p><b>Info:</b>  {remaining_time} </p>
                        {buttonDom}
                        <Link to={{pathname: 'report/', query:{id: id}}}
                        ><Button className="reportButton">Report</Button></Link>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Machine;