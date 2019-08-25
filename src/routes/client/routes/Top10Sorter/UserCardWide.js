import React, { Component } from 'react';
import Card from '../../../admin/components/Card';

class UserCardWide extends Component {
    render() {
        const {firstName, lastName, images, age, location} = this.props;
        
        return (
            <Card 
                style={{
                    minHeight: '90px',
                    userSelect: 'none',
                    flexDirection: 'row',
                    marginBottom: 18,
                    ...this.props.style
                    }}>
                <div style={{ flex: .9, display: 'flex', flexDirection: 'column', padding: 6 }}>
                    <img draggable="false" style={{width: '100%'}} src={`${images[0]}`} alt='user'/>
                </div>
                <div style={{ flex: 2, padding: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                    <p style={{fontSize: window.innerWidth > 321 ? '18px' : '15px', fontWeight: 'bold', color: 'rgba(61, 61, 61, 0.99)', }} >{firstName} {lastName}, {age}</p>
                    <p style={{fontSize: window.innerWidth > 321 ? '12px' : '9px', fontWeight: 'regular', color: 'rgba(61, 61, 61, 0.99)', }} >{location}</p>                    
                </div>
            </Card>
        );
    }
}

export default UserCardWide;
