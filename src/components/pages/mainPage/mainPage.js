import React, {Component} from 'react';
import styled from "styled-components";
import {ListGroup} from 'reactstrap';
import Logo from './logo-got.png';


const StyledMainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: white;
min-height: 320px;

padding:  10px;

@media (min-width: 1024px) {

    padding: 50px;
    border-radius: 0.25rem;
}

`

const StyledAbout = styled.h2`
display: flex;
text-align: center;
`
const StyledP = styled.p`
color: grey;
text-align: center;

`

const StyledImage = styled.img`
width: 9rem;
`



export default class MainPage extends Component {


    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }


    render() {
        return (
                <StyledMainContainer>
                    <StyledImage src={Logo}/>
                    <StyledAbout>Welcome to Game of Thrones Wiki</StyledAbout>
                    <StyledP>Here you can find all characters, houses and books from GoT</StyledP>
                </StyledMainContainer>
        )
    }
}


