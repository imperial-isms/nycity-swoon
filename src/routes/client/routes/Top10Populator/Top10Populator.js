import React, { Component } from 'react';
import Swipeable from "react-swipy";
import UserCard from './UserCard';
import Aarav from '../../../../assets/images/attendees/image-6.png'
import Jason from '../../../../assets/images/attendees/image-5.png'
import Chris from '../../../../assets/images/attendees/image-4.png'
import Antoni from '../../../../assets/images/attendees/image-3.png'
import Mark from '../../../../assets/images/attendees/image-2.png'
import Steven from '../../../../assets/images/attendees/image-1.png'

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
        location: 'SoHo, Manhattan',
        headline: `Just keep swimming.`,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 'j3lakwj3jf',
        firstName: 'Chris',
        lastName: ' Smith',
        images: [Chris],
        age: 31,
        location: 'Prospect Heights, Brooklyn',
        headline: `Volutpat blandit.`,
        about: 'Orci nulla pellentesque dignissim enim sit amet venenatis. Elementum integer enim neque volutpat ac. '
    },
    {
        id: 'j3lakwj3jf',
        firstName: 'Antoni',
        lastName: ' Nowak',
        images: [Antoni],
        age: 23,
        location: 'Greenpoint, Brooklyn',
        headline: `Morbi non arcu risus quis.`,
        about: 'Tempor orci dapibus ultrices in iaculis nunc sed augue. Eget felis eget nunc lobortis mattis aliquam. '
    },
    {
        id: 'j3lakwj3jf',
        firstName: 'Mark',
        lastName: ' Sousa',
        images: [Mark],
        age: 26,
        location: 'Hoboken, New Jersey',
        headline: `Ultrices in iaculis nunc sed`,
        about: 'Sed vulputate odio ut enim blandit volutpat maecenas volutpat. '
    },
    {
        id: 'j3lakwj3jf',
        firstName: 'Steven',
        lastName: ' Madison',
        images: [Steven],
        age: 26,
        location: 'Carroll, Brooklyn',
        headline: ` Auctor eu augue ut lectus.`,
        about: 'Ullamcorper malesuada proin libero nunc consequat interdum varius sit.'
    },
]


class Top10Populator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentList: fetchEventAttendees,            
        }
    }
    
    remove = () => {
        this.setState({
            currentList: this.state.currentList.slice(1, this.state.currentList.length),
        })
    };


    render() {        
        const { currentList } = this.state;
        const { addToTop10 } = this.props;
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
                about={attendee['about']}                
              />
                
            )
          })

        
        return (                    
                <div style={styles.container}>
                    {htmlCards.length > 0 ? (
                        <div>                                                                                    
                            <Swipeable 
                                onBeforeSwipe={((a,b,direction) => {addToTop10(direction, currentList[0])} )}
                                onAfterSwipe={this.remove} 
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
                                about={currentList[1]['about']}
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