import React, {Component} from 'react';
import axios from 'axios';
import '../styles/Report.css'

class Report extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : this.props.firstName,
            lastName : this.props.lastName,
            phone: this.props.phone,
            machineId : this.props.machineId,
            issue: ''
        }
    }
    render() {
        return (
 
            <div className="container">
                <form onSubmit = {(e) => this.forSubmit(e)}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstName" placeholder="Your name.." value = {this.state.firstName} 
                    onChange={e => this.setState({ firstName: e.target.value})}></input>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastName" placeholder="Your last name.." value = {this.state.lastName} 
                    onChange={e => this.setState({ lastName: e.target.value})}></input>

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Your phone number.." value = {this.state.phone}
                    onChange={e => this.setState({ phone: e.target.value})}></input>
                    
                    <label htmlFor="machineId"> Machine ID</label>
                    <input type="text" id="machineId" name="machineId" placeholder={this.state.machineId} value = {this.state.machineId}
                    onChange={e => this.setState({ lastName: e.target.value})}></input>

                    <label htmlFor="issue">Issue</label>
                    <textarea id="issue" name="issue" placeholder="Write down the issue.." 
                        onChange={e => this.setState({ issue: e.target.value})}></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
    forSubmit = (e) => {
        // prevent the from default action
        e.preventDefault();
        let data = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            phone: this.state.phone,
            machineId : this.state.machineId,
            issue: this.state.issue
        }
        console.log(data);
        axios.post('API_URI', data)
        .then(res => {
            console.log("sent")
        })
        .catch(() => {
            console.log("Message not sent")
        })
    }
}

export default Report;