const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = require ("./typedefs");
const resolvers = require ("./resolvers");
const loaders = require ("./dataloader.js");

const mongoose = require('mongoose');


async function startServer() {
    const app = express();
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({req}) => ({
            loaders:loaders(),
            
        })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    await mongoose.connect("mongodb://localhost:27017/GRAPHQL-6", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Mongodb is connect...");

    app.listen({ port: 4000 }, () =>
    console.log("Server ready at http://localhost:4000")
);
}

startServer();