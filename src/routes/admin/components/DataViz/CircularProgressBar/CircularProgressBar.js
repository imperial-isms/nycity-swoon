
import React, { Component } from 'react';
import './CircularProgressBar.css';
 
export default class CircularProgressBar extends Component {

  render() {
	const { progress, possible, sqSize, strokeWidth } = this.props;
    // sqSize is Size of the enclosing square
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (sqSize - strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * (progress > possible ? possible : progress) / possible ); 

	console.log(this.props)
    return (
	  <div 
	  	style={{
			width: sqSize, height: sqSize, 
			display: 'flex', flexDirection: 'column', justifyContent: 'start',}}
			>
	      <svg
	          width={sqSize}
	          height={sqSize}
	          viewBox={viewBox}>
	          <circle
	            className="circle-background"
	            cx={sqSize / 2}
	            cy={sqSize / 2}
	            r={radius}
	            strokeWidth={`${strokeWidth}px`} />
	          <circle
	            className="circle-progress"
	            cx={sqSize / 2}
	            cy={sqSize / 2}
	            r={radius}
	            strokeWidth={`${strokeWidth}px`}
	            // Start progress marker at 12 O'Clock
	            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
	            style={{
	              strokeDasharray: dashArray,
	              strokeDashoffset: dashOffset
	            }} />            

	          <text
	            className="circle-text"
	            x="50%"
	            y="42%"
	            dy=".3em"
	            textAnchor="middle">
				
				<tspan>{`${progress > possible ? possible : progress} of ${possible}`}</tspan>
    			<tspan x="50%" dy="21%">attendees</tspan>
	          </text>
	      </svg>	      	      
      </div>

    );
  }
}
