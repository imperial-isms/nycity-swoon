import React, { Component } from 'react';
import Card from '../../components/Card';
import BarChart from '../../components/DataViz/BarChart';

class EventCard extends Component {
    render() {
        const { img, title, street, city, state, zipcode, date, timeStart, registrations, venueCapacity } = this.props;
        return (
            <Card style={{margin: 15}}>
                <div style={{width: '100%', boxSizing: 'border-box'}}>
                    <img style={{width: '100%'}} src={img} alt={title}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: 15}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px'}}>
                        <div display={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <p style={{...styles.title}}>{title}</p>
                            <p style={{...styles.address}}>{street}</p>
                            <p style={{...styles.address}}>{city}, {state} {zipcode}</p>
                        </div>
                        <div>
                            <p style={{...styles.date}}>{date}</p>
                            <p style={{...styles.time}}>{timeStart}</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column',}}>
                        <p style={{...styles.title, fontSize: '12px',}}>Registration</p>
                        <BarChart 
                            categories={[
                                { women: registrations.women.length },
                                { men: registrations.men.length }                                
                            ]}
                            maxCount={venueCapacity.availableTwoTops}
                        />
                    </div>
                </div>
            </Card>
        );
    }
}
const styles={
    imageContainer: {
        display: 'flex',
        width: 'inherit',
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