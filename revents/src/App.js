import React from "react";
import EventDashboard from "./components/event/EventDashboard/EventDashboard";
import NavBar from "./components/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
