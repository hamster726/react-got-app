import React from 'react';
import {Button} from 'reactstrap';
import styled from "styled-components";
import {Link} from "react-router-dom";


const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem;
    min-height: 320px;
    h4 {
    margin-bottom: 20px;
    text-align: center;
}
`
const StyledH1 = styled.h1`
`
const StyledP = styled.p`
`


const NoMatch = () => {
    return (
        <StyledDiv>
            <StyledH1>Oops...</StyledH1>
            <StyledP>Page not found :(</StyledP>
            <Link to='/'><Button>Return to main page</Button></Link>
        </StyledDiv>
    )
}

export default NoMatch;
