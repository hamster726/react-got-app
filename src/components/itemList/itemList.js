import React, {Component, useState, useEffect} from 'react';
import styled from "styled-components";
import {ListGroup, ListGroupItem} from "reactstrap";
import Spinner from "../spinners/spinner2";
import ErrorMessage from "../errorMessage";
import PropTypes from "prop-types";

const StyledListGroupItem = styled(ListGroupItem)`
cursor: pointer;
border: 10rem;

&:hover {
    background-color: #eee;
}

&:active {
    background-color: #ddd;
}
`

const StyledListGroup = styled(ListGroup)`
margin-bottom: 20px;
background-color: white;
min-height: 491px;


`

class ItemList extends Component {


    getId({url}) {
        const newUrl = url.split('/')
        return newUrl[newUrl.length - 1];
    }

    renderItems(arr) {

        return arr.map((item) => {

            const id = this.getId(item);
            const label = this.props.renderItem(item);

            return (
                <StyledListGroupItem
                    key={id}
                    onClick={() => {
                        this.props.onItemSelected(id)
                    }}
                >
                    {label}
                </StyledListGroupItem>
            )
        })
    }

    render() {

        const {data} = this.props;

        return (
            <StyledListGroup>
                {this.renderItems(data)}
            </StyledListGroup>
        );
    }
}

ItemList.defaultProps = {
    onItemSelected: () => {
    },
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
}

const withData = (View) => {


    return class extends Component {

        state = {
            data: null,
            error: false,
            firstLoad: true
        }

        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                });
        }

        render() {
            const {data, error} = this.state;

            if (error) return <ErrorMessage/>

            const viewElement = !data ? <Spinner/> : <View {...this.props} data={data}/>;

            return (
                <>
                    {viewElement}
                </>
            );
        }



    }
}

export default withData(ItemList);
