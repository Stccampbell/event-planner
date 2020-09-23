import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import EventList from './EventList';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: null,
        };
    }

    componentDidMount() {
        axios
            .get('/api/events.json')
            .then(res => this.setState({ events: Response.data }))
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { events } = this.state;
        if(events === null) return null;

        return (
            <div>
                <Header />
                <EventList events={events} />
            </div>
        );
    }
}

export default Editor;