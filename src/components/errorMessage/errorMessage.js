import React, {Component} from 'react';
import styled from "styled-components";
import img from "./error.png";


class ErrorMessage extends Component{
    render() {
        return (
            <StyledErrorMessage>
                <img src={img} alt='error'/>
                <span>Что-то пошло не так</span>
                <span>Перезагрузите страницу</span>
            </StyledErrorMessage>
        );
    }
}

const StyledErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    img {
    pointer-events: none;
    -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none; user-select: none;
    width: 200px;
    height: 200px;
    margin: 20px 0;
    }
    span {
    font-weight: bold
    }
`

export default ErrorMessage;
