import React, {Component} from 'react';
import {Form, Input, Button, message} from 'antd';
import {API_ROOT} from '../constants';
import {Link} from 'react-router-dom';
import picture from "../assets/login_register.png";

class RegistrationForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                fetch(`${API_ROOT}/register`, {
                    method: 'POST',
                    body: JSON.stringify({
                        user_id: values.username,
                        phone_number: values.phone_number,
                        password: values.password,
                    }),
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.text();
                        }
                        throw new Error(response.statusText);
                    })
                    .then((data) => {
                        console.log('===== ', data);
                        if (data.toString().includes("User Already Exists")) {
                            message.success('User Already Exists.');
                        } else {
                            message.success('Registration succeed!');
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                        message.error('Registration failed.');
                    });
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;

        const formItemLayout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                span: 16,
                offset: 8,
            },
        };

        return (
            <div>
                <img src={picture} className="picture" alt="picture"/>
                <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register">
                    <Form.Item
                        label="Username"
                    >
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item
                        label="Phone number"
                    >
                        {getFieldDecorator('phone_number', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password className="password"/>)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className="register-form-button">
                            Register
                        </Button>
                        <p>I already have an account, go back to <Link to="/login">login</Link></p>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export const Register = Form.create({name: 'register'})(RegistrationForm);
