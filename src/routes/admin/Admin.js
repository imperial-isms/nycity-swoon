import React, { Component } from 'react';
import EventContainer from './routes/Events'
import NavBar from './components/NavBar'

class Admin extends Component {
    render() {
        return (
            <div style={{...styles.container}}>
                <NavBar height={styles.navbar.height} header={'Active Events'}>
                    <button type="button">
                        + Add a New Event
                    </button>
                </NavBar>
                <EventContainer/>
            </div>
        );
    }
}

const styles={
    container: {
        height: '100%',
    },
    navbar: {
        height: '99px',
    }
}

export default Admin;