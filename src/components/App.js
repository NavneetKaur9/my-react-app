import React from 'react';
import Button from './common/Button';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';
import PasswordInput from './common/PasswordInput';

class App extends React.Component {

    state = {
        theme: lightTheme,
        showPassword: false
    }

    handleToggleTheme = () => {
        this.setState({
            theme: (this.state.theme.id === "dark" ? lightTheme : darkTheme)
        });
    }

    handleTogglePassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    }

    render() {
        console.log('this.state::', this.state);

        return (
            <div className="App">
                <h1>Basics</h1>

                <Button>
                    <div style={{ color: 'red' }}>
                        Simple button
                    </div>
                </Button>
                <br />
                <br />
                <Button primary>
                    <div >
                        Primary button
                    </div>
                </Button>

                <hr />

                <h2>Theming</h2>

                <h6>
                    current theme: {this.state.theme.id}
                </h6>
                <ThemeProvider theme={this.state.theme}>
                    <Button onClick={this.handleToggleTheme}>
                        Toggle button to change theme
                    </Button>
                </ThemeProvider>

                <hr />

                <h2>Adding attributes to styled component</h2>
                Password: <PasswordInput showPassword={this.state.showPassword} />
                <Button onClick={this.handleTogglePassword}>
                    {this.state.showPassword ? 'hide' : 'show'}
                </Button>
                <hr />
            </div>
        );
    }
}

export default App;