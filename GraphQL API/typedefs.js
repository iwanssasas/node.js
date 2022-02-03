const {  gql } = require('apollo-server-express');

const typeDefs = `
    type Query {
        getAllShelf : [Shelf]
        getShelf(id : ID) : Shelf
        getAllBooks : [Book]
        getBook(id : ID) : Book
        tittle : [Book]
    }

    type Book {
        id : ID
        name : String
        quantity : Int
        bookshelf : String
    }

    input inputBook {
        name: String
        quantity: Int
        bookshelf: String
    }

    type Shelf {
        id : ID
        name : String
        description : String
        tittle : [Book]
    }

    input inputShelf {
        name: String
        description : String
        tittle : [String]
    }

    type Mutation {
        createShelf(shelf: inputShelf) : Shelf
        deleteShelf(id : ID) : String
        updateShelf(id:ID, shelf: inputShelf) : Shelf
        createBook(book: inputBook) : Book
        deleteBook(id : ID) : String
        updateBook(id : ID, book: inputBook) : Book
    }

`;

module.exports = typeDefs;