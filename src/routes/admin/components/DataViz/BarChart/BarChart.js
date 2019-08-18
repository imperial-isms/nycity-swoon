import React, { Component } from 'react';
import Bar from './Bar';

class BarChart extends Component {
    render() {
        const {categories, maxCount}  = this.props;
        const [ { women }, { men }] = categories;
        
        return (
            <div style={{display: 'flex', flexDirection: 'column', height: 'auto', ...this.props.style}}>
                <Bar maxCount={maxCount} label={'women'} currentCount={women} progress={ women / maxCount } baseColor={'rgba(0, 245, 186, 0.3)'} progressColor={'rgba(0, 245, 186, 0.99)'}/>
                <Bar maxCount={maxCount} label={'men'} currentCount={men} progress={ men / maxCount } baseColor={'rgba(163, 71, 255, 0.3)'} progressColor={'rgba(163, 71, 255, 0.99)'}/>
            </div>
        );
    }
}

export default BarChart;