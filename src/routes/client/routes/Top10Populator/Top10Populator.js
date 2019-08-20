import React, { Component } from 'react';
import Swipeable from "react-swipy";
import UserCardTall from './UserCardTall';


class Top10Populator extends Component {

    render() {        
        
        const { top10Count, currentList, addToTop10, remove } = this.props;
        const htmlCards = [];
        if ( !currentList ) {return}
        
        currentList.map(attendee => {            
            return htmlCards.push(        
              <UserCardTall 
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
                {htmlCards.length !== 0 ? (                        
                    <div>                                                                                    
                        <Swipeable                                 
                            onSwipe={(direction) => addToTop10(direction, currentList[0])}
                            onAfterSwipe={ remove }
                            buttons={
                                ({left, right}) => (
                                    <div style={{}}>
                                        {/* <Button onClick={left}>Reject</Button>
                                        <Button onClick={right}>Accept</Button> */}
                                    </div>
                                )
                            }
                        >
                            {htmlCards[0] ? htmlCards[0] : null}
                        </Swipeable>
                        {currentList.length !== 1 ? 
                            <UserCardTall 
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
                                    top: 0, bottom: 0,
                                    left: 0, right: 0,
                                    margin: 'auto', zIndex: -1
                                }}
                            /> 
                            : <div/>
                        } 
                                
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
        width: 375, height: 812,
        position: 'fixed', 
        top: 0, bottom: 0,
        left: 0, right: 0,
        margin: 'auto',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
    }
}

export default Top10Populator;