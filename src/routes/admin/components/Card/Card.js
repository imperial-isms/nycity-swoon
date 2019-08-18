import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                {this.props.children}
            </div>
        );
    }
}

const styles={
    container: {
        overflow: 'hidden',
        boxShadow: '1.5px 1.5px 6px rgba(0, 0, 0, 0.25)',
        borderRadius: '3px',
        backgroundColor: '#fff',

        display: 'flex', flexDirection: 'column',        
    }
}

export default Card;