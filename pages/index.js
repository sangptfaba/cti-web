import React, { Component } from "react";
import Head from "next/head";
import { faBell } from "@fortawesome/free-regular-svg-icons";
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
  landing_image: "/assets/placeholder-banner-3.png",
  virus_svg: "/assets/virus.svg",
  calendar_svg: "/assets/calendar.svg",
  li_circle_svg: "/assets/circle.svg",
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
                  nav
                  className="text-secondary px-lg-3 px-md-1 reposition-nav"
                >
                  Form & Publication HEHE
                </DropdownToggle>
                <DropdownMenu className="text-secondary">
                  <div onMouseLeave={this.handleToggleFormAndPublicFalse}>
                    <DropdownItem disabled className="text-secondary">
                      Form & Publication
                    </DropdownItem>
                    <DropdownItem className="text-secondary">
                      Our Publication
                    </DropdownItem>
                    <DropdownItem className="text-secondary">
                      CTI Forms
                    </DropdownItem>
                  </div>
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
                  <div onMouseLeave={this.handleToggleAdminFalse}>
                    <DropdownItem disabled className="text-light">
                      Admin
                    </DropdownItem>
                    <DropdownItem className="text-light">
                      Manage User
                    </DropdownItem>
                    <DropdownItem className="text-light">
                      Create User
                    </DropdownItem>
                  </div>
                </DropdownMenu>
              </Dropdown>
              <div
                id="nav-divider"
                style={{ height: 50, width: 1, backgroundColor: "#bfbfc1" }}
              />
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
          <div
            className="text-center"
            style={{
              position: "relative",
              height: 300,
              width: "100%",
              backgroundImage: `url(${assets.landing_image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div
              className="text-left"
              style={{ position: "absolute", top: "5vmin", right: "10vmin" }}
            >
              <h5 className="text-primary">
                Whole-Person,
                <br />
                Patient Driven Care
              </h5>
              <button id="btnLearnMore" className="cbtn-0">
                Learn More
              </button>
            </div>
          </div>
          <div id="rowButtonsDiv" className="text-center mb-5">
            <Row
              id="rowButtons"
              className="main-btns-row d-flex flex-row justify-content-center"
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
                    height: 135,
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
                    height: 135,
                    fontSize: "inherit",
                    padding: "0 15px",
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
                  The Care Transitions Intervention® (CTI) is an evidence-based
                  model that complements a systems’ care team by putting the
                  patient first. During a 30-day program, clients with complex
                  care needs and family caregivers receive specific tools and
                  work with a Transitions Coach®, to build self-management
                  skills that will ensure their needs are met during the
                  transition from hospital to home. This intervention is
                  comprised of a hospital visit, a home visit, and three phone
                  calls. Uniquely critical to the program is the role of the
                  Transitions Coach® (TC). TCs tap into what motivates and
                  matters to the patient and puts them in the driver’s seat to
                  navigate through personal skill development. Through the
                  guidance of a TC, patients will identify a 30-day goal,
                  practice skills, and gain confidence in four key areas of
                  health, known as the Four Pillars® (medication
                  self-management, primary care, personal health record, and
                  knowing their warning signs). ....
                </p>
                <p>
                  <strong className="ctext-purple ctext-bolder">
                    Ut enim ad minima -{" "}
                  </strong>
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur?
                </p>
                <ul
                  style={{
                    listStyleType: "none",
                  }}
                >
                  <li>
                    <img src={assets.li_circle_svg} className="cli-circle" />
                    <strong className="ctext-bold ctext-purple">
                      List item one:{" "}
                    </strong>{" "}
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corpor
                  </li>
                  <li>
                    <img src={assets.li_circle_svg} className="cli-circle" />
                    <strong className="ctext-bold ctext-purple">
                      List item two:{" "}
                    </strong>{" "}
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corpor
                  </li>
                  <li>
                    <img src={assets.li_circle_svg} className="cli-circle" />
                    <strong className="ctext-bold ctext-purple">
                      List item three:{" "}
                    </strong>{" "}
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corpor
                  </li>
                </ul>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
                <button className="cbtn-0">Let's talk!</button>
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
            width: 50px;
            margin-bottom: 15px;
          }

          .cbtn-0 {
            background-color: #1c7cd5;
            border: none;
            color: white;
            padding: 10px 30px;
            border-radius: 0.25rem;
          }

          .cli-circle {
            width: 13px;
            margin-right: 4px;
            margin-bottom: 3px;
          }

          .ctext-bold {
            font-weight: bold;
          }
          .ctext-bolder {
            font-weight: bolder;
          }

          .ctext-purple {
            color: #025986;
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
            color: #00a4fa;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
