import React, { Component } from 'react';
import Top10Populator from './routes/Top10Populator/Top10Populator';
import Bokeh from '../../assets/images/boke.png'

class Client extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRoute: '',
            top10List: [],
        }
    }

    addToTop10 = (direction, person) => {
        console.log(direction, person)
        let top10List = this.state.top10List;
        if (direction === 'right') {
            top10List.push(person)
            this.setState({
                top10List,
            })
        }
        console.log(this.state.top10List)
    }

    render() {
        return (
            <div style={{...styles.container}}>
                <Top10Populator addToTop10={this.addToTop10}/>
            </div>
        );
    }


}

const styles={
    container: {        
        position: 'fixed',
        top: 0, bottom: 0,
        left: 0, right: 0,     
        backgroundImage: `url('${Bokeh}')`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: 18,
    },

    button: {
        fontSize: 15, fontWeight: 'bold',
        color: 'rgba(63, 162, 247, 0.99)',
        outline: 'none', border: 'none', background: 'none',
    }
}

export default Client;