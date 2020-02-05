import React, { Component } from "react";
import EventListitem from "./EventListitem";

class EventList extends Component {
  render() {
    return (
      <>
        {this.props.events.map(event => (
          <EventListitem key={event.id} event={event} />
        ))}
      </>
    );
  }
}
export default EventList;
