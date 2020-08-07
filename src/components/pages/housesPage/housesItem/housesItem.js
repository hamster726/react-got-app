import React, {Component} from 'react';
import ItemDetails, {Field} from "../../../itemDetails";
import ErrorMessage from "../../../errorMessage";
import GotService from "../../../../services/gotService";


export default class HousesItem extends Component {

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
            <ItemDetails itemId={this.props.houseId}
                         getSingleData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
            </ItemDetails>
        )
    }
}


