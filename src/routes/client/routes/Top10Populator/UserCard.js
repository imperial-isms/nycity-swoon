import React, { Component } from 'react';
import Card from '../../../admin/components/Card';

class UserCard extends Component {
    render() {
        const {firstName, lastName, images, age, location, headline, about} = this.props;
        
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
                <div style={{ flex: 1, padding: 18, }}>
                    <p style={{fontSize: '18px', fontWeight: 'bold', color: 'rgba(61, 61, 61, 0.99)', }} >{firstName} {lastName}, {age}</p>
                    <p style={{fontSize: '12px', fontWeight: 'regular', color: 'rgba(61, 61, 61, 0.99)', }} >{location}</p>
                    <p style={{fontSize: '15px', fontWeight: 'regular', color: 'rgba(61, 61, 61, 0.66)', fontStyle: 'italic', textAlign: 'center',  margin: '15px 0px',}} >"{headline}"</p>
                    <p style={{fontSize: '15px', fontWeight: 'bold', color: 'rgba(61, 61, 61, 0.99)', textDecoration: 'underline' }} >I'm About:</p>
                    <p style={{fontSize: '15px', fontWeight: 'regular', color: 'rgba(61, 61, 61, 0.66)', }} >{about}</p>

                </div>
            </Card>
        );
    }
}

export default UserCard;
