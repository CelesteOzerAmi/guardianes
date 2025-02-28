import React, { act } from 'react';
import './Activities.css';

const Activities = (props) => {

    let activity = props.activityType;

    return (
        <div>
            <p>{activity.description}</p>
            <p>{activity.date}</p>
        </div>
    )
}

export default Activities