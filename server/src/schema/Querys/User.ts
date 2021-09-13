import { GraphQLList} from 'graphql';
import {UserType} from "../Typedefs/User"
import {Users} from "../../Entities/Users"
export const GET_ALL_USER = {
    type: new GraphQLList(UserType),
    // resolve(): Promise<IUser[]> {
    resolve() {
        return Users.find();
    }
}