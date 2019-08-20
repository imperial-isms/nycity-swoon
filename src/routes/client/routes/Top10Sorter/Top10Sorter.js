import React, { Component } from 'react';
import UserCardWide from './UserCardWide';

class Top10Sorter extends Component {

    render() {                
        const { top10List, sortTop10 } = this.props;
        return (                    
                <div style={styles.container}>
                    {
                        top10List.map(attendee => {

                            return (
                                <UserCardWide 
                                key={attendee["id"]}
                                firstName={attendee["firstName"]}
                                lastName={attendee["lastName"]}
                                images={attendee["images"]}
                                age={attendee["age"]}
                                location={attendee["location"]}
                                headline={attendee['headline']}
                                about={attendee['about']}                
                                />
                            )                            
                        })
                    }
                </div>                    
        );
    }
}

const styles = {
    container: {
        width: 375, height: '90vh',
        position: 'fixed', 
        top: 0, bottom: 0,
        left: 0, right: 0,
        margin: 'auto',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-',
    }
}

export default Top10Sorter;