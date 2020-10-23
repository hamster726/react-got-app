import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Progress} from 'reactstrap';
import styled from "styled-components";
import GotService from "../../services/gotService";
import Spinner from "../spinners/spinner2";
import ErrorMessage from "../errorMessage";
import PropTypes from 'prop-types';

const StyledListGroupItem = styled(ListGroupItem)`
display: flex !important;
justify-content: space-between;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 25px 25px 25px 25px;
    margin-top: 20px;
    border-radius: 0.25rem;
    min-height: 320px;
    min-width: 540px;
    width: auto;
    position: absolute;
    z-index: 199;
    box-shadow: 0 0 20px 0 black;
    color: black;
    
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    
    @media (max-width: 768px){
        min-width: 90%;
    }
    
`

const StyledSpan = styled.span`
font-weight: bold;
`

const StyledProgress = styled(Progress)`
display:flex;
margin: -25px -25px 25px -25px;
overflow:hidden;
border-radius: 0rem!important;

.progress-bar {
transition: width 0.9s ease;
}
`

export default class RandomChar extends Component {

    gotService = new GotService();


    componentDidMount() {
        this.updateChar();
        this.timerID = setInterval(this.updateChar, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }


    state = {
        char: {},
        loading: true,
        error: false,
        progress: 100
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            progress: 0
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updateChar = () => {
        const {progress} = this.state;

        if (progress < 100) {
            this.setState({
                progress: progress + 25
            })
            return;
        }

        const randomId = Math.floor(Math.random() * 2129 + 10);

        this.gotService.getCharacter(randomId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }


    render() {

        const {char, loading, error, progress} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <StyledDiv>
                <StyledProgress animated value={progress}/>
                {errorMessage}
                {spinner}
                {content}
            </StyledDiv>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>{name}</h4>
            <ListGroup flush>
                <StyledListGroupItem>
                    <StyledSpan>Gender </StyledSpan>
                    <span>{gender}</span>
                </StyledListGroupItem>
                <StyledListGroupItem>
                    <StyledSpan>Born </StyledSpan>
                    <span>{born}</span>
                </StyledListGroupItem>
                <StyledListGroupItem>
                    <StyledSpan>Died </StyledSpan>
                    <span>{died}</span>
                </StyledListGroupItem>
                <StyledListGroupItem>
                    <StyledSpan>Culture </StyledSpan>
                    <span>{culture}</span>
                </StyledListGroupItem>
            </ListGroup>
        </>
    )
}

RandomChar.defaultProps = {
    interval : 1000,
}

RandomChar.propTypes = {
    interval : PropTypes.number,
}


