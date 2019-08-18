import React, { Component } from 'react';

class Content extends Component {
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
        boxSizing: 'border-box',
        width: '100%', height: '100%',
        padding: 18,

    }
}

export default Content;