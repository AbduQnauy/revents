import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
//
import EventDashboard from "./components/event/EventDashboard/EventDashboard";
import NavBar from "./components/nav/NavBar/NavBar";
import HomePage from "./components/home/HomePage";
import EventDetailedPage from "./components/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "./components/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "./components/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "./components/user/Settings/SettingsDashboard";
import EventForm from "./components/event/EventForm/EventForm";
//
function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailedPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/createEvent" component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
