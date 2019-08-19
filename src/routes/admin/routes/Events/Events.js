import React, { Component } from 'react';
import Content from '../../components/Content'
import EventCard from './EventCard';

class Events extends Component {
    render() {
        const { events } = this.props;
        return (
            <Content>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                {
                    events.map( (eventObj) => {
                        
                        return (
                            <EventCard 
                                key={eventObj.id}
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


export default Events;