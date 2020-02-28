import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from "../../modals/modalActions";
import { logout } from "../../auth/authActions";

const actions = {
  openModal,
  logout
};

class NavBar extends Component {
  onSignIn = () => this.props.openModal("LoginModal");
  onRegister = () => this.props.openModal("RegisterModal");
  onSignOut = () => {
    this.props.logout();
    this.props.history.push("/");
  };

  render() {
    const {
      auth: { authenticated, currentUser }
    } = this.props;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/events" name="Events" />
          {authenticated && (
            <>
              <Menu.Item as={NavLink} exact to="/people" name="People" />
              <Menu.Item>
                <Button
                  as={Link}
                  to="/createEvent"
                  floated="right"
                  positive
                  inverted
                  content="Create Event"
                />
              </Menu.Item>{" "}
            </>
          )}
          {authenticated ? (
            <SignedInMenu signOut={this.onSignOut} currentUser={currentUser} />
          ) : (
            <SignedOutMenu signIn={this.onSignIn} register={this.onRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default withRouter(connect(mapStateToProps, actions)(NavBar));
