import React, { Component } from 'react';
import Card from '../../components/Card';

class EventCard extends Component {
    render() {
        return (
            <Card style={{margin: 15}}>
                <div>
                    <img src={this.props.img} alt={this.props.title}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: 15}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                        <div display={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <p style={{...styles.title}}>{this.props.title}</p>
                            <p style={{...styles.address}}>{this.props.street}</p>
                            <p style={{...styles.address}}>{this.props.city}, {this.props.state} {this.props.zipcode}</p>
                        </div>
                        <div>
                            <p style={{...styles.date}}>{this.props.date}</p>
                            <p style={{...styles.time}}>{this.props.timeStart}</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{...styles.title, fontSize: '12px',}}>Registration</p>
                    </div>
                </div>
            </Card>
        );
    }
}
const styles={
    imageContainer: {
        width: '100%', height: '24%',
    },
    title: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '18px',
        color: 'rgba(61, 61, 61, 0.99)',
    },
    address: {
        fontSize: '15px',
        color: 'rgba(61, 61, 61, 0.66)',
    },
    date: {
        fontSize: '15px',
        textAlign: 'right',
    },
    time: {
        fontSize: '15px',
        color: 'rgba(61, 61, 61, 0.66)',
        textAlign: 'right',
    },
}

export default EventCard;