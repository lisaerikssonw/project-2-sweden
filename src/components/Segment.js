import React from 'react'

const Segment = (props) => (

<tr className="segment">
<td>{props.places[props.depPlace].shortName}</td>
<td>{props.places[props.arrPlace].shortName}</td>
<td>{props.vehicles[props.vehicle].name}</td>
<td colSpan="4">{props.minutesToHours(props.transitDuration)}</td>
</tr>

) 

export default Segment
