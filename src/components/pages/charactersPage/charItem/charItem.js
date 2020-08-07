import React, {Component} from 'react';
import ItemDetails, {Field} from "../../../itemDetails";
import ErrorMessage from "../../../errorMessage";
import GotService from "../../../../services/gotService";
import CharDetails from "../../../itemDetails";


export default class CharItem extends Component {

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
            <ItemDetails itemId={this.props.charId}
                         getSingleData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
    }
}


