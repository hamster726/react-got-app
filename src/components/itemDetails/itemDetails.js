import React, {Component} from 'react';
import styled from "styled-components";
import {ListGroup, ListGroupItem, Button} from "reactstrap";
import Spinner from "../spinners/spinner2";
import ErrorMessage from "../errorMessage";
import {withRouter} from "react-router-dom";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem;
    min-height: 320px;
    min-width: 450px;
    
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    
    @media (max-width: 768px){
        min-width: 100%;
    }
`

const StyledListGroupItem = styled(ListGroupItem)`
display: flex!important;
justify-content: space-between;
`

const StyledSpan = styled.span`
font-weight: bold;
`

const Field = ({item, field, label}) => {
    return (

        <StyledListGroupItem>
            <StyledSpan>{label}</StyledSpan>
            <span>{item[field]}</span>
        </StyledListGroupItem>
    )

}

export {Field}

 class ItemDetails extends Component {

    state = {
        item: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({
                loading: true
            });
            this.updateChar();
        }
    }

    updateChar = () => {
        const {itemId} = this.props;
        if (!itemId) return;

        this.props.getSingleData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    loading: false
                });
            })
    }

    render() {
        if (this.state.error) return <ErrorMessage/>

        const {item, loading} = this.state

        let selectedItem = '';
        if (!item || loading) {
            selectedItem = <Spinner/>
        } else {
            selectedItem = <View item={item} children={this.props.children}/>
        }

        return (
            <StyledDiv>
                {selectedItem}
            </StyledDiv>
        );
    }
}

const View = ({item, children}) => {

    const {name} = item;
    return (
        <>
            <h4>{name}</h4>
            <ListGroup flush>
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ListGroup>
        </>
    )
}

export default withRouter(ItemDetails)
