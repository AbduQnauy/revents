import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../form/TextInput";
import TextArea from "../../form/TextArea";
import SelectInput from "../../form/SelectInput";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import DateInput from "../../form/DateInput";

class EventForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues && this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Abdu"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete="off"
            >
              <Field
                name="title"
                placeholder="Event Title"
                component={TextInput}
              />
              <Field
                name="category"
                placeholder="What is your event about?"
                component={SelectInput}
                options={category}
              />
              <Field
                name="description"
                placeholder="Tell us about your event"
                component={TextArea}
                rows={3}
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                placeholder="Event City"
                component={TextInput}
              />
              <Field
                name="venue"
                placeholder="Event Venue"
                component={TextInput}
              />
              <Field
                name="date"
                component={DateInput}
                dateFormat="dd LLL yyyy h:mm a"
                showTimeSelect
                timeFormat="HH:mm"
                placeholder="Event Date"
              />

              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                onClick={
                  initialValues && initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push(`/events`)
                }
                type="button"
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  initialValues: state.events.find(
    event => event.id === ownProps.match.params.id
  )
});
const actions = {
  createEvent,
  updateEvent
};
const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const validate = combineValidators({
  title: isRequired({ message: "The event title is required" }),
  category: isRequired({ message: "The category is required" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});
export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "eventForm", validate })(EventForm));
