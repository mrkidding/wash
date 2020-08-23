import React, {Component} from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import {TOKEN_KEY, USER_NAME} from '../constants';
import '../styles/App.css';

class App extends Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
        name: localStorage.getItem(USER_NAME),
    }

    handleLoginSucceed = (token, values) => {
        console.log(values)
        localStorage.setItem(TOKEN_KEY, token)
        localStorage.setItem(USER_NAME, values.username)
        this.setState({isLoggedIn: true, name: values.username});
    }
    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_NAME);
        this.setState({isLoggedIn: false, values: null});
    }

    render() {
        return (
            <div className="App">
                <Header handleLogout={this.handleLogout}
                        isLoggedIn={this.state.isLoggedIn}
                />

                <Main handleLoginSucceed={this.handleLoginSucceed}
                      isLoggedIn={this.state.isLoggedIn}
                      user_id={this.state.name}
                />

                <Footer />
            </div>
        )
    }
}

export default App;
