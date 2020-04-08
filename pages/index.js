import React, { Component } from "react";
import Head from "next/head";
import { faAddressCard, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Button,
  Row,
  Col,
  Container,
} from "shards-react";

import "./css/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const assets = {
  logo: "/assets/Asset-2@14x-1.png",
  bottom_logo: "/assets/Asset-logo-bottom.png",
  virus_svg: "/assets/virus.svg",
  calendar_svg: "/assets/calendar.svg",
};

class Home extends Component {
  state = {
    collapseOpen: false,
    toggleAdmin: false,
    toggleFormAndPublic: false,
  };

  toggleNavbar = () => {
    this.setState({ collapseOpen: !this.state.collapseOpen });
  };

  handleToggleFormAndPublicTrue = () => {
    this.setState({ toggleFormAndPublic: true });
  };
  handleToggleFormAndPublicFalse = () => {
    this.setState({ toggleFormAndPublic: false });
  };
  handleToggleFormAndPublicToggle = () => {
    this.setState({ toggleFormAndPublic: !this.state.toggleFormAndPublic });
  };

  handleToggleAdminTrue = () => {
    this.setState({ toggleAdmin: true });
  };
  handleToggleAdminFalse = () => {
    this.setState({ toggleAdmin: false });
  };
  handleToggleAdminToggle = () => {
    this.setState({ toggleAdmin: !this.state.toggleAdmin });
  };

  render() {
    return (
      <div>
        <Head>
          <title>Care Transitions Intervention</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar type="light" expand="md">
          <NavbarBrand href="#">
            <img className="top-logo" src={assets.logo} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse
            open={this.state.collapseOpen}
            navbar
            className="d-md-flex flex-md-row-reverse"
          >
            <Nav navbar style={{ color: "blue" }}>
              <Dropdown
                open={this.state.toggleFormAndPublic}
                toggle={this.handleToggleFormAndPublicToggle}
              >
                <DropdownToggle
                  onMouseOver={this.handleToggleFormAndPublicTrue}
                  // onMouseLeave={this.handleToggleFormAndPublicFalse}
                  nav
                  className="text-secondary px-lg-3 px-md-1"
                >
                  Form & Publication
                </DropdownToggle>
                <DropdownMenu className="text-secondary bg-primary">
                  <DropdownItem className="text-light">
                    Form & Publication
                  </DropdownItem>
                  <DropdownItem className="text-light">
                    Our Publication
                  </DropdownItem>
                  <DropdownItem className="text-light">CTI Forms</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink
                  active
                  href="#"
                  className="text-secondary px-lg-3 px-md-1"
                >
                  News & Announcements
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active
                  href="#"
                  className="text-secondary px-lg-3 px-md-1"
                >
                  Training
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active
                  href="#"
                  className="text-secondary px-lg-3 px-md-1"
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active
                  href="#"
                  className="text-secondary px-lg-3 px-md-1"
                >
                  Contact Us
                </NavLink>
              </NavItem>
              <Dropdown
                open={this.state.toggleAdmin}
                toggle={this.handleToggleAdminToggle}
                // onMouseLeave={this.handleToggleAdminFalse}
              >
                <DropdownToggle
                  nav
                  onMouseOver={this.handleToggleAdminTrue}
                  className="text-secondary px-lg-3 px-md-1"
                  // onMouseLeave={this.handleToggleAdminFalse}
                >
                  Admin
                </DropdownToggle>
                <DropdownMenu className="bg-primary">
                  <DropdownItem className="text-light">Admin</DropdownItem>
                  <DropdownItem className="text-light">
                    Manage User
                  </DropdownItem>
                  <DropdownItem className="text-light">
                    Create User
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <div
                style={{ height: 40, width: 1, backgroundColor: "#bfbfc1" }}
              ></div>
              <NavItem>
                <NavLink
                  active
                  href="#"
                  className="text-secondary px-lg-3 px-md-1"
                >
                  <FontAwesomeIcon style={{ width: 20 }} icon={faBell} /> Hi Joe
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active
                  href="#"
                  className="text-secondary px-lg-3 px-md-1"
                >
                  Sign Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <main>
          <div className="text-center" style={{ position: "relative" }}>
            <img
              src="/assets/placeholder.png"
              className="img-fluid"
              alt="Responsive image"
            />
            <div
              className="text-left"
              style={{ position: "absolute", top: "5vmin", right: "10vmin" }}
            >
              <h5 className="text-primary">
                Whole-Person
                <br />
                Patient-Center Care
              </h5>
              <button id="btnLearnMore">Learn More</button>
            </div>
          </div>
          <div id="rowButtonsDiv" className="text-center mb-5">
            <Row
              id="rowButtons"
              className="d-flex flex-row justify-content-center"
            >
              <Col
                xs={11}
                sm={5}
                md={4}
                lg={3}
                className="p-sm-1 px-md-3 my-sm-3 p-2"
              >
                <Button
                  className="mainBtn"
                  style={{
                    backgroundColor: "#00a4fa",
                    border: "none",
                    width: "100%",
                    height: 150,
                    fontSize: "inherit",
                  }}
                >
                  <img src={assets.virus_svg} className="mainBtnSVG" />
                  <br />
                  Covid-19 Support
                </Button>
              </Col>
              <Col
                xs={11}
                sm={5}
                md={4}
                lg={3}
                className="p-sm-1 px-md-3 my-sm-3 p-2"
              >
                <Button
                  className="mainBtn"
                  style={{
                    backgroundColor: "#77cefc",
                    border: "none",
                    width: "100%",
                    height: 150,
                    fontSize: "inherit",
                  }}
                >
                  <img src={assets.calendar_svg} className="mainBtnSVG" />
                  <br />
                  Our Next Training Session
                </Button>
              </Col>
            </Row>
          </div>
          <Container className="container-md ml-md-4">
            <Row>
              <Col sm={10} md={3} className="offset-md-0">
                <h1 className="text-primary">Welcome to CTI</h1>
              </Col>
              <Col sm={10} md={7} className="offset-md-1">
                <p>
                  <strong>Introduce ourselves</strong> - Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.
                </p>
                <p>
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur?
                </p>
                <ul>
                  <li>
                    <strong>List item one: </strong> voluptatem. Ut enim ad
                    minima veniam, quis nostrum exercitationem ullam corpor
                  </li>
                  <li>
                    <strong>List item two: </strong> voluptatem. Ut enim ad
                    minima veniam, quis nostrum exercitationem ullam corpor
                  </li>
                  <li>
                    <strong>List item three: </strong> voluptatem. Ut enim ad
                    minima veniam, quis nostrum exercitationem ullam corpor
                  </li>
                </ul>
                <p>
                  <strong>Introduce ourselves</strong> - Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.
                </p>
                <Button>Let's Talk!</Button>
              </Col>
            </Row>
          </Container>
        </main>
        <footer className="d-flex p-3 bg-primary mt-5">
          <img
            src={assets.bottom_logo}
            className="bottom-logo mr-auto align-self-center bg-light rounded-circle"
          />
          <div className="text-light footer-text">
            Footer
            <br />
            &copy; Copyright 2020, all rights reserved
          </div>
        </footer>
        <style jsx>{`
          .navbar-collapse {
            align-items: row-reverse;
          }

          .mainBtnSVG {
            width: 60px;
          }

          #btnLearnMore {
            background-color: #1c7cd5;
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 0.25rem;
          }

          #btnLearnMore:hover {
            background-color: #025986;
          }

          .navbar-nav {
            color: #3fbafb;
          }

          .top-logo {
            height: 40px;
          }

          .bottom-logo {
            height: 35px;
          }

          .btn-covid-19-color {
            background-color: #00a4fa !important;
          }

          #rowButtons {
            top: -30px;
          }

          #btn-training-session-color {
            background-color: #77cefc !important;
          }
          .btn-training-session-color {
            background-color: #77cefc !important;
          }

          @media (min-width: 576px) {
            #rowButtons {
              top: -20px;
            }
          }
          @media (max-width: 315px) {
            .footer-text {
              font-size: x-small;
            }
          }
        `}</style>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "adobe-clean", sans-serif;
            color: #7b7bd8;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
