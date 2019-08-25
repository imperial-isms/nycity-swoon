import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import UserCardWide from './UserCardWide';

class Top10Sorter extends Component {
    constructor(props) {
        super(props)
        this.state= {

        }
    }


    render() {                
        const { top10List, reOrderList } = this.props;
        return (
            <div style={styles.container}>
            <div style={{...styles.headerContainer}}>
                <p style={{...styles.headerText}}>
                    Top 10
                </p>
            </div>
            <DragDropContext
                onDragEnd={reOrderList}
            >                
                <Droppable droppableId="attendeePool" type="attendee">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={{ backgroundColor: snapshot.isDraggingOver ? '#' : 'transparent' }}
                            {...provided.droppableProps}
                        >
                            {
                                top10List.map((attendee, index) => {

                                    return (
                                        
                                        <Draggable draggableId={`${index}`} index={index} key={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                
                                                    <UserCardWide 
                                                        key={attendee["id"]}
                                                        firstName={attendee["firstName"]}
                                                        lastName={attendee["lastName"]}
                                                        images={attendee["images"]}
                                                        age={attendee["age"]}
                                                        location={attendee["location"]}
                                                        headline={attendee['headline']}
                                                        about={attendee['about']}
                                                        style={{
                                                            transform: snapshot.isDragging ? 'rotate(-3deg)' : null,
                                                            boxShadow: snapshot.isDragging ? '1.5px 1.5px 12px rgba(0, 0, 0, 0.25)' : '1.5px 1.5px 6px rgba(0, 0, 0, 0.25)'
                                                        }}
                                                    />

                                                </div>
                                            )}
                                        </Draggable>

                                    )                            
                                })
                            }
                        </div>
                        

                    )}
                </Droppable>
                
            </DragDropContext>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'rgba(255,255,255, .12)',
        maxWidth: 375,
        // position: 'absolute',     
        margin: 'auto',
        padding: 18, paddingBottom: 18,    
    },
    headerContainer: {
        width: '100%', minHeight: 32,
        backgroundColor: 'rgba(255,255,255, .12)',         
        display: 'flex', justifyContent: 'center', alignItems: 'center', 
        padding: '18px 0px', 
        marginBottom: '18px', 
        borderRadius: '3px',
        border: '1px solid rgba(255,255,255, .12)',
    },
    headerText: {
        fontSize: '36px', fontWeight: 'bold', 
        color: '#fff',
    }
}

export default Top10Sorter;