import React, { Component } from 'react';
import Top10Populator from './routes/Top10Populator/Top10Populator';
import Bokeh from '../../assets/images/boke.png'

class Client extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRoute: ''
        }
    }

    render() {
        return (
            <div style={{...styles.container}}>
                <Top10Populator/>
            </div>
        );
    }
}

const styles={
    container: {        
        position: 'fixed',
        top: 0, bottom: 0,
        left: 0, right: 0,     
        backgroundImage: `url('${Bokeh}')`,
        backgroundSize: 'cover',
        minWidth: '100vw', minHeight: '100vh',
    },

    button: {
        fontSize: 15, fontWeight: 'bold',
        color: 'rgba(63, 162, 247, 0.99)',
        outline: 'none', border: 'none', background: 'none',
    }
}

export default Client;