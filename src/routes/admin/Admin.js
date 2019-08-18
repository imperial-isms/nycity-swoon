import React, { Component } from 'react';
import EventContainer from './routes/Events'
import NavBar from './components/NavBar'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRoute: ''
        }
    }
    handleEventCreate = () => {
        alert('Imagine this is a modal that creates a new event instance.')
    }

    render() {
        return (
            <div style={{...styles.container}}>
                <NavBar height={styles.navbar.height} header={'Active Events'}>
                    <button style={{...styles.button}} type="button" onClick={this.handleEventCreate}>
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
    },
    button: {
        fontSize: 15, fontWeight: 'bold',
        color: 'rgba(63, 162, 247, 0.99)',
        outline: 'none', border: 'none', background: 'none',
    }
}

export default Admin;