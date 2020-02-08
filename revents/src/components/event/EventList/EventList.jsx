import React, { Component } from "react";
import EventListitem from "./EventListitem";

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <>
        {events.map(event => (
          <EventListitem
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </>
    );
  }
}
export default EventList;
