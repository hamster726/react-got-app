import React, {Component} from 'react';

export default class GotService extends Component {

    constructor(props) {
        super(props);
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }



    getResource = async (url) => {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could now fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const result = await this.getResource(`/characters/?page=${Math.floor(Math.random()*210)}`);
        return result.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return  this._transformCharacter(character);
    }


    getAllBooks = async () => {
        const books = await this.getResource(`/books/?page=${Math.floor(Math.random()*2)}`);
        return books.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    getAllHouses = async () => {
        const houses = await this.getResource(`/houses/?page=${Math.floor(Math.random()*45)}`);
        return houses.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    _transformCharacter(char) {
        return {
            url: char.url,
            name: char.name || '-',
            gender: char.gender || '-',
            born: char.born || '-',
            died: char.died || '-',
            culture: char.culture || '-',
        }
    }

    _transformHouse(house) {
        return {
            url: house.url,
            name: house.name || '-',
            region: house.region || '-',
            words: house.words || '-',
            titles: house.titles || '-',
            overlord: house.overlord || '-',
            ancestralWeapons: house.ancestralWeapons || '-',
        }
    }

    _transformBook(book) {
        return {
            url: book.url || '-',
            name: book.name || '-',
            numberOfPages: book.numberOfPages || '-',
            publisher: book.publisher || '-',
            released: new Date(book.released).toDateString() || '-',
        }
    }
}

