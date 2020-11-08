import * as React from 'react';
import './Nav.css';

import { Link } from "react-router-dom";
import ButtonLink from '../ButtonLink/ButtonLink';

import {
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";

class Nav extends React.Component<{}, {}> {
  render() {
    return (
      <Navbar>
        <NavbarGroup>
          <NavbarHeading><Link to="/">Kana</Link></NavbarHeading>
          <NavbarDivider />
        </NavbarGroup>
        <NavbarGroup>
          <ButtonLink className={Classes.MINIMAL} icon="home" text="Home" to="/" />
          <ButtonLink className={Classes.MINIMAL} icon="globe" text="Stats" to="/stats" />
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default Nav;
