import React, { Component } from 'react';
import Swipeable from "react-swipy";
import UserCard from './UserCard';
import Aarav from '../../../../assets/images/attendees/image-6.png'
import Jason from '../../../../assets/images/attendees/image-5.png'

const fetchEventAttendees = [
    {
        id: 'j3lakwj3jf',
        firstName: 'Aarav',
        lastName: ' Shankar',
        images: [Aarav],
        age: 26,
        location: 'Prospect Heights, Brooklyn',
        headline: `Don't lose focus.`,
        about: 'Journalism might be my ikigai, but I’ll never turn down a proper bahn mi sandwich...pass the sriracha!'
    },
    {
        id: 'j3lakwj3jf',
        firstName: 'Jason',
        lastName: ' Drake',
        images: [Jason],
        age: 26,
        location: 'Prospect Heights, Brooklyn',
        headline: `Don't lose focus.`,
        about: 'Journalism might be my ikigai, but I’ll never turn down a proper bahn mi sandwich...pass the sriracha!'
    },
    {
        id: 'j3lakwj3jf',
        firstName: 'Aarav',
        lastName: ' Shankar',
        images: [Aarav],
        age: 26,
        location: 'Prospect Heights, Brooklyn',
        headline: `Don't lose focus.`,
        about: 'Journalism might be my ikigai, but I’ll never turn down a proper bahn mi sandwich...pass the sriracha!'
    },
]


class Top10Populator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentList: fetchEventAttendees
        }
    }
    
    remove = () => {
        this.setState({
            currentList: this.state.currentList.slice(1, this.state.currentList.length),
        })
    };

    render() {        
        const { currentList } = this.state;
        const htmlCards = [];
        
        currentList.map(attendee => {            
            return htmlCards.push(        
              <UserCard 
                key={attendee["id"]}
                firstName={attendee["firstName"]}
                lastName={attendee["lastName"]}
                images={attendee["images"]}
                age={attendee["age"]}
                location={attendee["location"]}
                headline={attendee['headline']}                
              />
                
            )
          })

        
        return (                    
                <div style={styles.container}>
                    {htmlCards.length > 0 ? (
                        <div>                                                                                    
                            <Swipeable onAfterSwipe={this.remove} 
                                buttons={
                                    ({left, right}) => (
                                        <div style={{}}>
                                            {/* <Button onClick={left}>Reject</Button>
                                            <Button onClick={right}>Accept</Button> */}
                                        </div>
                                    )
                                }
                            >
                                {htmlCards.length > 1 && htmlCards[0]}
                            </Swipeable>
                            {htmlCards.length > 1 && <UserCard 
                                key={currentList[1]["id"]}
                                firstName={currentList[1]["firstName"]}
                                lastName={currentList[1]["lastName"]}
                                images={currentList[1]["images"]}
                                age={currentList[1]["age"]}
                                location={currentList[1]["location"]}
                                headline={currentList[1]['headline']}
                                style={{
                                    position: 'absolute',
                                    width: '80%',
                                    top: 0, bottom: 0,
                                    left: 0, right: 0,
                                    margin: 'auto', zIndex: -1
                                }}
                            />}
                                
                        </div>
                    ) : (
                        <div/>
                    )}
                </div>                    
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'rgba(0,255,0,.2)',
        width: 375, height: 812,
        position: 'fixed', 
        top: 0, bottom: 0,
        left: 0, right: 0,
        margin: 'auto',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',        
    }
}

export default Top10Populator;