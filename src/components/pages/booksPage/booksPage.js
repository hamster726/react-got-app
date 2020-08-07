import React, {Component} from 'react';
import ItemList from "../../itemList";
import ErrorMessage from "../../errorMessage";
import GotService from "../../../services/gotService";
import {withRouter} from 'react-router-dom';


class BooksPage extends Component {

    gotService = new GotService();

    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }


    onItemSelected = (id) => {
        const {pathname} = this.props.history.location;
        this.props.history.push(`${pathname}/${id}`);
    }

    renderItem = ({name}) => {

        let icon = ['📕','📗','📘','📙','📔']


        icon = icon[Math.floor(Math.random()*icon.length)]

        return `${icon} ${name}`
    }


    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllBooks}
                      renderItem={this.renderItem}
            />
        )
    }
}

export default withRouter(BooksPage);

