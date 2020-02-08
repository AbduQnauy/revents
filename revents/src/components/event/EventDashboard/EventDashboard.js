import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";
class EventDashboard extends Component {
  onDeleteEvent = id => {
    this.props.deleteEvent(id);
  };
  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.onDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});
const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};
export default connect(
  mapStateToProps,
  actions
)(EventDashboard);
