import React, {Component} from 'react';
import axios from 'axios';
import 'antd/dist/antd.css'
import '../styles/Report.css'

class Report extends Component {
    constructor(props){
        super(props);
        this.state = {
            machineId : this.props.machineId,
            issueType:'occupied',
            issue: ''
        }
    }
    render() {
        return (
 
            <div className="container">
                <form onSubmit = {(e) => this.forSubmit(e)}>
                    
                    <label htmlFor="machineId"> Machine ID</label>
                    <input type="text" id="machineId" name="machineId" placeholder={this.state.machineId} value = {this.state.machineId}
                    onChange={e => this.setState({ lastName: e.target.value})}></input>

                    <label>
                        Select the issue type:
                        <select name="issueType" id="issueType" value = {this.state.value} onChange = {e => this.setState({ issueType: e.target.value})}>
                            <option value="occupied">occupied</option>
                            <option value="broken">broken</option>
                            <option value="other">other</option>
                        </select>
                    </label>

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
            machineId : this.state.machineId,
            issueType: this.state.issueType,
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