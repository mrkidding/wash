import React, {Component} from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from "./Footer";
import {TOKEN_KEY} from '../constants';
import '../styles/App.css';

class App extends Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
    }

    handleLoginSucceed = (token) => {
        localStorage.setItem(TOKEN_KEY, token)
        this.setState({isLoggedIn: true});
    }
    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({isLoggedIn: false});
    }

    render() {
        return (
            <div className="App">
                <Header handleLogout={this.handleLogout}
                        isLoggedIn={this.state.isLoggedIn}
                />

                <Main handleLoginSucceed={this.handleLoginSucceed}
                      isLoggedIn={this.state.isLoggedIn}
                />

                <Footer />
            </div>
        )
    }
}

export default App;
