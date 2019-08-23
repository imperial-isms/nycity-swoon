import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import UserCardWide from './UserCardWide';

class Top10Sorter extends Component {
    constructor(props) {
        super(props)
        this.state= {
            top10: []
        }
    }
    onDragEnd = (dragResult) => {
        if (dragResult.destination === null) { return }

        const top10List = this.props.top10List;
        const { source, destination } = dragResult;

        top10List.splice(destination.index,0,top10List.splice(source.index,1)[0])


    }

    render() {                
        const { top10List } = this.props;
        return (
            
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <div style={styles.container}>
                    <div style={{...styles.headerContainer}}>
                        <p style={{...styles.headerText}}>
                            Top 10
                        </p>
                    </div>
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
                </div>
            </DragDropContext>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'rgba(255,255,255, .12)',
        maxWidth: 375, height: '100vh',
        position: 'absolute', 
        top: 0, bottom: 0,
        left: 0, right: 0,
        margin: 'auto', padding: 18,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-start',
        overflowY: 'scroll',
    },
    headerContainer: {
        width: '100%', 
        backgroundColor: 'rgba(255,255,255, .12)',         
        display: 'flex', justifyContent: 'center', alignItems: 'center', 
        padding: '18px 0px', 
        marginBottom: '18px', 
        borderRadius: '3px',
        border: '1px solid rgba(0, 0, 0, 0.12)', 
    },
    headerText: {
        fontSize: '36px', fontWeight: 'bold', 
        color: '#fff',
    }
}

export default Top10Sorter;