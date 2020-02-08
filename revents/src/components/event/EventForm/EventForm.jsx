import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Button } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";

class EventForm extends Component {
  state = { title: "", date: "", city: "", venue: "", hostedBy: "" };

  componentDidMount() {
    if (this.props.selectedEvent) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }
  onFormSubmit = DOMevent => {
    DOMevent.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
  render() {
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit} autoComplete="off">
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={title}
              placeholder="First Name"
              type="text"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={city}
              type="text"
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedEvent: state.events.find(
    event => event.id === ownProps.match.params.id
  )
});
const actions = {
  createEvent,
  updateEvent
};
export default connect(
  mapStateToProps,
  actions
)(EventForm);
