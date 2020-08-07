import React, {Component} from 'react';
import ItemList from "../../itemList";
import CharDetails, {Field} from "../../itemDetails";
import ErrorMessage from "../../errorMessage";
import RowBlock from "../../rowBlock";
import GotService from "../../../services/gotService";

export default class CharactersPage extends Component {

    gotService = new GotService();

    state = {
        selectedItem: 12,
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }


    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    renderItem = ({name, gender}) => {

        //тупее кода я не видел
        let icon = '';

        if (gender !== undefined) {
            if (gender === 'Male') {
                icon = '👨'
            } else {
                icon = '👩'
            }
        }

        return `${icon} ${name}`
    }


    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        if (this.props.charId !== undefined) this.setState({selectedItem: this.props.houseId})


        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllCharacters}
                      renderItem={this.renderItem}
            />
        )

        const itemDetails = (
            <CharDetails itemId={this.state.selectedItem}
                         getSingleData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}


