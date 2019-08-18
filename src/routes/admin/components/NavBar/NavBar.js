import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav style={{...styles.container, height: this.props.header.height, ...this.props.style}}>                
                <h1 style={{...styles.header}}>{this.props.header}</h1>
                {this.props.children}
            </nav>
        );
    }
}

const styles={
    container: {                
        boxSizing: 'border-box',
        width: '100vw', height: '99px',
        backgroundColor: '#fff',
        padding: '30px',
        boxShadow: '1.5px 1.5px 6px rgba(0, 0, 0, 0.25)',

        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        // position: 'absolute', top: 0,
    },
    header: {        
        fontSize: '42px',
        fontWeight: 300,                        
        color: 'rgba(61, 61, 61, 0.99)'
    }
}

export default NavBar;