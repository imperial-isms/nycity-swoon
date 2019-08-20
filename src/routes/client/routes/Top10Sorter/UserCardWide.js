import React, { Component } from 'react';
import Card from '../../../admin/components/Card';

class UserCardWide extends Component {
    render() {
        const {firstName, lastName, images, age, location, headline, about} = this.props;
        
        return (
            <Card 
                style={{
                    userSelect: 'none',
                    flexDirection: 'row',
                    marginBottom: 18,
                    ...this.props.style
                    }}>
                <div style={{ flex: 1 }}>
                    <img draggable="false" style={{width: '100%'}} src={`${images[0]}`} alt='user'/>
                </div>
                <div style={{ flex: 2, padding: 18, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                    <p style={{fontSize: '18px', fontWeight: 'bold', color: 'rgba(61, 61, 61, 0.99)', }} >{firstName} {lastName}, {age}</p>
                    <p style={{fontSize: '12px', fontWeight: 'regular', color: 'rgba(61, 61, 61, 0.99)', }} >{location}</p>                    
                </div>
            </Card>
        );
    }
}

export default UserCardWide;
