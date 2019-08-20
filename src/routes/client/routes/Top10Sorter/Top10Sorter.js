import React, { Component } from 'react';


class Top10Sorter extends Component {

    render() {                
        const { top10List } = this.props;
        return (                    
                <div style={styles.container}>
                    {console.log(top10List)}
                </div>                    
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'rgba(0,255,255,.5)',
        width: 375, height: 812,
        position: 'fixed', 
        top: 0, bottom: 0,
        left: 0, right: 0,
        margin: 'auto',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',        
    }
}

export default Top10Sorter;