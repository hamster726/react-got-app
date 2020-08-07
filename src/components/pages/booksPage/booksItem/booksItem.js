import React, {Component} from 'react';
import ItemDetails, {Field} from "../../../itemDetails";
import ErrorMessage from "../../../errorMessage";
import GotService from "../../../../services/gotService";
import {Col, Container, Row} from "reactstrap";
import styled from "styled-components";
import BookCoverUnavailable from './book-cover-unavailable.png';


const StyledCard = styled(Container)`
display: flex;
justify-content:center;
align-items: center;
flex-direction: row;
align-content: space-between;

`

const StyledCol = styled(Col)`
display: flex;
justify-content:center;
align-items: center;
`
const StyledImage = styled.img`
height: 20rem;
`

const StyledRow = styled(Row)`
`

export default class BooksItem extends Component {

    gotService = new GotService();

    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <StyledCard>
                <StyledRow>
                    <StyledCol>
                        <StyledImage src={BookCoverUnavailable}/>
                    </StyledCol>
                    <StyledCol>
                        <ItemDetails itemId={this.props.bookId}
                                     getSingleData={this.gotService.getBook}>
                            <Field field='numberOfPages' label='Pages'/>
                            <Field field='publisher' label='Publisher'/>
                            <Field field='released' label='Released'/>
                        </ItemDetails>
                    </StyledCol>
                </StyledRow>
            </StyledCard>
        )
    }
}


