import { GraphQLClient} from "graphql-request";
import { getUserQuery, createUserMutation } from '../graphql/index'
const isProduction = process.env.NODE_ENV === 'production'
const apiUrl = isProduction? process.env.NEXT_PUBLIC_GRAFBASE_API_URL  || '': 'http://127.0.0.1:4000/graphql'
const apiKEY= isProduction? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '': 'bHxFG1IWxaCMwZLZcUGoJlB4sbpTyBkag2wH5uBlhCSHDz3L8IKLtwaiLSdMUdee'
const serverURL= isProduction? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000'

const client= new GraphQLClient(apiUrl,{ errorPolicy: 'all' })


const makeGraphQLRequest = async(query:string,variables={}) => {
    try{
        console.log('client',client)

        return await client.rawRequest(query,variables)

    }
    catch(error){
        throw error
    }

}
export const getUser = (email:string) =>{
    client.setHeader('x-api-key',apiKEY)
    //client.setHeader("Authorization", `Bearer ${id}`);
    return makeGraphQLRequest(getUserQuery,{email});
}

export const createUser = (name:string,email:string,avatarUrl:string) =>{
   client.setHeader('x-api-key',apiKEY)
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