import React, { Component } from 'react';

import Top10Populator from './routes/Top10Populator/';
import Top10Sorter from './routes/Top10Sorter/';

import Bokeh from '../../assets/images/boke.png'
import Aarav from '../../assets/images/attendees/image-6.png'
import Jason from '../../assets/images/attendees/image-5.png'
import Chris from '../../assets/images/attendees/image-4.png'
import Antoni from '../../assets/images/attendees/image-3.png'
import Mark from '../../assets/images/attendees/image-2.png'
import Steven from '../../assets/images/attendees/image-1.png'

const fetchEventAttendees = [
    {
        id: 'j3lafdkwj3jf',
        firstName: 'Aarav',
        lastName: ' Shankar',
        images: [Aarav],
        age: 26,
        location: 'Prospect Heights, Brooklyn',
        headline: `Don't lose focus.`,
        about: 'Journalism might be my ikigai, but I’ll never turn down a proper bahn mi sandwich...pass the sriracha!'
    },
    {
        id: 'j3lvzxcvakwj3jf',
        firstName: 'Jason',
        lastName: ' Drake',
        images: [Jason],
        age: 26,
        location: 'SoHo, Manhattan',
        headline: `Just keep swimming.`,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 'j3lakwvzfvj3jf',
        firstName: 'Chris',
        lastName: ' Smith',
        images: [Chris],
        age: 31,
        location: 'Prospect Heights, Brooklyn',
        headline: `Volutpat blandit.`,
        about: 'Orci nulla pellentesque dignissim enim sit amet venenatis. Elementum integer enim neque volutpat ac. '
    },
    {
        id: 'j3lakwjnbcvn3jf',
        firstName: 'Antoni',
        lastName: ' Nowak',
        images: [Antoni],
        age: 23,
        location: 'Greenpoint, Brooklyn',
        headline: `Morbi non arcu risus quis.`,
        about: 'Tempor orci dapibus ultrices in iaculis nunc sed augue. Eget felis eget nunc lobortis mattis aliquam. '
    },
    {
        id: 'fffacvbnsdf',
        firstName: 'Mark',
        lastName: ' Sousa',
        images: [Mark],
        age: 26,
        location: 'Hoboken, New Jersey',
        headline: `Ultrices in iaculis nunc sed`,
        about: 'Sed vulputate odio ut enim blandit volutpat maecenas volutpat. '
    },
    {
        id: 'xcxcbdxfg',
        firstName: 'Steven',
        lastName: ' Madison',
        images: [Steven],
        age: 26,
        location: 'Carroll, Brooklyn',
        headline: ` Auctor eu augue ut lectus.`,
        about: 'Ullamcorper malesuada proin libero nunc consequat interdum varius sit.'
    },
    {
        id: 'j3lafdkwj3jf',
        firstName: 'Aarav',
        lastName: ' Shankar',
        images: [Aarav],
        age: 26,
        location: 'Prospect Heights, Brooklyn',
        headline: `Don't lose focus.`,
        about: 'Journalism might be my ikigai, but I’ll never turn down a proper bahn mi sandwich...pass the sriracha!'
    },
    {
        id: 'j3lvzxcvakwj3jf',
        firstName: 'Jason',
        lastName: ' Drake',
        images: [Jason],
        age: 26,
        location: 'SoHo, Manhattan',
        headline: `Just keep swimming.`,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 'j3lakwvzfvj3jf',
        firstName: 'Chris',
        lastName: ' Smith',
        images: [Chris],
        age: 31,
        location: 'Prospect Heights, Brooklyn',
        headline: `Volutpat blandit.`,
        about: 'Orci nulla pellentesque dignissim enim sit amet venenatis. Elementum integer enim neque volutpat ac. '
    },
    {
        id: 'j3lakwjnbcvn3jf',
        firstName: 'Antoni',
        lastName: ' Nowak',
        images: [Antoni],
        age: 23,
        location: 'Greenpoint, Brooklyn',
        headline: `Morbi non arcu risus quis.`,
        about: 'Tempor orci dapibus ultrices in iaculis nunc sed augue. Eget felis eget nunc lobortis mattis aliquam. '
    },
    {
        id: 'fffacvbnsdf',
        firstName: 'Mark',
        lastName: ' Sousa',
        images: [Mark],
        age: 26,
        location: 'Hoboken, New Jersey',
        headline: `Ultrices in iaculis nunc sed`,
        about: 'Sed vulputate odio ut enim blandit volutpat maecenas volutpat. '
    },
    {
        id: 'xcxcbdxfg',
        firstName: 'Steven',
        lastName: ' Madison',
        images: [Steven],
        age: 26,
        location: 'Carroll, Brooklyn',
        headline: ` Auctor eu augue ut lectus.`,
        about: 'Ullamcorper malesuada proin libero nunc consequat interdum varius sit.'
    },
]


class Client extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentList: fetchEventAttendees,
            currentRoute: '',
            top10List: [],
        }
    
    }

    addToTop10 = (direction, person) => {        
        let top10List = this.state.top10List;
        if (direction === 'right') {
            top10List.push(person)

            this.setState({
                top10List,
            })
            console.log(top10List)
        }
        
    }
        
    remove = () => {        
        this.setState({
            currentList: this.state.currentList.slice(1, this.state.currentList.length),
        })
    };

    render() {
        const { currentList, top10List } = this.state;
        const spotsLeft = 10 - top10List.length;
        return (

                <div style={{...styles.container}}>
                    {console.log(currentList.length)}
                    {
                        top10List.length === 10 || currentList.length === 0 ? 
                        // true ?
                        <Top10Sorter 
                            top10List={top10List}
                            sortTop10={this.sortTop10}
                        />
                        :   <Top10Populator 
                                remove={this.remove} addToTop10={this.addToTop10} 
                                spotsLeft={spotsLeft}
                                currentList={currentList}
                        />
                    }
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