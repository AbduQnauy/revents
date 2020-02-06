import React, { Component } from "react";
import EventListitem from "./EventListitem";

class EventList extends Component {
  render() {
    const { selectEvent, events, deleteEvent } = this.props;
    return (
      <>
        {events.map(event => (
          <EventListitem
            key={event.id}
            event={event}
            selectEvent={selectEvent}
            deleteEvent={deleteEvent}
          />
        ))}
      </>
    );
  }
}
export default EventList;
