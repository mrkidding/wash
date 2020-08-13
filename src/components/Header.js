import React, {Component} from 'react';
import logo from '../assets/xiyi.svg';
import { LogoutOutlined, FormOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import {Menu} from 'antd';
import {Link } from 'react-router-dom';
class Header extends Component {


    render() {
        const IconFont = createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_2003248_r1txerpd0y.js', // 在 iconfont.cn 上生成
        });
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p className="title">
                    WashHelper
                </p>
                <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ fontSize: '16px' }}>
                    <Menu.Item key="1" icon={<IconFont type="icon-shuidi" style={{ fontSize: '17px' }}/>}>
                        <Link to="/washer">washer</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<IconFont type="icon-honggan1" style={{ fontSize: '17px' }}/>}>
                        <Link to="/dryer">dryer</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FormOutlined />}>
                        <Link to="/report">report</Link>
                    </Menu.Item>
                </Menu>
                {/*<ul id="menu" className="main-menu">
                    <li>washer</li>
                    <li>dryer</li>
                    <li>report</li>
                </ul>*/}

                <a className="logout" >
                    <LogoutOutlined />{'  '}Logout
                </a>
            </header>
        );
    }
}

export default Header;