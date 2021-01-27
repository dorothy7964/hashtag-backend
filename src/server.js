import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";

const server = new GraphQLServer({   
    schema
});

server.start(() =>
    console.log(`✔ Server running on http://localhost:4000`)
);