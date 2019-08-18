import React, { Component } from 'react';

class Bar extends Component {
    
    render() {
        return (
            <div style={{marginBottom: '3px', ...this.props.style}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{...styles.label}}>{this.props.label}</p>
                    <p style={{...styles.label, display: 'flex'}}>{this.props.currentCount}/{this.props.maxCount}</p>
                </div>
                <div style={{...styles.bars}}>                
                    <div style={{...styles.bar, backgroundColor: this.props.baseColor}} />
                    <div style={{...styles.bar, width: this.props.progress, backgroundColor: this.props.progressColor,}} />
                </div>                
            </div>
        );
    }
}

const styles = {
    bars: {
        position: 'relative',
        height: '3px',
        width: '100%',        
    },
    label: {
        color: 'rgba(61, 61, 61, 0.66)',
        fontSize: '12px',
    },
    bar: {
        position: 'absolute',
        top: 0, bottom: 0,
        width: 'inherit',
    }
}

export default Bar;