import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import graphTypes from "./graphql/types/index.js";
import graphResolvers from "./graphql/resolvers/index.js";
const PORT = 4000;

const server = new ApolloServer({
    typeDefs: graphTypes,
    resolvers: graphResolvers
});

const { url } = await startStandaloneServer(server, { listen: { port: PORT }});

console.log(`server running on port: ${PORT}`)