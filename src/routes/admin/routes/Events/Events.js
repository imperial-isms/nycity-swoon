import React, { Component } from 'react';
import Content from '../../components/Content'
import EventCard from './EventCard';

class Events extends Component {
    render() {
        const { events } = this.props;
        return (
            <Content style={{...styles.container}}>                
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                {
                    events.map( (eventObj) => {
                        
                        return (
                            <EventCard 
                                key={eventObj.uuid}
                                img={eventObj.images[0]} 
                                title={eventObj.title} 
                                street={eventObj.venue.address.street} 
                                city={eventObj.venue.address.city} 
                                state={eventObj.venue.address.state} 
                                zipcode={eventObj.venue.address.zipcode} 
                                date={eventObj.date} 
                                timeStart={eventObj.timeStart}                                
                                venueCapacity={{
                                    availableTwoTops: eventObj.venue.availableTwoTops,
                                    maxOccupancy: eventObj.venue.maxOccupancy,
                                    barSeating: eventObj.venue.barSeating,
                                }}
                                registrations={eventObj.attendees}
                            />
                        )
                    })
                }
                </div>

            </Content>
        );
    }
}

const styles={
    container: {
        boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column',
        width: '100%', height: '100%',
    }
}

export default Events;