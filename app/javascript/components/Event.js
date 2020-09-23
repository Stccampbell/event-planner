import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ event }) => (
    <div>
        <h2>
            {event.event_date}
            {' - '}
            {event.event_type}
        </h2>
        <ul>
            <li>
                <strong>Type:</strong>
                {' '}
                {event.event_type}
            </li>
            <li>
                <strong>Date:</strong>
                {' '}
                {event.event_date}
            </li>
            <li>
                <strong>Title:</strong>
                {' '}
                {event.event_title}
            </li>
            <li>
                <strong>Speaker:</strong>
                {' '}
                {event.event_speaker}
            </li>
            <li>
                <strong>Host:</strong>
                {' '}
                {event.event_host}
            </li>
            <li>
                <strong>Published:</strong>
                {' '}
                {event.event_Published ? 'yes' : 'no'}
            </li>
        </ul>
    </div>
)

Event.propTypes = {
    event: PropTypes.shape(),
};

Event.defaultProps = {
    event: undefined,
};

export default Event;