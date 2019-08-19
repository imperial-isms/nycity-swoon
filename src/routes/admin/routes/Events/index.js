import React, { Component } from 'react';
import Events from './Events';
import Sanc from '../../../../assets/images/sanc.png';
import Jade from '../../../../assets/images/jade.png';
import Elevate from '../../../../assets/images/elevate.png';
import Fig from '../../../../assets/images/fig.png';

const fetchEvents = [
    {
        id: '81ddfb3f-46c7-442c-83e6-ee946cfa4366',
        title: 'Sanctum Sanctorum',
        images: [Sanc, Sanc, Sanc],
        venue: {
            address: {
                name: 'Sanctum Sanctorum',
                street: '177a Bleecker St.',
                city: 'New York',
                state: 'NY',
                zipcode: '10012'
            },
            maxOccupancy: 80,
            availableTwoTops: 24,
            barSeating: 30,
        },
        date: '10/13/19',
        timeStart: '3:00pm',
        timeEnd: '10:00pm',
        attendees: {
            men: [ 
                     '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                     '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                     '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                     '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                     '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                     '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
            ],
            women: [             
                     'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                     'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                     'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                     'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                     'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                     'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                     'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                     'b2ef3dab-3229-4d79-8439-5800d799cd3f',
            ],
        },

    },
    {
        id: '81123ffb3f-46c7-442c-83e6-ee946cfa4366',
        title: 'Jade',
        images: [Jade, Jade, Jade],
        venue: {
            address: {
                name: 'Jade',
                street: '173 Water St.',
                city: 'New York',
                state: 'NY',
                zipcode: '11206'
            },
            maxOccupancy: 100,
            availableTwoTops: 20,
            barSeating: 30,
        },
        date: '11/13/19',
        timeStart: '6:00pm',
        timeEnd: '10:00pm',
        attendees: {
            men: [ 
                
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                
            ],
            women: [ 
                
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',                
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                
            ],
        },

    },
    {
        id: '81ddfb3f-46c7-442c-83e6-341fasd',
        title: 'Fig',
        images: [Fig, Fig, Fig],
        venue: {
            address: {
                name: 'Fig',
                street: '102 Amsterdam Ave,',
                city: 'New York',
                state: 'NY',
                zipcode: '12000'
            },
            maxOccupancy: 60,
            availableTwoTops: 24,
            barSeating: 10,
        },
        date: '12/13/19',
        timeStart: '3:00pm',
        timeEnd: '10:00pm',
        attendees: {
            men: [ 
                
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                
            ],
            women: [ 
                
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                
            ],
        },

    },
    {
        id: '81ddfb3f-46c7-442c-afsd-ee946cfa4366',
        title: 'Elevate',
        images: [Elevate, Elevate, Elevate],
        venue: {
            address: {
                name: 'Elevate',
                street: '51 Crosby St.',
                city: 'New York',
                state: 'NY',
                zipcode: '10012'
            },
            maxOccupancy: 80,
            availableTwoTops: 40,
            barSeating: 30,
        },
        date: '09/13/19',
        timeStart: '3:00pm',
        timeEnd: '10:00pm',
        attendees: {
            men: [ 
                
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                
            ],
            women: [ 
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',
                '69f843f0-1fea-46e9-8ab8-9b5d911f7d79',                
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',
                'b2ef3dab-3229-4d79-8439-5800d799cd3f',            
            ],
        },

    },
   
]
class EventsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: fetchEvents,
        } 
    }
    render() {
        return (
            <div>
                <Events events={this.state.events}/>
            </div>
        );
    }
}

export default EventsContainer;