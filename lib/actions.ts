import { GraphQLClient } from "graphql-request";
import { getUserQuery, createUserMutation } from '../graphql/index'
const isProduction = process.env.NODE_ENV === 'production'
const apiUrl = isProduction? process.env.NEXT_PUBLIC_GRAFBASE_API_URL  || '': 'http://127.0.0.1:4000/graphql'
const apiKey= isProduction? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '': 'SECRET'
const serverURL= isProduction? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000'

const client= new GraphQLClient(apiUrl)


const makeGraphQLRequest = async(query:string,variables={}) => {
    try{
        return await client.request(query,variables)
    }
    catch(error){
        throw error
    }

}
export const getUser = (email:string,id:string) =>{
    client.setHeader('x-api-key','R0FG4HZQxls3GNzULCOUj2fHrcWIb4kri8EQOJT3u2iiQPDzwzIMo3cladhriGg5')
    //client.setHeader("Authorization", `Bearer ${id}`);
    console.log('client',client)
    return makeGraphQLRequest(getUserQuery,{email});
}

export const createUser = (name:string,email:string,avatarUrl:string,id:string) =>{
    client.setHeader('x-api-key','R0FG4HZQxls3GNzULCOUj2fHrcWIb4kri8EQOJT3u2iiQPDzwzIMo3cladhriGg5')
    //client.setHeader("Authorization", `Bearer ${id}`);

    const variables= {
        input:{
            name:name,
            email:email,
            avatarUrl:avatarUrl
        }
    }
    return makeGraphQLRequest(createUserMutation , variables)

}