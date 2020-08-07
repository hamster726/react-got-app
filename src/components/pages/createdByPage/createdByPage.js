import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";
import styled from "styled-components";
import GitHubLogoImage from './github-logo.png';


const StyledContainer = styled.div`
display: flex;
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
text-align: center;
`
const StyledP = styled.p`
color: grey;
text-align: center;

`

const StyledGroup = styled(ListGroup)`
min-width: 100%;
margin-bottom: 40px!important;
`

const StyledA = styled.a`
color: #30d5c8!important;
`

const GitHubLogo = styled.img`
width: 2rem;
`


export default class CreatedByPage extends Component {

    render() {
        return (
            <>
                <StyledContainer>
                    <StyledAbout>by Hamster726</StyledAbout>
                    <StyledP>Проект создан для изучения новых FrontEnd технологий</StyledP>
                    <hr/>
                    <p>В этой проекте применены такие технологии:</p>
                    <StyledGroup>
                        <ListGroupItem>React</ListGroupItem>
                        <ListGroupItem>Препроцессор JSX</ListGroupItem>
                        <ListGroupItem><StyledA href='https://reactrouter.com/' target='_blank'>React Router</StyledA></ListGroupItem>
                        <ListGroupItem><StyledA href='https://webpack.js.org/' target='_blank'>Webpack</StyledA></ListGroupItem>
                        <ListGroupItem><StyledA target="_blank" href='https://styled-components.com/'>Styled components</StyledA></ListGroupItem>
                        <ListGroupItem><StyledA target="_blank" href='https://reactstrap.github.io/'>reactstrap</StyledA></ListGroupItem>
                        <ListGroupItem>API <StyledA target="_blank" href='https://anapioficeandfire.com/'>"Ice and Fire"</StyledA></ListGroupItem>
                    </StyledGroup>
                    <p>
                        <GitHubLogo src={GitHubLogoImage}/>
                        Me on GitHub: <StyledA href='https://github.com/hamster726' target='_blank'>Hamster726</StyledA>
                    </p>
                </StyledContainer>
            </>
        )
    }
}
