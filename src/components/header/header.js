import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import {Button} from 'reactstrap';
import RandomChar from "../randomChar";
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const StyledNavBar = styled(Navbar)`
margin-bottom: 40px;
`

function Header() {

    const [randomCharMenu, showRandomChar] = useState(false);
    const [dropdownMenu, showDropdownMenu] = useState(false);

    const randomChar = randomCharMenu ? (<RandomChar interval={1000}/>) : null;

    const toggle = () => showDropdownMenu(() => {return !dropdownMenu});

    return (
        <>
            <StyledNavBar color="dark" dark expand="md">
                <NavbarBrand href="/">GoT Wiki</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={dropdownMenu} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Button color='info'
                                    onClick={() => showRandomChar(() => {
                                        return !randomCharMenu
                                    })}
                                    onBlur={() => showRandomChar(() => {
                                        return !randomCharMenu
                                    })}>Random Character</Button>
                            {randomChar}
                        </NavItem>
                        <NavItem>
                            <NavLink href="/characters">Characters</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/houses">Houses</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/books">Books</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                More
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    About
                                </DropdownItem>
                                <DropdownItem divider/>
                                <Link to="/createdby/">
                                    <DropdownItem>Created by</DropdownItem>
                                </Link>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </StyledNavBar>
        </>
    );

}

export default Header;

