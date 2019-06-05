import React from 'react'

const Segment = (props) => (

<tr className="segment">
<td>{props.places[props.depPlace].shortName}</td>
<td>{props.places[props.arrPlace].shortName}</td>
<td>{props.capitalizeFirstLetter(props.vehicles[props.vehicle].name)}</td>
<td colSpan="4">
  <time datetime={`${props.durationMinutes}M`}>
    {props.minutesToHours(props.transitDuration)}
  </time>
</td>
</tr>

)

export default Segment
