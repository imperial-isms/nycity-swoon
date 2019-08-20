import React, { Component } from 'react';
import Card from '../../../admin/components/Card';

class UserCard extends Component {
    render() {
        const {firstName, lastName, images, age, location, headline} = this.props;
        
        return (
            <Card 
                style={{
                    height: '75vh',
                    margin: 18,
                    ...this.props.style
                    }}>
                <div style={{ flex: 2 }}>
                    <img style={{width: '100%'}} src={`${images[0]}`} alt='user'/>
                </div>
                <div style={{ flex: 1 }}>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{age}</p>
                    <p>{location}</p>
                    <p>{headline}</p>
                </div>
            </Card>
        );
    }
}

export default UserCard;