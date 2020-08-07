import React, {Component} from 'react';
import ItemList from "../../itemList";
import CharDetails, {Field} from "../../itemDetails";
import ErrorMessage from "../../errorMessage";
import RowBlock from "../../rowBlock";
import GotService from "../../../services/gotService";

export default class HousesPage extends Component {

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

    renderItem = ({name}) => {

        return `🏠 ${name}`
    }


    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        if (this.props.houseId !== undefined) this.setState({selectedItem: this.props.houseId})


        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllHouses}
                      renderItem={this.renderItem}
            />
        )

        const itemDetails = (
            <CharDetails itemId={this.state.selectedItem}
                         getSingleData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}


