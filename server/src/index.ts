import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema"
import cors from "cors";
import { createConnection } from "typeorm";
import {Users} from "./Entities/Users"

const main = async () => {
    await createConnection({
        type:"mysql",
        database: "graphql",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: [Users]
    }) 

    const app = express()
 
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(4000, () =>{
        console.log("Server subiu na 4000")
    })
};

main().catch((err) => {
    console.log(err);
});