import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import ErrorMessage from "../errorMessage";
import styled from "styled-components";
import CharactersPage from "../pages/charactersPage";
import BooksPage from "../pages/booksPage";
import HousesPage from "../pages/housesPage";
import MainPage from "../pages/mainPage";
import CreatedByPage from "../pages/createdByPage/createdByPage";
import HousesItem from "../pages/housesPage/housesItem";
import CharItem from "../pages/charactersPage/charItem";
import BooksItem from "../pages/booksPage/booksItem";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from "../pages/noMatchPage";

const StyledContainer = styled(Container)`
padding: 0!important;

height: 100%;

@media (min-width: 1024px) {
}

`


export default class App extends Component {

    state = {
        showRandomChar: false,
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log('error');
        this.setState({
            error: true
        })
    }

    render() {

        const {error} = this.state;

        if (error) {
            return (
                <>
                    <Header/>
                    <ErrorMessage/>
                </>
            )
        }

        return (
            <Router>
                <Header/>
                <StyledContainer>
                    <Switch>
                        <Route path='/' exact>
                            <MainPage/>
                        </Route>

                        <Route path='/characters/' exact>
                            <CharactersPage/>
                        </Route>fi
                        <Route path='/houses/' exact>
                            <HousesPage/>
                        </Route>
                        <Route path='/books/' exact>
                            <BooksPage/>
                        </Route>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                return <BooksItem bookId={match.params.id}/>

                            }
                        }/>
                        <Route path='/houses/:id' render={
                            ({match}) => {
                                let {id} = match.params;
                                return <HousesItem houseId={id}/>
                            }
                        }/>

                        <Route path='/characters/:id' render={
                            ({match}) => {
                                let {id} = match.params;
                                return <CharItem charId={id}/>
                            }
                        }/>
                        <Route path='/createdby/' exact component={CreatedByPage}/>
                        <Route path='*' exact insecure component={NoMatch}/>
                    </Switch>

                </StyledContainer>
            </Router>
        );
    }
};
