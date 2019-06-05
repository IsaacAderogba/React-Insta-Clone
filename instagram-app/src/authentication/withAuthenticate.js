import React from 'react';
import Login from '../components/Login/Login'

const withAuthenticate = App => {
    return class extends React.Component {
        render() {
            if(true) {
                return <Login />
            }
            return <App {...this.props} />;
        }
    }
}

export default withAuthenticate;