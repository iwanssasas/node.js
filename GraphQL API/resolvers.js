const { args } = require('commander');
const { LoneSchemaDefinitionRule } = require('graphql');
const Shelf = require ('./models/shelfModel');
const Book = require ('./models/bookModel');

const resolvers = {
    Query: {
        getAllBooks : async () => {
            const books = Book.find();
            return books
        },
        getBook : async (parent, {id}, ctx, info) => {
            return await Book.findById(id);
        },
        getAllShelf : async () => {
            const shelfs = Shelf.find();
            return shelfs
        },
        getShelf : async (parent, {id}, ctx, info) => {
            return await Shelf.findById(id);
        }
    },
    Mutation : {
        createShelf : async (parent, args, ctx, info) => {
            const { name, description , tittle} = args.shelf;
            const shelf = new Shelf ({ name, description, tittle });
            await shelf.save();
            return shelf;
        }, 
        deleteShelf : async (parent, args, ctx, info) => {
            const { id } = args;
            await Shelf.findByIdAndDelete(id);
            return "Book is delete";
        },
        updateShelf : async (parent, args, ctx, info) => {
            const { id } = args;
            const { name, description , tittle} = args.shelf;
            const shelf = await Shelf.findByIdAndUpdate(
                id, 
                { name, description , tittle}, 
                { new : true }
                );
            return shelf;
        },
        createBook : async (parent, args, ctx, info) => {
            const {  name, quantity, bookshelf } = args.book;
            const book = new Book ({ name, quantity, bookshelf });
            await book.save();
            return book;
        }, 
        deleteBook : async (parent, args, ctx, info) => {
            const { id } = args;
            await Book.findByIdAndDelete(id);
            return "Book is delete";
        },
        updateBook : async (parent, args, ctx, info) => {
            const { id } = args;
            const { name, quantity, bookshelf } = args.book;
            const book = await Book.findByIdAndUpdate(
                id, 
                { name, quantity, bookshelf }, 
                {new : true}
                );
            return book;
        }
    },
    Shelf : {
        tittle : async (book, args, ctx) => {
            if(!book.tittle){
                return null;
            }
            return await ctx.loaders.tittle.loadMany(book.tittle)
            
        }
    },
    
    
}

module.exports = resolvers;