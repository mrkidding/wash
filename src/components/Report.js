import React, {Component} from 'react';
import axios from 'axios';
import 'antd/dist/antd.css'
import '../styles/Report.css'

class Report extends Component {
    constructor(props){
        super(props);
        this.state = {
            item_id : this.props.id,
            issueType:'occupied',
            issue: ''
        }
    }
    render() {
        console.log(this.props.location);
        return (
 
            <div className="container">
                <form onSubmit = {(e) => this.forSubmit(e)}>
                    
                    <label htmlFor="item_id"> Machine ID</label>
                    <input type="text" id="item_id" name="item_id" placeholder={this.state.item_id} value = {this.state.item_id}
                    onChange={e => this.setState({ item_id: e.target.value})}></input>

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
            item_id : this.state.item_id,
            issueType: this.state.issueType,
            issue: this.state.issue
        }
        console.log(data);
        axios.post('http://localhost:8080/washer/report', data)
        .then(res => {
            console.log("sent")
        })
        .catch(() => {
            console.log("Message not sent")
        })
    }
}

export default Report;